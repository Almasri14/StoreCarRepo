import {Component, OnInit} from '@angular/core';
import {Store} from '../store.model';
import {StoreService} from '../store.service';
import {LoginService} from '../../login/login.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
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
