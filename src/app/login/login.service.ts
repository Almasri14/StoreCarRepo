import { Injectable} from '@angular/core';
import {User} from './user.model';
import {Router} from '@angular/router';
import {HomeServerService} from '../homeServer.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class LoginService {
  i = 0;
  signedIn = false;
  Admin = false;
  user: User[] = [];
  usersChanged = new Subject<User[]>();
  usersSelected = new Subject<User>();
  CurrentUser: string;
  constructor (private router: Router , private homeServer: HomeServerService) {
    this.homeServer.getUsers().subscribe(
      (users: any[]) => {
        console.log(users);
        this.user = users;
        if (this.user !== null) {
          this.usersChanged.next(this.user);
        }
      },
      (error) => console.log(error)
    );
    this.user = this.getUsers();
  }
  editUser(currentEmail: string, newEmail: string, status: string) {
    this.user = this.getUsers();
    for (this.i = 0; this.i < this.user.length; this.i++ ) {
      if (this.user[this.i].email === currentEmail) {
        this.user[this.i].email = newEmail;
        this.user[this.i].status = status;
      }
      }
    this.homeServer.storeUsers(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.usersChanged.next(this.user);
  }
  signUpUser(email: string, password:  string | Int32Array , status: string) {
    if (this.user === null) {
      this.user = [];
    }
    this.user.push( new User(email , password , status));
    this.homeServer.storeUsers(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.usersChanged.next(this.user);
    this.router.navigate(['/login']);
  }
  signInUser(email: string, password: string | Int32Array) {
    this.user = this.getUsers();
    for (this.i = 0; this.i < this.user.length; this.i++ ) {
      if (this.user[this.i].email === email && this.user[this.i].password === password) {
        this.signedIn = true;
        this.CurrentUser = email;
        this.router.navigate(['/store']);
        if (this.user[this.i].status === 'Admin' ) {
          this.Admin = true;
          console.log('Welcome Admin Osama');
        }
      }
    }
    if (email !== '' && password !== '' && this.signedIn === false) {
      alert('Wrong email or password');
    }
    if (email !== '' && password === '' && this.signedIn === false) {
      alert('Enter password please');
    }
    if (password !== '' && email === '' && this.signedIn === false) {
      alert('Enter email please');
    }
    if (password === '' && email === '' && this.signedIn === false) {
      alert('Enter email and password please');
    }
  }
  IsSignedIn() {
    return this.signedIn;
  }
  IsAdmin() {
    return this.Admin;
  }
  logOut() {
    this.Admin = false;
    this.signedIn = false;
    this.CurrentUser = '';
    // this.router.navigate(['/store']);
  }
  getUsers () {
    if (this.user !== null) {
      return this.user; }
  }
  getEmail() {
    return this.CurrentUser;
  }
}
