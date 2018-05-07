import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../login/user.model';
import {LoginService} from '../../login/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  Cancel() {
    this.loginService.usersSelected.next(null);
  }
  OnEdit(form: NgForm) {
    const email = form.value.email;
    const status = form.value.status;
    this.loginService.editUser(this.user.email , email , status);
    this.Cancel();
  }
}
