export interface GameSimple {
  numPlayers: number;
  wn: string;
  settings: Settings;
  matchID: number;
  dateProcessed: string;
  gameDuration: string;
  battle: number;
  coOp: number;
  trading: number;
}

interface Settings {
  battle: number;
  coOp: number;
  trading: number;
}

export interface GameContent {
  Content: GameSimple[];
}
