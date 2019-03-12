export interface GameSimple {
  numPlayers: number;
  wn: string;
  settings: Settings;
  matchID: number;
  dateProcessed: string;
}

interface Settings {
  battle: number;
  coOp: number;
  trading: number;
}

export interface GameContent {
  Content: GameSimple[];
}
