export interface GameDetail {
  numPlayers: number;
  wn: string;
  settings: settings;
  matchID: number;
  dateProcessed: string;
  playerName: string;
  winner: number;
  lh: string;
  tm: string;
  empGoldHist: empGold[]
  loadTime: number;
  mapVersion: number;
  buildOrder: itemBuy[]
}
interface itemBuy
{
  item: number;
  cost: number;
  time: number;
}
interface empGold
{
  North_gold: number;
  South_Gold: number;
  EmpireGoldCount: number;
}
interface settings
{
  battle: number;
  coOp: number;
  trading: number;
}
export interface gameDetailContent
{
  Content: GameDetail[]
}
