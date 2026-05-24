# awwwards-skills

> A collection of AI Agent SKILL.md files for building Awwwards-quality websites.  
> Drop them into any AI coding agent (Claude, Cursor, Windsurf, etc.) and unlock a specialized Creative Director workflow.

[![npm version](https://img.shields.io/npm/v/awwwards-skills.svg)](https://www.npmjs.com/package/awwwards-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)

---

## What's inside

| Skill | File | What it does |
|---|---|---|
| 🏗️ Layout Structure | `layout-structure.md` | Generates layout architecture from project type + references |
| 🎬 Hero Section | `hero-section.md` | Designs above-the-fold sections with archetype taxonomy |
| ✨ Animation Orchestration | `animation-orchestration.md` | GSAP + Lenis + Barba.js motion systems |
| ✍️ Creative Copywriting | `creative-copywriting.md` | Brand-voice copy, multilingual, zero buzzwords |

---

## Install

### Via npm (recommended)

```bash
npx awwwards-skills init
```

This copies all 4 SKILL.md files into a `/skills` folder in your project.

### Install specific skills

```bash
npx awwwards-skills add layout-structure
npx awwwards-skills add hero-section
npx awwwards-skills add animation-orchestration
npx awwwards-skills add creative-copywriting
```

### Via GitHub (manual)

```bash
git clone https://github.com/yourusername/awwwards-skills.git
cp awwwards-skills/skills/*.md your-project/skills/
```

---

## Usage

### With Claude (claude.ai or Claude Code)

1. Open a new conversation
2. Upload or paste the relevant SKILL.md
3. Say: `"Use this skill."` — the agent reads it and activates the role
4. Fill in the input template when prompted

### With Cursor / Windsurf

Add to your `.cursorrules` or project context:

```
Read and follow the instructions in /skills/layout-structure.md before designing any page layout.
Read and follow the instructions in /skills/animation-orchestration.md before writing any animation code.
```

### With any AI Agent

Paste the SKILL.md content directly into your system prompt or project context file.

---

## Skill Workflow (recommended order)

```
1. layout-structure.md   →  Plan the page architecture
2. hero-section.md       →  Design the hero experience
3. creative-copywriting.md  →  Write the words
4. animation-orchestration.md  →  Add motion
```

Each skill is independent and can be used standalone.

---

## Designed for

- **Agency / Studio Portfolios**
- **SaaS / Tech Products**
- **Luxury E-commerce**

Tech stacks: **React/Next.js** and **Vanilla HTML/CSS/JS**

---

## Design Philosophy

These skills enforce Awwwards-level thinking:

- **No generic layouts** — every structural decision is intentional
- **No buzzword copy** — banned word lists enforced
- **No bolt-on animation** — motion is a system, not an afterthought
- **No shrunk-desktop mobile** — mobile layouts get their own spatial logic

---

## Contributing

PRs welcome. New skills, new archetypes, new project types.

```bash
git clone https://github.com/yourusername/awwwards-skills.git
cd awwwards-skills
# Add your skill to /skills/
# Update README table
# Submit PR
```

---

## License

MIT © aditraanggra
