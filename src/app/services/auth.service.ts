import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public userService: UserService, private router: Router) { }

    checkLoggedIn(): Observable<boolean> {
        if (!this.userService.isAuthenticated()) {
            this.router.navigate(['signup']);
            return of(false);
        }
        return of(true);
    }
}
