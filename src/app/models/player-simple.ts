export interface PlayerSimple {
   playerID: number;
   playerName: string;
   games: number;
   wins: number;
   compWins: number;
   compGames: number;
   kills: number;
   deaths: number;
   lastHits: number;
   lastGame: string;
}
export interface PlayerSimpleContent {
  Content: PlayerSimple[];
}
