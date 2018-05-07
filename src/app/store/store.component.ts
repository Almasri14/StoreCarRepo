import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from './store.model';
import {StoreService} from './store.service';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../login/login.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit , OnDestroy {
  selectedCar: Store;
  private sub: Subscription;
  constructor( private storeService: StoreService , private loginService: LoginService) { }

  ngOnInit() {
    this.sub = this.storeService.carsSelected.subscribe(
      (car: Store) => {
        this.selectedCar = car;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
