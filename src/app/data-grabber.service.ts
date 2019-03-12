import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GameDetailContent } from './models/game-detail';

import { GameContent } from './models/game-simple';


const apiUrl = 'https://grdxgi2qm1.execute-api.us-east-1.amazonaws.com/battleships/';
const apikey = 'FX5Tqd1joL2CC3p1tjCoF7hJCIoRrNDv4m0tqmvo';


@Injectable({
  providedIn: 'root'
})
export class DataGrabberService {
  constructor(route: ActivatedRoute, private http: HttpClient) {}
  getGames(): Observable<GameContent> {
    // One of several ways to set up HTTP request URL parameters
    // without concatenating them manually.
      const httpOptions = {
        headers: new HttpHeaders({
          'x-api-key':  apikey,
        })};

      return this.http.get<GameContent>(apiUrl +
        'battleships_game?include=numPlayers,wn,settings,matchID,dateProcessed,gameDuration&take=100',
        httpOptions);
  }

  getGameDetail(matchId: number): Observable<GameDetailContent> {
    // One of several ways to set up HTTP request URL parameters
    // without concatenating them manually.
      const httpOptions = {
        headers: new HttpHeaders({
          'x-api-key':  apikey,
        })};
      console.log('made a call for ' + matchId);
      return this.http.get<GameDetailContent>(apiUrl + 'battleships/' + matchId, httpOptions);
  }
}
