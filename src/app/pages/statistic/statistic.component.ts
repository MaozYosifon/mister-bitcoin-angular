import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  newMarketData!: Array<Array<string>>
  marketTableTitle!: string
  newTransactionsData!: Array<string[]>
  transactionsTableTitle!: string

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinService.getMarketPrice()
      .subscribe(result => this.filterMarketData(result));
    this.bitcoinService.getConfirmedTransactions()
      .subscribe(result => this.filterTransactionsData(result));
  }

  filterMarketData(result: any): void {
    this.newMarketData = this._filterData(result);
    this.marketTableTitle = result.name + ' - ' + result.description;
  }

  filterTransactionsData(result: { name: string; description: string; }): void {
    this.newTransactionsData = this._filterData(result);
    this.transactionsTableTitle = result.name + ' - ' + result.description;
  }

  _filterData(result: any) {
    type MyDateFormatOptions = Pick<Intl.DateTimeFormatOptions, 'year' | 'month' | 'day'>
    return result.values.map((value: { x: number; y: string; }) => {
      const options: MyDateFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
      let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
      let bitCoinRate = value.y as string;
      return [date, bitCoinRate];
    })
  }

}
