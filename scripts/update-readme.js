import fs from "fs";
import path from "path";

const ROOT = path.resolve(".");
const PARSED = path.join(ROOT, "scripts", "_parsed.json");
const README = path.join(ROOT, "README.md");

function computeGlobalStats(users) {
  let totalEntries = 0;
  let totalHours = 0;
  let totalContributors = 0;
  const tagCount = {};
  const dateSet = new Set();

  for (const u of Object.values(users)) {
    totalContributors++;
    for (const e of u.entries) {
      totalEntries++;
      totalHours += e.time_spent;
      dateSet.add(e.date);
      for (const tag of e.tags) {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      }
    }
  }

  const topTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => `\`${tag}\``)
    .join(" ");

  const lastUpdated = new Date().toISOString().slice(0, 10);

  return {
    totalEntries,
    totalHours: Math.round(totalHours),
    totalContributors,
    topTags,
    lastUpdated,
  };
}

function buildStatsBlock(stats) {
  return `<!-- STATS:START -->
| Metric | Value |
|--------|-------|
| 👥 Contributors | ${stats.totalContributors} |
| 📝 Total Entries | ${stats.totalEntries} |
| ⏱️ Hours Tracked | ${stats.totalHours}h |
| 🔥 Top Tags | ${stats.topTags || "—"} |
| 🕐 Last Updated | ${stats.lastUpdated} |
<!-- STATS:END -->`;
}

function updateReadme() {
  const users = JSON.parse(fs.readFileSync(PARSED, "utf-8"));
  const stats = computeGlobalStats(users);
  const block = buildStatsBlock(stats);

  let readme = fs.readFileSync(README, "utf-8");

  if (readme.includes("<!-- STATS:START -->")) {
    readme = readme.replace(
      /<!-- STATS:START -->[\s\S]*?<!-- STATS:END -->/m,
      block,
    );
  } else {
    // Inject after the first --- (after the tagline)
    readme = readme.replace(/(^---\s*\n)/m, `$1\n${block}\n`);
  }

  fs.writeFileSync(README, readme);
  console.log("README stats updated.");
}

updateReadme();
