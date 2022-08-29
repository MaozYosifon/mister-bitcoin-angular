import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  selectedContactId!: string

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }


}
