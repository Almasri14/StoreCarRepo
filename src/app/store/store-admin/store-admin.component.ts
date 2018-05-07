import { Component, OnInit } from '@angular/core';
import {Store} from '../store.model';
import {LoginService} from '../../login/login.service';
import {StoreService} from '../store.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-store-admin',
  templateUrl: './store-admin.component.html',
  styleUrls: ['./store-admin.component.css']
})
export class StoreAdminComponent implements OnInit {
  cars: Store[];
  query= '';

  private subscription: Subscription;
  constructor(private storeService: StoreService , private loginService: LoginService) { }

  ngOnInit() {
    this.cars = this.storeService.getCars();
    this.subscription = this.storeService.storeChanged.subscribe(
      (cars: Store[]) => {
        this.cars = cars;
      }
    );
  }
  OnAddNewCar() {
    this.storeService.SetAddNewCar(true);
  }
}
