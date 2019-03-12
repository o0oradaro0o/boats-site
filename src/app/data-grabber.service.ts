import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GameSimple, gameContent } from './GameSimple';
import { HttpHeaders } from '@angular/common/http';

const apiUrl = 'https://grdxgi2qm1.execute-api.us-east-1.amazonaws.com/battleships/';
const apikey = 'FX5Tqd1joL2CC3p1tjCoF7hJCIoRrNDv4m0tqmvo';


@Injectable({
  providedIn: 'root'
})


export class DataGrabberService {

  constructor(route: ActivatedRoute, private http: HttpClient) {}
  getGames(): Observable<gameContent> {
    // One of several ways to set up HTTP request URL parameters
    // without concatenating them manually.
      const httpOptions = {
        headers: new HttpHeaders({
          'x-api-key':  apikey,
        })};

      return this.http.get<gameContent>(apiUrl + 'battleships_game?include=numPlayers,wn,settings,matchID,dateProcessed&take=100', httpOptions);
  }
  getGameDetail(matchId): Observable<gameContent> {
    // One of several ways to set up HTTP request URL parameters
    // without concatenating them manually.
      const httpOptions = {
        headers: new HttpHeaders({
          'x-api-key':  apikey,
        })};

      return this.http.get<gameContent>(apiUrl + 'battleships/'+matchId, httpOptions);
  }
}
