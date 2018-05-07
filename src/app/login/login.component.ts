import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  OnSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const pass = Md5.hashStr(password);
    this.loginService.signInUser(email , pass);
  }
}
