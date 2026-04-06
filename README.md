# ContributionDiary

> Log what you build. Track what you learn. Build proof of work.

Most developers do great work that disappears — closed tabs, forgotten commits, solved problems no one ever sees. ContributionDiary is a structured, open-source system to make that work visible: to yourself, to collaborators, and to anyone who wants to understand how you think and grow.

This is not a portfolio. It's a **practice**.

---

## Why Public Logging?

When you log publicly, something shifts. You stop doing work just to finish it - you do it in a way you can explain. That habit alone compounds into better thinking, clearer communication, and a growing archive of evidence that you show up consistently.

Six months of daily logs is more convincing than any resume bullet.

---

## What You Can Track

| Log Type | Best For |
|---|---|
| 📌 **Contribution Log** | Deep work - features, bug fixes, open-source PRs |
| ⏱️ **Hourly Log** | Daily consistency - what you actually did, hour by hour |
| 🗓️ **Weekly Review** | Reflection - wins, patterns, what to carry forward |

---

## Project Structure

```
/entries
  /your-github-username
    YYYY-MM-DD-project-name.md

/templates
  contribution-template.md
  hourly-log-template.md
  weekly-review-template.md
```

**Real example:**
```
/entries
  /utsav-sharma
    2025-04-06-postpilot-auth.md
    2025-04-07-rate-limiter.md
```

---

## Log Formats

### 📌 Contribution Log — Deep Work

Use this when you build, fix, or ship something meaningful.

```md
---
date: 2025-04-06
project: coderX
type: contribution
tags: [backend, auth, oauth]
time_spent: 3h
---

# Implemented Google OAuth + session-based auth guard

## 🧩 Project
PostPilot — Instagram content automation SaaS

## 🚀 Contribution
Built AuthContext, LoginModalContext, and useAuthGuard hook.
Wired LoginModal globally in layout.tsx so any page can trigger it.

## 🧠 What I Learned
How session cookies behave differently across subdomains — had to
set sameSite: 'lax' explicitly for the OAuth redirect to work.

## ⚙️ Challenges Faced
Google OAuth redirect URI mismatch in dev vs prod environments.

## 🛠️ How I Solved Them
Added environment-aware redirect URI config and documented it in .env.example.

## 🔗 References
- https://next-auth.js.org/configuration/providers/google

## ⏱️ Time Spent
3 hours

## 🪶 Tags
#backend #auth #oauth #nextjs
```

---

### ⏱️ Hourly Log — Daily Consistency

Use this to track your day and reflect on focus vs. drift.

```md
---
date: 2025-04-06
total_hours: 6
energy: high
---

## Plan for Today
- [ ] Finish auth guard hook
- [ ] Review open PRs on postpilot
- [ ] Study token bucket algorithm

## Hour-by-Hour

| Time | What I Did |
|------|------------|
| 09:00 – 10:00 | Set up AuthContext, wired to layout |
| 10:00 – 11:00 | Debugged OAuth redirect URI mismatch |
| 11:00 – 12:00 | Reviewed 2 open PRs, left comments |
| 14:00 – 15:00 | Read about token bucket — implemented basic version |
| 15:00 – 16:00 | Wrote contribution log entry |

## What I'd Do Differently
Started debugging too early before reading the NextAuth docs properly.
Cost me 40 minutes. Read first, code second.

## One Thing Into Tomorrow
Finish rate limiter — the refill logic isn't quite right yet.
```

---

### 🗓️ Weekly Review — Pattern Recognition

Use this every Sunday. It's where consistency becomes clarity.

```md
---
week: 2025-W14
date_range: Mon 31 Mar – Sun 6 Apr 2025
---

## At a Glance
| Metric | Value |
|--------|-------|
| Days logged | 6 / 7 |
| Hours tracked | 28h |
| Contributions | 4 |

## Top 3 Wins
1. Shipped OAuth flow end-to-end
2. First open-source PR merged
3. Logged every weekday without missing

## Biggest Challenge
Kept getting distracted mid-session — phone, Slack, context-switching.

## What I'd Do Differently
Block 2-hour deep work slots with notifications off from the start.

## Focus for Next Week
- [ ] Rate limiter — finish and test
- [ ] Write a blog post about the OAuth issue I solved
```

---

## How to Contribute

1. **Fork** this repository
2. **Create your folder** → `/entries/your-github-username/`
3. **Pick a template** from `/templates`
4. **Write your entry** — be honest, be specific
5. **Open a Pull Request** 🚀

Your first entry doesn't have to be impressive. It just has to exist.

> 💡 **Good first entry idea:** Log something you solved this week, even if it took 30 minutes. A bug you fixed, a concept you finally understood, a setup that was annoying. That counts.

---

## Tag Index

Use consistent tags so entries stay searchable across the repo.

**By domain**
`#backend` `#frontend` `#devops` `#mobile` `#database` `#system-design` `#api` `#auth`

**By activity**
`#debugging` `#refactoring` `#testing` `#open-source` `#code-review` `#learning` `#reading`

**By stack**
`#nextjs` `#nodejs` `#typescript` `#python` `#react` `#postgres` `#docker` `#aws`

**By log type**
`#contribution` `#hourly` `#weekly-review`

---

## Contributing Guidelines

- One entry per pull request
- File names must follow `YYYY-MM-DD-project-name.md` format
- Use the templates from `/templates` - you can extend them, not shrink them
- Keep it honest — struggle and failures are as valuable as wins
- No self-promotion, spam, or entries under 100 words
- See `CONTRIBUTING.md` for full rules

---

## Consistency > Intensity

You don't need a 6-hour grind session to log. You need a commit.

Small daily logs compound. A year from now, your `/entries` folder will be a map of how you think, what you built, and how you grew — something no interview question can extract and no recruiter can fake.

**Start today. Log something. Push it.**

---

<div align="center">

Made for developers who build in public and grow in public.

⭐ Star this repo if you're logging consistently — it keeps you accountable.

</div>
