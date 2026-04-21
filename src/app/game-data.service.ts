import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import {
  AbilitiesJson,
  AbilityData,
  ItemsJson,
  ShipData,
  ShipsJson,
  WeaponData,
} from './models/game-data.models';

@Injectable({ providedIn: 'root' })
export class GameDataService {
  private ships$: Observable<ShipData[]>;
  private items$: Observable<ItemsJson>;
  private abilities$: Observable<AbilitiesJson>;

  constructor(private http: HttpClient) {
    this.ships$ = this.http.get<ShipsJson>('/assets/game-data/ships.json').pipe(
      map((r) => r.ships),
      catchError(() => of([])),
      shareReplay(1),
    );

    this.items$ = this.http.get<ItemsJson>('/assets/game-data/items.json').pipe(
      catchError(() =>
        of({ weapons: [], hulls: [], sails: [], repairs: [], woods: [] }),
      ),
      shareReplay(1),
    );

    this.abilities$ = this.http
      .get<AbilitiesJson>('/assets/game-data/abilities.json')
      .pipe(
        catchError(() => of({})),
        shareReplay(1),
      );
  }

  getShips(): Observable<ShipData[]> {
    return this.ships$;
  }

  getShipByKey(key: string): Observable<ShipData | undefined> {
    return this.ships$.pipe(map((ships) => ships.find((s) => s.key === key)));
  }

  getShipBySlug(slug: string): Observable<ShipData | undefined> {
    return this.ships$.pipe(
      map((ships) =>
        ships.find(
          (s) =>
            s.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '') === slug.toLowerCase() ||
            s.icon === slug.toLowerCase(),
        ),
      ),
    );
  }

  getItems(): Observable<ItemsJson> {
    return this.items$;
  }

  getWeapons(): Observable<WeaponData[]> {
    return this.items$.pipe(map((i) => i.weapons));
  }

  getWeaponsByType(type: string): Observable<WeaponData[]> {
    return this.items$.pipe(
      map((i) => i.weapons.filter((w) => w.type === type)),
    );
  }

  getAbilities(): Observable<AbilitiesJson> {
    return this.abilities$;
  }

  getAbility(key: string): Observable<AbilityData | undefined> {
    return this.abilities$.pipe(map((abs) => abs[key]));
  }

  getAllGameData(): Observable<{
    ships: ShipData[];
    items: ItemsJson;
    abilities: AbilitiesJson;
  }> {
    return forkJoin({
      ships: this.ships$,
      items: this.items$,
      abilities: this.abilities$,
    });
  }
}
