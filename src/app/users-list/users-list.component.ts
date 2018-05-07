import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {User} from '../login/user.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  selectedUser: User;
  private sub: Subscription;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.sub = this.loginService.usersSelected.subscribe(
      (user: User) => {
        this.selectedUser = user;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
