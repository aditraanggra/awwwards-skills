#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const SKILLS = {
  'layout-structure': 'layout-structure.md',
  'hero-section': 'hero-section.md',
  'animation-orchestration': 'animation-orchestration.md',
  'creative-copywriting': 'creative-copywriting.md',
}

const SKILLS_SOURCE = path.join(__dirname, '..', 'skills')
const TARGET_DIR = path.join(process.cwd(), 'skills')

const args = process.argv.slice(2)
const command = args[0]
const skillName = args[1]

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function copySkill(name) {
  const filename = SKILLS[name]
  if (!filename) {
    console.error(`\n❌ Unknown skill: "${name}"`)
    console.log(`\nAvailable skills:\n${Object.keys(SKILLS).map(s => `  • ${s}`).join('\n')}`)
    process.exit(1)
  }
  const src = path.join(SKILLS_SOURCE, filename)
  const dest = path.join(TARGET_DIR, filename)
  fs.copyFileSync(src, dest)
  console.log(`  ✓ ${filename}`)
}

function init() {
  console.log('\n🏆 awwwards-skills — initializing all skills\n')
  ensureDir(TARGET_DIR)
  Object.keys(SKILLS).forEach(copySkill)
  console.log(`\n✅ All 4 skills installed to /skills/\n`)
  console.log('Next steps:')
  console.log('  1. Open Claude, Cursor, or your AI agent')
  console.log('  2. Upload or paste the relevant SKILL.md')
  console.log('  3. Start with layout-structure.md → hero-section.md → creative-copywriting.md → animation-orchestration.md\n')
}

function add(name) {
  console.log(`\n🏆 awwwards-skills — adding skill: ${name}\n`)
  ensureDir(TARGET_DIR)
  copySkill(name)
  console.log(`\n✅ Skill installed to /skills/${SKILLS[name]}\n`)
}

function list() {
  console.log('\n🏆 awwwards-skills — available skills\n')
  Object.keys(SKILLS).forEach(name => {
    console.log(`  • ${name}`)
  })
  console.log('\nUsage:')
  console.log('  npx awwwards-skills init              — install all skills')
  console.log('  npx awwwards-skills add <skill-name>  — install one skill\n')
}

// Router
switch (command) {
  case 'init':
    init()
    break
  case 'add':
    if (!skillName) {
      console.error('\n❌ Please specify a skill name.')
      list()
      process.exit(1)
    }
    add(skillName)
    break
  case 'list':
  case '--list':
    list()
    break
  case undefined:
  case '--help':
  case '-h':
    list()
    break
  default:
    console.error(`\n❌ Unknown command: "${command}"`)
    list()
    process.exit(1)
}
