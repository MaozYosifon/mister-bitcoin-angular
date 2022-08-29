import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact!: Contact
  @Input() loggedinUser!: User
  amount!: number;
  userSubscriber!: Subscription;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userSubscriber = this.userService.user$.subscribe(
      (user) => (this.loggedinUser = user)
    );
  }

  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }

  onTransferCoins(): void {
    if (this.amount > this.loggedinUser.coins) {
      console.log("you can't do it");
      return
    } else {
      this.userService.addMove(this.contact, this.amount);
    }

    this.router.navigate(['contact/', this.contact._id]);
  }

}
