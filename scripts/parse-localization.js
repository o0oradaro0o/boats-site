/**
 * Simple parser: convert addon_english.txt (Valve KeyValues) to flat JSON.
 * Extracts all key → value pairs from the "Tokens" block.
 */
const fs = require('fs');
const path = require('path');

const src = 'C:/Users/matth/Desktop/Battleships_Reborn/game/battleships_traders/resource/addon_english.txt';
const dest = path.resolve(
  __dirname,
  '../src/assets/game-data/localization.json',
);

const text = fs.readFileSync(src, 'utf-8');

// Find the Tokens block
const start = text.indexOf('"Tokens"');
const brace = text.indexOf('{', start);
let depth = 0;
let end = brace;
for (let i = brace; i < text.length; i++) {
  if (text[i] === '{') depth++;
  else if (text[i] === '}') {
    depth--;
    if (depth === 0) { end = i; break; }
  }
}
const block = text.substring(brace + 1, end);

// Extract all "key" "value" pairs
const tokens = {};
const re = /"([^"]+)"\s+"((?:[^"\\]|\\.)*)"/g;
let m;
while ((m = re.exec(block)) !== null) {
  tokens[m[1].trim()] = m[2].trim();
}

fs.writeFileSync(dest, JSON.stringify(tokens, null, 2));
console.log(`Extracted ${Object.keys(tokens).length} tokens → ${dest}`);
