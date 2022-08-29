import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getBitCoinRate(coins: number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .pipe(map(res => res))
  }

  getMarketPrice() {
    return this.http.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
      .pipe(map(res => res))

  }

  getConfirmedTransactions() {
    return this.http.get<any>(`https://api.blockchain.info/charts/n-transactions?timespan=2months&format=json&cors=true`);
  }
}
