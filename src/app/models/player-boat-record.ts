export interface BoatRecord {
    playerID: number;
    games: number;
    wins: number;
    compWins: number;
    compGames: number;
    item: string;
 }
export interface BoatRecordContent {
   Content: BoatRecord[];
 }
 