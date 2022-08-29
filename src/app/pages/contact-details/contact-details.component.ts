import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contactId!: string
  @Output() back = new EventEmitter()
  contact!: Contact
  ans!: string
  subscription!: Subscription
  userSubscriber!: Subscription;
  user!: User

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    this.userSubscriber = this.userService.user$.subscribe(
      (user) => (this.user = user)
    );

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
