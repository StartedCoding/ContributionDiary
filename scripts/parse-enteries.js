import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const ROOT = path.resolve(".");
const ENTRIES_DIR = path.join(ROOT, "entries");
const OUT = path.join(ROOT, "scripts", "_parsed.json");

function parseEntries() {
  const files = glob.sync("entries/**/*.md", { cwd: ROOT });
  const users = {};

  for (const file of files) {
    // Skip PROFILE.md files
    if (file.endsWith("PROFILE.md")) continue;

    const parts = file.split("/");
    // entries / username / file.md
    if (parts.length < 3) continue;
    const username = parts[1];
    const filename = parts[parts.length - 1];

    // Parse date from filename: YYYY-MM-DD-*
    const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
    if (!dateMatch) continue;

    const raw = fs.readFileSync(path.join(ROOT, file), "utf-8");
    const { data } = matter(raw);

    const entry = {
      file,
      username,
      date: data.date ? String(data.date).slice(0, 10) : dateMatch[1],
      project: data.project || "unknown",
      type: data.type || "contribution",
      tags: Array.isArray(data.tags) ? data.tags : [],
      time_spent: parseHours(data.time_spent),
      energy: data.energy || null,
    };

    if (!users[username]) {
      users[username] = { username, entries: [] };
    }
    users[username].entries.push(entry);
  }

  // Sort each user's entries by date ascending
  for (const u of Object.values(users)) {
    u.entries.sort((a, b) => a.date.localeCompare(b.date));
  }

  fs.writeFileSync(OUT, JSON.stringify(users, null, 2));
  console.log(
    `Parsed ${files.length} files across ${Object.keys(users).length} users.`,
  );
  return users;
}

function parseHours(val) {
  if (!val) return 0;
  const s = String(val);
  const match = s.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

parseEntries();
