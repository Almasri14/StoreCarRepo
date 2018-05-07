import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../login/user.model';
import {LoginService} from '../../../login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  constructor(private loginService: LoginService) { }
  ngOnInit() {
  }
  onSelected() {
    console.log(this.user);
    this.loginService.usersSelected.next(this.user);
  }
}
