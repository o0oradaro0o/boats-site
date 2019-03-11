export interface GameSimple {
  numPlayers: number;
  wn: string;
  settings: settings;
  matchID: number;
  dateProcessed: string;
}

interface settings
{
  battle: number;
  coOp: number;
  trading: number;
}
export interface content
{
  Content: GameSimple[]
}
