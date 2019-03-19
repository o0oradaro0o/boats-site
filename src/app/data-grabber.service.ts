import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDetailContent } from './models/game-detail';
import { GameContent } from './models/game-simple';

const apiUrl = 'https://grdxgi2qm1.execute-api.us-east-1.amazonaws.com/battleships/';
const apikey = 'FX5Tqd1joL2CC3p1tjCoF7hJCIoRrNDv4m0tqmvo';

@Injectable({
  providedIn: 'root'
})
export class DataGrabberService {

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key':  apikey,
    })};

  constructor(route: ActivatedRoute, private http: HttpClient) {}

  getGames(): Observable<GameContent> {
      return this.http.get<GameContent>(apiUrl +
        'battleships_game?include=numPlayers,wn,settings,matchID,dateProcessed,gameDuration&take=200',
        this.httpOptions);
  }

  getGameDetail(matchId: number): Observable<GameDetailContent> {
      console.log('made a call for ' + matchId);
      return this.http.get<GameDetailContent>(apiUrl + 'battleships/' + matchId, this.httpOptions);
  }
}
