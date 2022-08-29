import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { MoveModel } from '../models/move';
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private KEY: string = 'loggedinUser'
  private _user$ = new BehaviorSubject<User>(this.utilsService.load(this.KEY) || null)
  public user$ = this._user$.asObservable()

  constructor(private utilsService: UtilsService) { }

  public getUser() {
    return this.utilsService.load(this.KEY)
  }

  public signup(name: string): void {
    let user = this.utilsService.load(this.KEY)
    if (!user) {
      user = {
        name,
        coins: 100,
        moves: []
      }
      this.utilsService.store(this.KEY, user)
    }
    this._user$.next(user)
  }

  public isAuthenticated(): boolean {
    const user = this._user$.value
    // return (user) ? true : false
    return !!user;
  }

  public logoutUser() {
    localStorage.removeItem(this.KEY)
  }

  public addMove(contact: Contact, amount: number): void {
    if (!amount) return;
    let newMove = new MoveModel();
    newMove.toId = this.utilsService.setId();
    newMove.to = contact.name;
    newMove.at = Date.now();
    newMove.amount = amount;
    const editedUser = { ...this._user$.value };
    editedUser.coins -= amount;
    editedUser.moves.unshift(newMove);
    this.utilsService.store(this.KEY, editedUser);
    this._user$.next(editedUser);
  }
}