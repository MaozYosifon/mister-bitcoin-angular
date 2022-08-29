import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id']
    return this.contactService.getContactById(id)
  }

}
