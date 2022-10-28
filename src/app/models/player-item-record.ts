export interface ItemRecord {
    playerID: number;
    games: number;
    wins: number;
    compWins: number;
    compGames: number;
    item: string;
 }
export interface ItemRecordContent {
   Content: ItemRecord[];
 }
 