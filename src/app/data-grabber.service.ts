import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDetailContent } from './models/game-detail';
import { GameContent } from './models/game-simple';

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
<<<<<<< HEAD
    let s = apiUrl +
    'battleships_games/' + yyyy + mm + dd + '?include=numPlayers,wn,settings,matchID,dateProcessed,gameDuration&take=200'
    return this.http.get<GameContent>(s,
      this.httpOptions);
=======
    const s =
      apiUrl +
      'battleships_games/' +
      yyyy +
      mm +
      dd +
      '?include=numPlayers,wn,settings,matchID,dateProcessed,gameDuration&take=200';
    return this.http.get<GameContent>(s, this.httpOptions);
>>>>>>> b22ef4ad77398ba686efd71eacd9ee33772a1824
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
<<<<<<< HEAD
}
=======
}
>>>>>>> b22ef4ad77398ba686efd71eacd9ee33772a1824
