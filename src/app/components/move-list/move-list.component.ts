import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  isTransfersMade!: boolean;
  lastTransfers!: Array<any>;

  @Input() loggedinUser!: User;
  @Input() contact!: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    if (!this.contact) this.contact = this.contactService.getEmptyContact();
    this.getLastTransfers(this.loggedinUser);
    this.isTransfersMade = this.isMoveMade(this.loggedinUser, this.contact);
  }

  ngOnChanges(): void {
    if (this.contact) {
      this.isTransfersMade = this.isMoveMade(this.loggedinUser, this.contact);
    }
  }

  isMoveMade(user: User, contact: Contact): boolean {
    if (user.moves.length === 0) {
      return true;
    } else {
      return user.moves.every((move) => move.to !== contact.name);
    }
  }

  getLastTransfers(user: User): void {
    this.lastTransfers = [];
    let max = user.moves.length <= 3 ? user.moves.length - 1 : 2;
    for (let i = 0; i <= max; i++) {
      this.lastTransfers.push(user.moves[i]);
    }
  }
}
