export interface GameDetail {
  numPlayers: number;
  wn: string; // winner: north or south
  settings: Settings;
  matchID: number;
  dateProcessed: string;
  playerName: string;
  winner: number; // did this player win 0 no 1 yes
  lh: string; // last hits
  tm: string; // team
  empGoldHist: EmpGold[];
  loadTime: number;
  mapVersion: number;
  buildOrder: ItemBuy[];
  combatLog: CombatLogEntry;
  HeroDamage: number;
  dth: number; // player deaths
  damageTanked: number;
  saleOrder: ItemSell[];
  kls: number;
  lvl: number;
  boatOrder: BoatSell[];
  playerID: string;
}

interface BoatSell {
  item: number;
  time: number;
}

interface ItemSell {
  item: number;
  time: number;
}

interface ItemBuy {
  item: number;
  cost: number;
  time: number;
}

interface CombatLogEntry {
  killed_name: string;
  killer_name: string;
  time: number;
}

export interface EmpGold {
  North_gold: number;
  South_Gold: number;
  EmpireGoldCount: number;
}

interface Settings {
  battle: number;
  coOp: number;
  trading: number;
}

export interface GameDetailContent {
  Content: GameDetail[];
}
