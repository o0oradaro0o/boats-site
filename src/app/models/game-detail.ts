export interface GameDetail {
  numPlayers: number;
  wn: string;
  settings: Settings;
  matchID: number;
  dateProcessed: string;
  playerName: string;
  winner: number;
  lh: string;
  tm: string;
  empGoldHist: EmpGold[];
  loadTime: number;
  mapVersion: number;
  buildOrder: ItemBuy[];
}

interface ItemBuy {
  item: number;
  cost: number;
  time: number;
}

interface EmpGold {
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
