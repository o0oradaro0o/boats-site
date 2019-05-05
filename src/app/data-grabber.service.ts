import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDetailContent, GameDetail } from './models/game-detail';
import { GameContent } from './models/game-simple';
import { PlayerSimpleContent } from './models/player-simple';
import { ItemRecordContent } from './models/player-item-record';

const apiUrl =
  'https://grdxgi2qm1.execute-api.us-east-1.amazonaws.com/battleships/';
const apikey = 'FX5Tqd1joL2CC3p1tjCoF7hJCIoRrNDv4m0tqmvo';

@Injectable({
  providedIn: 'root'
})
export class DataGrabberService {
  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': apikey
    })
  };

  constructor(route: ActivatedRoute, private http: HttpClient) {}

  getGames(date: Date): Observable<GameContent> {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    const s =
      apiUrl +
      'battleships_games/' +
      yyyy +
      mm +
      dd +
      '?include=numPlayers,wn,settings,matchID,dateProcessed,gameDuration&take=200';
    return this.http.get<GameContent>(s, this.httpOptions);
  }

  getGameDetail(matchId: number): Observable<GameDetailContent> {
    console.log('made a call for ' + matchId);
    return this.http.get<GameDetailContent>(
      apiUrl + 'battleships/' + Math.abs(matchId),
      this.httpOptions
    );
  }

  getPlayerDetails(matchId: number): Observable<GameDetailContent> {
    console.log('made a call for ' + matchId);
    return this.http.get<GameDetailContent>(
      apiUrl +
        'battleships/' +
        Math.abs(matchId) +
        '?include=buildingDamage,connectionState,afk,playerName,lh,tm,loadTime,wn,shp,HeroDamage,buildOrder,dth,damageTanked,saleOrder,kls,lvl,boatOrder,playerID',
      this.httpOptions
    );
  }
  getGeneralGameDetail(matchId: number): Observable<GameDetailContent> {
    console.log('made a call for ' + matchId);
    return this.http.get<GameDetailContent>(
      apiUrl +
        'battleships/' +
        Math.abs(matchId) +
        '?include=numPlayers,gameDuration,empGoldHist,wn,combatLog,settings,matchID,dateProcessed&take=1',
      this.httpOptions
    );
  }
  getTopPlayers(): Observable<PlayerSimpleContent> {
    return this.http.get<PlayerSimpleContent>(
      apiUrl + 'query/582995a9-6a32-11e9-a89e-c70fc193172b',
      this.httpOptions
    );
  }

  getBoatData(): Observable<ItemRecordContent> {
    return this.http.get<ItemRecordContent>(
      apiUrl + 'query/e8a516bb-6eda-11e9-b8b5-e969e44c0733',
      this.httpOptions
    );
  }
  getItemData(): Observable<ItemRecordContent> {
    return this.http.get<ItemRecordContent>(
      apiUrl + 'query/56c4bfe4-6f42-11e9-b2b2-b91d96137316',
      this.httpOptions
    );
  }

  getPlayerItemData(playerId: number): Observable<ItemRecordContent> {
    const query = `{"query":"SELECT * FROM playerBuildInfo where playerID='${playerId}'"}`;
    return this.http.post<ItemRecordContent>(
      `${apiUrl}query/`,
      query,
      this.httpOptions
    );
  }

  getPlayerBoatData(playerId: number): Observable<ItemRecordContent> {
    const query = `{"query":"SELECT * FROM recentPlayerBoatInfo where playerID='${playerId}'"}`;
    return this.http.post<ItemRecordContent>(
      `${apiUrl}query/`,
      query,
      this.httpOptions
    );
  }

  getRecentMatches(playerId: number): Observable<GameDetail[]> {
    const columns =
      'trading, battle, coOp, wn, tm, gameDuration, kls, dth, lvl, numPlayers, shp, dateProcessed, matchID';
    const query = `{"query":"SELECT top (20) ${columns} FROM gamedata where playerID='${playerId}' and dedi=1 order by dateProcessed desc"}`;
    return this.http.post<GameDetail[]>(
      `${apiUrl}query/`,
      query,
      this.httpOptions
    );
  }
}
