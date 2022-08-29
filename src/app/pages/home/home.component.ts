import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user!: User;
  userSubscription!: Subscription;

  BTC$!: Observable<Object> | Promise<number>;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(
      (user) => (this.user = user)
    );

    this.BTC$ = this.bitcoinService.getBitCoinRate(this.user.coins);
  }

  logout(): void {
    this.userService.logoutUser();
    this.router.navigate(['/signup']);
  }

}
