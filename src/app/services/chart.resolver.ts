import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BitcoinService } from './bitcoin.service';

@Injectable({
  providedIn: 'root'
})
export class ChartResolver {
  constructor(private bitcoinService: BitcoinService) {

  }
  resolve(route: ActivatedRouteSnapshot) {
    const res = this.bitcoinService.getMarketPrice()
  }
}
