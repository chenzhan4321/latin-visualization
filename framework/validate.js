#!/usr/bin/env node
/**
 * Validate commentary data files against the pipeline schema.
 *
 * Usage:
 *   node framework/validate.js data/yantie_s1_10.js [genre]
 *   node framework/validate.js data/*.js --genre classical-chinese-political
 *   node framework/validate.js --all
 *
 * Exit code 0 = all valid, 1 = errors found.
 */

const fs = require('fs');
const path = require('path');
const { validateSection, GENRES, TABS_BY_GENRE } = require('./schema.js');

// ── Detect genre from filename ──────────────────────────────
function guessGenre(filename) {
  const base = path.basename(filename);
  if (base.startsWith('yantie'))    return 'classical-chinese-political';
  if (base.startsWith('zuozhuan'))  return 'classical-chinese-history';
  if (base.startsWith('jinkui'))    return 'classical-chinese-tcm';
  if (base.startsWith('gryphius'))  return 'german-poetry';
  if (base.startsWith('brentano'))  return 'german-poetry';
  if (base.startsWith('sunzi'))     return 'classical-chinese-military';
  if (base.startsWith('laozi') || base.startsWith('zhuangzi')) return 'classical-chinese-philosophy';
  if (base.startsWith('shijing') || base.startsWith('chuci'))  return 'classical-chinese-literary';
  return null;
}

// ── Load JS data file ───────────────────────────────────────
function loadDataFile(filepath) {
  const code = fs.readFileSync(filepath, 'utf8');

  // Replace 'const' with 'var' so eval exposes variables
  const evalCode = code.replace(/^const /gm, 'var ');

  // Capture all SECTIONS_* variables
  const sections = [];
  const varNames = [];
  const matches = code.matchAll(/^const\s+(SECTIONS_\w+)/gm);
  for (const m of matches) {
    varNames.push(m[1]);
  }

  // Use Function constructor to avoid polluting global scope
  const fn = new Function(evalCode + '\nreturn {' + varNames.join(',') + '};');
  const result = fn();

  for (const name of varNames) {
    if (Array.isArray(result[name])) {
      sections.push(...result[name]);
    }
  }

  return sections;
}

// ── Main ────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);

  let files = [];
  let genreOverride = null;

  // Parse args
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--genre' && args[i + 1]) {
      genreOverride = args[++i];
    } else if (args[i] === '--all') {
      const dataDir = path.join(__dirname, '..', 'data');
      files = fs.readdirSync(dataDir)
        .filter(f => f.endsWith('.js'))
        .map(f => path.join(dataDir, f));
    } else {
      files.push(args[i]);
    }
  }

  if (files.length === 0) {
    console.log('Usage: node framework/validate.js <file.js> [--genre <genre>]');
    console.log('       node framework/validate.js --all');
    console.log('\nAvailable genres:', GENRES.join(', '));
    process.exit(0);
  }

  let totalErrors = 0;
  let totalSections = 0;
  let totalWords = 0;

  for (const filepath of files) {
    const genre = genreOverride || guessGenre(filepath);
    const basename = path.basename(filepath);

    console.log(`\n── ${basename} (genre: ${genre || 'unknown'}) ──`);

    let sections;
    try {
      sections = loadDataFile(filepath);
    } catch (e) {
      console.log(`  ERROR: Failed to parse file: ${e.message}`);
      totalErrors++;
      continue;
    }

    console.log(`  Sections: ${sections.length}`);

    for (const section of sections) {
      totalSections++;
      const wordCount = Array.isArray(section.words) ? section.words.length : 0;
      totalWords += wordCount;

      const result = validateSection(section, genre);

      if (result.valid) {
        console.log(`  §${section.id} "${section.title}" — OK (${wordCount} words)`);
      } else {
        console.log(`  §${section.id} "${section.title}" — ${result.errors.length} error(s):`);
        result.errors.forEach(e => console.log(`    - ${e}`));
        totalErrors += result.errors.length;
      }
    }

    // Check ID continuity
    const ids = sections.map(s => s.id);
    for (let i = 1; i < ids.length; i++) {
      if (ids[i] !== ids[i - 1] + 1) {
        console.log(`  WARNING: ID gap between §${ids[i - 1]} and §${ids[i]}`);
      }
    }
  }

  // Summary
  console.log(`\n── Summary ──`);
  console.log(`  Files: ${files.length}`);
  console.log(`  Sections: ${totalSections}`);
  console.log(`  Words annotated: ${totalWords}`);
  console.log(`  Errors: ${totalErrors}`);

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
