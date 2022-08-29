import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  first!: string
  user!: User
  ngOnInit(): void {
  }

  onSignup(form: NgForm): void {
    this.userService.signup(form.value.first)
    this.router.navigateByUrl('/')
  }

}
