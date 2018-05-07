import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {User} from '../../login/user.model';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-users-store',
  templateUrl: './users-store.component.html',
  styleUrls: ['./users-store.component.css']
})
export class UsersStoreComponent implements OnInit {
  users: User[];
  private subscription: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.users = this.loginService.getUsers();
    this.subscription = this.loginService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }

}
