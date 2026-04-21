#!/usr/bin/env node
/**
 * parse-game-data.js
 *
 * Fetches Battleships Reborn Valve KeyValues game files from GitHub and
 * outputs JSON assets for the Angular website.
 *
 * Usage:
 *   npm run parse-game-data
 *   node scripts/parse-game-data.js
 *   node scripts/parse-game-data.js --branch my-branch
 *
 * Outputs:
 *   src/assets/game-data/ships.json
 *   src/assets/game-data/items.json
 *   src/assets/game-data/abilities.json
 */

'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGES_PATH = 'content/battleships_traders/panorama/images';

// ── Configuration ─────────────────────────────────────────────────────────────

const REPO = 'o0oradaro0o/Battleships_Reborn';
const args = process.argv.slice(2);
const branchIdx = args.indexOf('--branch');
const BRANCH = branchIdx !== -1 ? args[branchIdx + 1] : 'master';
const NPC_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/game/battleships_traders/scripts/npc`;

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'game-data');

// ── HTTP helpers ──────────────────────────────────────────────────────────────

const AGENT_HEADERS = { 'User-Agent': 'battleships-parse-game-data' };

function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { ...AGENT_HEADERS, ...headers } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return httpsGet(res.headers.location, headers).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      })
      .on('error', reject);
  });
}

function fetchText(url) {
  return httpsGet(url).then((buf) => buf.toString('utf8'));
}

function fetchBinary(url) {
  return httpsGet(url);
}

function fetchApiJson(url) {
  return httpsGet(url, { Accept: 'application/vnd.github.v3+json' }).then(
    (buf) => JSON.parse(buf.toString('utf8')),
  );
}

// ── Valve KeyValues Parser ────────────────────────────────────────────────────

function parseKV(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  text = text.replace(/\/\/[^\n]*/g, '');

  let pos = 0;

  function skipWhitespace() {
    while (pos < text.length && /\s/.test(text[pos])) pos++;
  }

  function readToken() {
    skipWhitespace();
    if (pos >= text.length) return null;

    if (text[pos] === '"') {
      pos++;
      const start = pos;
      while (pos < text.length && text[pos] !== '"') {
        if (text[pos] === '\\') pos++;
        pos++;
      }
      const value = text.slice(start, pos);
      if (text[pos] === '"') pos++;
      return value;
    }

    if (text[pos] === '{' || text[pos] === '}') return text[pos++];

    const start = pos;
    while (
      pos < text.length &&
      !/\s/.test(text[pos]) &&
      text[pos] !== '{' &&
      text[pos] !== '}'
    ) {
      pos++;
    }
    const tok = text.slice(start, pos);
    return tok || null;
  }

  function parseBlock() {
    const obj = {};
    while (pos < text.length) {
      skipWhitespace();
      if (pos >= text.length) break;
      const token = readToken();
      if (token === null || token === '}') break;
      if (token === '{') continue;
      skipWhitespace();
      const next = readToken();
      if (next === '{') {
        const child = parseBlock();
        if (obj[token] !== undefined) {
          if (!Array.isArray(obj[token])) obj[token] = [obj[token]];
          obj[token].push(child);
        } else {
          obj[token] = child;
        }
      } else if (next === '}') {
        if (token) obj[token] = '';
        break;
      } else {
        obj[token] = next != null ? next : '';
      }
    }
    return obj;
  }

  skipWhitespace();
  const firstToken = readToken();
  if (firstToken === null) return {};
  skipWhitespace();
  const next = readToken();
  if (next === '{') return { [firstToken]: parseBlock() };
  return {};
}

// ── Ship display names & metadata ─────────────────────────────────────────────

const SHIP_META = {
  npc_dota_hero_tiny_battleship8d: {
    name: 'Starter Boat',
    tier: 0,
    icon: 'starter_boat',
    heroImage: null,
  },
  npc_dota_hero_abaddon_battleship8d: {
    name: 'Barrel',
    tier: 0,
    icon: 'barrel_boat',
    heroImage: 'barrel.png',
  },
  npc_dota_hero_puck_battleship8d: {
    name: 'Zodiac',
    tier: 1,
    icon: 'zodiac',
    heroImage: null,
  },
  npc_dota_hero_crystal_maiden_battleship8d: {
    name: 'Canoe',
    tier: 1,
    icon: 'canoe_boat',
    heroImage: 'npc_dota_hero_crystal_maiden.png',
  },
  npc_dota_hero_phantom_lancer_battleship8d: {
    name: 'Airboat',
    tier: 1,
    icon: 'air_boat',
    heroImage: 'npc_dota_hero_phantom_lancer.png',
  },
  npc_dota_hero_tidehunter_battleship8d: {
    name: 'Pontoon',
    tier: 1,
    icon: 'pontoon_boat',
    heroImage: 'npc_dota_hero_tidehunter.png',
  },
  npc_dota_hero_rubick_battleship8d: {
    name: 'Catamaran',
    tier: 1,
    icon: 'catamaran',
    heroImage: null,
  },
  npc_dota_hero_batrider_battleship8d: {
    name: 'Dinghy',
    tier: 1,
    icon: 'dinghy_boat',
    heroImage: 'npc_dota_hero_batrider.png',
  },
  crab_ship: { name: 'Crab', tier: 1, icon: 'crab', heroImage: null },
  npc_dota_hero_brewmaster_battleship: {
    name: 'River Boat',
    tier: 2,
    icon: 'river_boat',
    heroImage: 'npc_dota_hero_brewmaster.png',
  },
  npc_dota_hero_nevermore_battleship8d: {
    name: 'Plane',
    tier: 2,
    icon: 'plane_boat',
    heroImage: 'npc_dota_hero_nevermore.png',
  },
  npc_dota_hero_lion_battleship8d: {
    name: 'Yacht',
    tier: 2,
    icon: 'yacht_boat',
    heroImage: 'npc_dota_hero_lion.png',
  },
  npc_dota_hero_jakiro_battleship8d: {
    name: 'Galleon',
    tier: 2,
    icon: 'galleon_boat',
    heroImage: 'npc_dota_hero_jakiro.png',
  },
  npc_dota_hero_kunkka_bships: {
    name: 'Coast Guard',
    tier: 2,
    icon: 'coast_boat',
    heroImage: 'kunkka.png',
  },
  npc_dota_hero_morphling_battleship8d: {
    name: 'Speed Boat',
    tier: 2,
    icon: 'speed_boat',
    heroImage: null,
  },
  npc_dota_hero_storm_spirit_battleship8d: {
    name: 'Junk Boat',
    tier: 2,
    icon: 'junk_boat',
    heroImage: 'npc_dota_hero_storm_spirit.png',
  },
  npc_dota_hero_brewmaster_battleship8d: {
    name: 'House Boat',
    tier: 3,
    icon: 'house_boat',
    heroImage: 'brewmaster.png',
  },
  fail_ship: { name: 'Fail Ship', tier: 3, icon: 'fail_ship', heroImage: null },
};

const UNIVERSAL_ABILITIES = new Set([
  'pistols_battleship',
  'bships_empty',
  'ability_empty',
  'go_home_battleship',
  '',
]);

function extractShips(heroData) {
  const heroes = heroData['DOTAHeroes'];
  if (!heroes) {
    console.warn('  Warning: DOTAHeroes block not found');
    return [];
  }

  return Object.entries(heroes)
    .filter(([key, data]) => typeof data === 'object' && !!SHIP_META[key])
    .map(([key, data]) => {
      const meta = SHIP_META[key];
      const abilities = [];
      for (let i = 1; i <= 6; i++) {
        const ab = data[`Ability${i}`];
        if (ab && !UNIVERSAL_ABILITIES.has(ab)) abilities.push(ab);
      }
      return {
        key,
        name: meta.name,
        icon: meta.icon,
        tier: meta.tier,
        heroImage: meta.heroImage,
        hp: parseInt(data['StatusHealth']) || 0,
        hpRegen: parseFloat(data['StatusHealthRegen']) || 0,
        speed: parseInt(data['MovementSpeed']) || 0,
        turnRate: parseFloat(data['MovementTurnRate']) || 0,
        bountyGold: parseInt(data['BountyGoldMin']) || 0,
        abilities,
      };
    })
    .sort((a, b) => a.tier - b.tier || a.hp - b.hp);
}

// ── Item extraction ───────────────────────────────────────────────────────────

const TIER_WORDS = ['one', 'two', 'three', 'four'];
const WEAPON_TYPES = [
  'poison',
  'fire',
  'ice',
  'wind',
  'light',
  'coal',
  'plasma',
  'spin',
  'spread',
  'breach',
  'chaos',
  'iron',
];
const MIX_TYPES = [
  'spread_plasma',
  'plasma_fire',
  'fire_coal',
  'coal_chaos',
  'chaos_poison',
  'poison_light',
  'light_spin',
  'spin_breach',
  'breach_ice',
  'ice_wind',
  'light_iron',
  'iron_breach',
];

function inferWeaponType(key) {
  for (const mix of MIX_TYPES) {
    if (key.includes(mix)) return mix;
  }
  for (const t of WEAPON_TYPES) {
    if (key.includes(t)) return t;
  }
  return 'unknown';
}

function inferWeaponTier(key) {
  if (key.includes('_ult_')) return 4;
  if (key.includes('_three_')) return 3;
  if (key.includes('_two_')) return 2;
  return 1;
}

function inferTier(key, prefix) {
  const suffix = key.replace(prefix, '');
  const idx = TIER_WORDS.indexOf(suffix);
  return idx >= 0 ? idx + 1 : 0;
}

function toDisplayName(key) {
  return key
    .replace('item_', '')
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function extractItems(itemData) {
  const abilities = itemData['DOTAAbilities'];
  if (!abilities) {
    console.warn('  Warning: DOTAAbilities block not found');
    return { weapons: [], hulls: [], sails: [], repairs: [], woods: [] };
  }

  const weapons = [],
    hulls = [],
    sails = [],
    repairs = [],
    woods = [];

  for (const [key, data] of Object.entries(abilities)) {
    if (typeof data !== 'object' || key.startsWith('item_recipe_')) continue;

    const cost = parseInt(data['ItemCost']) || 0;
    const textureName = data['AbilityTextureName'] || key;
    const av =
      data['AbilityValues'] && typeof data['AbilityValues'] === 'object'
        ? data['AbilityValues']
        : {};
    const base = { key, name: toDisplayName(key), textureName, cost };

    if (
      (key.includes('_bow') || key.includes('_cannon')) &&
      !key.includes('_recipe')
    ) {
      const dps = parseFloat(av['dps']) || 0;
      const dmg = parseFloat(av['dmg']) || 0;
      if (!dps && !dmg) continue;
      weapons.push({
        ...base,
        type: inferWeaponType(key),
        tier: inferWeaponTier(key),
        doubled: key.includes('_doubled'),
        isMix: MIX_TYPES.some((m) => key.includes(m)),
        isUlt: key.includes('_ult_'),
        dmg,
        dps,
        fireRate: parseFloat(av['fire_rate']) || 0,
        range: parseInt(av['range']) || parseInt(data['AbilityCastRange']) || 0,
        aoe: parseFloat(av['aoe']) || 0,
        projectileSpeed: parseInt(av['speed']) || 0,
      });
    } else if (
      key.startsWith('item_hull_') &&
      !key.includes('combo') &&
      !key.includes('sail')
    ) {
      const tier = inferTier(key, 'item_hull_');
      if (!tier) continue;
      hulls.push({
        ...base,
        tier,
        bonusHp: parseInt(av['bonus_hp']) || 0,
        bonusArmor: parseInt(av['bonus_armor']) || 0,
      });
    } else if (key.startsWith('item_sail_')) {
      const tier = inferTier(key, 'item_sail_');
      if (!tier) continue;
      sails.push({
        ...base,
        tier,
        bonusMovement: parseInt(av['bonus_movement']) || 0,
        burstSpeed: parseInt(av['bonus_speed']) || 0,
      });
    } else if (key.startsWith('item_repair_')) {
      const tier = inferTier(key, 'item_repair_');
      if (!tier) continue;
      repairs.push({
        ...base,
        tier,
        bonusRegenPercent: parseFloat(av['bonus_regen']) || 0,
        healthRegen: parseFloat(av['health_regen']) || 0,
      });
    } else if (key.startsWith('item_wood_')) {
      const tier = inferTier(key, 'item_wood_');
      if (!tier) continue;
      woods.push({
        ...base,
        tier,
        healAmount: parseInt(av['heal_amount']) || 0,
      });
    }
  }

  const byType = (a, b) =>
    a.type.localeCompare(b.type) || a.tier - b.tier || a.cost - b.cost;
  const byTier = (a, b) => a.tier - b.tier || a.cost - b.cost;
  weapons.sort(byType);
  hulls.sort(byTier);
  sails.sort(byTier);
  repairs.sort(byTier);
  woods.sort(byTier);

  return { weapons, hulls, sails, repairs, woods };
}

// ── Ability descriptions ──────────────────────────────────────────────────────

const ABILITY_DESCRIPTIONS = {
  pistols_battleship: 'Fires pistols at nearby enemies for a short burst.',
  bail_water: 'Bail water for a burst of movement speed.',
  tighten_hoop: 'Passive: Tighten barrel hoops for bonus armor and regen.',
  batten_hatches:
    'Batten down the hatches, reducing incoming damage temporarily.',
  dive_battleship: 'Phase through enemy ships briefly to reposition.',
  ramming_speed_battleship:
    'Ram forward at high speed, damaging enemies in your path.',
  war_drumbs_battleship:
    'Beat war drums to boost nearby allied movement speed.',
  might_battleship: 'Channel inner might for increased durability.',
  swamp_gas_battleship:
    'Release swamp gas, slowing and poisoning nearby enemies.',
  fan_blast_battleship: 'Fan out a blast that pushes enemies away.',
  head_above_water_battleship: 'Heal based on missing health.',
  meepo_earthbind_battleship: 'Drop anchor chains to root a group of enemies.',
  mirana_leap_battlsehip: 'Leap across the water at high speed.',
  windrunner_powershot_battleship: 'Fire a high-velocity power shot in a line.',
  harpoon_battleship:
    'Fire a harpoon that pulls the first enemy hit toward you.',
  wale_bait_battleship: 'Drop bait that lures enemies toward it.',
  crab_walk: 'Sidestep quickly to dodge incoming fire.',
  crab_grab: 'Snatch a nearby enemy, holding them in place.',
  kunkka_torrent_bships: 'Call down a torrent of water at a target location.',
  coast_heal_battleship: 'Coastal currents repair your hull over time.',
  no_fire_zone: 'Establish a no-fire zone around you.',
  speed_boat_wave: 'Create a wake wave that damages and slows enemies.',
  gun_it: 'Gun the engine for a burst of extreme speed.',
  swim_battleship: 'Dive below the surface briefly, becoming untargetable.',
  cloud_dragon_lua: 'Deploy a cloud dragon to breathe fire at enemies.',
  firework_battleship: 'Launch fireworks that explode for area damage.',
  nav_hack_battleship: 'Hack enemy navigation, reversing their controls.',
  gamble_cherry_one: 'Pull the cherry slot for a random effect.',
  gamble_bell_one: 'Pull the bell slot for a random effect.',
  gamble_seven_one: 'Pull the seven slot — jackpot if all three match.',
  gamble: 'Spin all three slots for a powerful random outcome.',
  plane_fly_battleship: 'Take to the air briefly, passing over terrain.',
  ruse_battleship: 'Disguise your ship as wreckage.',
  mayday_battleship: 'Draw all nearby enemy fire away from allies.',
  doom_bringer_scorched_earth_battleship:
    'Set the sea ablaze, dealing fire damage over time.',
  keeping_up_battleship: 'Match speed with a target vessel.',
  drop_craft: 'Drop a craft that harasses nearby enemies.',
  discoship_battleship:
    'Toggle disco mode — pulse damaging disco balls around you.',
  fun_battleship: 'Aura: Grant nearby allies regen and movement speed.',
  riki_blink_strike_battleship:
    'Blink behind an enemy ship and strike from stealth.',
  terrorblade_metamorphosis_datadriven:
    'Transform into a powerful combat form.',
  speed_shift: 'Rapidly shift speed to evade enemies.',
  vengefulspirit_nether_swap_datadriven:
    'Swap positions with any ship on the battlefield.',
};

function extractAbilities(abilityData) {
  const abilities = abilityData['DOTAAbilities'];
  const result = {};

  if (abilities) {
    for (const [key, data] of Object.entries(abilities)) {
      if (typeof data !== 'object' || !ABILITY_DESCRIPTIONS[key]) continue;
      const av =
        data['AbilityValues'] && typeof data['AbilityValues'] === 'object'
          ? data['AbilityValues']
          : {};
      result[key] = {
        key,
        description: ABILITY_DESCRIPTIONS[key],
        textureName: data['AbilityTextureName'] || key,
        cooldown: data['AbilityCooldown'] || '0',
        castRange: parseInt(data['AbilityCastRange']) || 0,
        values: Object.fromEntries(Object.entries(av)),
      };
    }
  }

  for (const [key, description] of Object.entries(ABILITY_DESCRIPTIONS)) {
    if (!result[key]) {
      result[key] = {
        key,
        description,
        textureName: key,
        cooldown: '0',
        castRange: 0,
        values: {},
      };
    }
  }

  return result;
}

// ── Image downloader ──────────────────────────────────────────────────────────

async function downloadImages(repoSubDir, outputSubDir) {
  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${IMAGES_PATH}/${repoSubDir}?ref=${BRANCH}`;
  let entries;
  try {
    entries = await fetchApiJson(apiUrl);
  } catch (e) {
    console.warn(`  Warning: could not list ${repoSubDir} — ${e.message}`);
    return 0;
  }

  const pngs = entries.filter(
    (f) => f.type === 'file' && f.name.toLowerCase().endsWith('.png'),
  );
  const outDir = path.join(OUTPUT_DIR, 'images', outputSubDir);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let downloaded = 0;
  let skipped = 0;
  for (const file of pngs) {
    const outPath = path.join(outDir, file.name);
    if (fs.existsSync(outPath)) {
      skipped++;
      continue;
    }
    const data = await fetchBinary(file.download_url);
    fs.writeFileSync(outPath, data);
    downloaded++;
  }

  if (skipped) process.stdout.write(` (${skipped} cached)`);
  return downloaded + skipped;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log('\n  Battleships Game Data Parser');
  console.log(`  Repo   : https://github.com/${REPO}`);
  console.log(`  Branch : ${BRANCH}`);
  console.log(`  Output : ${OUTPUT_DIR}\n`);

  const files = {
    heroes: `${NPC_BASE}/npc_heroes_custom.txt`,
    items: `${NPC_BASE}/npc_items_custom.txt`,
    abilities: `${NPC_BASE}/npc_abilities_custom.txt`,
  };

  console.log('  Fetching npc_heroes_custom.txt ...');
  const heroText = await fetchText(files.heroes);
  console.log('  Fetching npc_items_custom.txt ...');
  const itemText = await fetchText(files.items);
  console.log('  Fetching npc_abilities_custom.txt ...');
  const abilityText = await fetchText(files.abilities);

  const heroData = parseKV(heroText);
  const itemData = parseKV(itemText);
  const abilityData = parseKV(abilityText);

  const ships = extractShips(heroData);
  const items = extractItems(itemData);
  const abilities = extractAbilities(abilityData);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`  Created: ${OUTPUT_DIR}`);
  }

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'ships.json'),
    JSON.stringify({ ships }, null, 2),
    'utf8',
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'items.json'),
    JSON.stringify(items, null, 2),
    'utf8',
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'abilities.json'),
    JSON.stringify(abilities, null, 2),
    'utf8',
  );

  const util =
    items.hulls.length +
    items.sails.length +
    items.repairs.length +
    items.woods.length;
  console.log(`\n  ships.json     — ${ships.length} ships`);
  console.log(
    `  items.json     — ${items.weapons.length} weapons + ${util} utility items`,
  );
  console.log(
    `                   (hulls: ${items.hulls.length}  sails: ${items.sails.length}  repairs: ${items.repairs.length}  woods: ${items.woods.length})`,
  );
  console.log(
    `  abilities.json — ${Object.keys(abilities).length} ship abilities`,
  );

  console.log('\n  Downloading images from GitHub ...');
  process.stdout.write('    heroes     ');
  const heroCount = await downloadImages('heroes', 'heroes');
  process.stdout.write(`  — ${heroCount} files\n`);
  process.stdout.write('    items      ');
  const itemCount = await downloadImages('items', 'items');
  process.stdout.write(`  — ${itemCount} files\n`);
  process.stdout.write('    spellicons ');
  const spellCount = await downloadImages('spellicons', 'spellicons');
  process.stdout.write(`  — ${spellCount} files\n`);

  console.log('\nDone! Commit src/assets/game-data/ and redeploy.\n');
}

run().catch((err) => {
  console.error('\nError:', err.message);
  process.exit(1);
});
