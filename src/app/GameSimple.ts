export interface GameSimple {
  numPlayers: number;
  wn: string;
  settings: settings;
  matchID: number;
}

interface settings 
{
  battle: number;
  coOp: number;
  trading: number;
}
export interface content
{
  content: GameSimple[]
}