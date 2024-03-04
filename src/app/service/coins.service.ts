import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import coninsData from './top-ten-data.json';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<any> {
    return of(coninsData.data.coins)
  }
}
