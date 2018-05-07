import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  OnSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const status = form.value.gender;
    let pass: string | Int32Array;
    pass = Md5.hashStr(password);
    console.log(pass);
    console.log(status);
    if (password !== '' && email !== '') {
     this.loginService.signUpUser(email , pass , status);
    }
    if (email !== '' && password === '') {
      alert('Enter password please');
    }
    if (password !== '' && email === '') {
      alert('Enter email please');
    }
    if (password === '' && email === '') {
      alert('Enter email and password please');
    }
  }
}
