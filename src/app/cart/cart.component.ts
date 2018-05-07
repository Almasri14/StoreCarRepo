import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Store} from '../store/store.model';
import {Subscription} from 'rxjs/Subscription';
import {ServersService} from '../servers.service';
import {LoginService} from '../login/login.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  appName= this.serversService.getAppName();
  selectedCar: Store = null;
  items: Store[];
  itemsToBuy: Store[];
  spliced = 0;
  moreThanOne = 0;
  first = 0;
  buyAll = 0;
  checkBox = false;
  private subscription: Subscription;
  private sub: Subscription;
  constructor(private cartService: CartService , private serversService: ServersService , private loginService: LoginService) {
    this.itemsToBuy = this.cartService.getItemsToBuy();
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
    this.subscription = this.cartService.carsSelected.subscribe(
      (car: Store) => {
        this.selectedCar = car;
        console.log(car);
      }
    );
    this.sub = this.cartService.cartChanged.subscribe(
      (cars: Store[]) => {
        this.items = cars;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.sub.unsubscribe();
  }
  OnCheckAll() {
    this.cartService.onCheckAll = 1;
      for (let i = 0; i < this.items.length; i++) {
        this.cartService.addItemsToBuy(this.items[i]);
      }
  }
  OnBuyAll() {
    this.cartService.buyAll = 1;
  }
  OnDelete() {
    if (this.selectedCar !== null ) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items !== null) {
          if (this.items[i].name === this.selectedCar.name) {
            if (this.items[i].amount === 1) {
              if (i !== (this.items.length) - 1) {
                for (let j = i; j < this.items.length; j++) {
                  this.items[j] = this.items[j + 1];
                }
              } else {
                this.items[i].amount = 1;
                this.items.splice(i, 1);
                this.spliced = 1;
              }
            } else {
              this.items[i].amount--;
              this.moreThanOne = 1;
            }
            break;
          }
        }
      }
      if (!this.spliced && !this.moreThanOne) {
        this.items.splice((this.items.length) - 1, 1);
        this.moreThanOne = 0;
      }
      if (this.items !== null) {
        this.serversService.storeServers(this.items).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
      }
      this.cartService.cartChanged.next(this.items);
      console.log(this.items);
    }else {
      alert('No item is selected, please select an item'); }
  }
  OnDeleteAll() {
    if (this.selectedCar !== null ) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items !== null) {
          if (this.items[i].name === this.selectedCar.name) {
            if (i !== (this.items.length) - 1) {
              for (let j = i; j < this.items.length; j++) {
                this.items[j] = this.items[j + 1];
              }
            } else {
              this.items[i].amount = 1;
              this.items.splice(i, 1);
              this.spliced = 1;
            }
            break;
          }
        }
      }
      if (!this.spliced) {
        this.items.splice((this.items.length) - 1, 1);
      }
      if (this.items !== null) {
        this.serversService.storeServers(this.items).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
      }
      this.cartService.cartChanged.next(this.items);
      console.log(this.items);
    }else {
        alert('No item is selected, please select an item'); }
  }
  OnDeleteAllItems() {
    if (!this.first) {
      const length = this.items.length;
      this.first = 1;
    }
    let j = 0 ;
    for (let i = 0 ; i < length ;) {
      if (this.loginService.CurrentUser === this.items[i].owner) {
        this.items.splice(this.items.length - 1 , 1);
      }
      if ( j === length) {
      break;
      }
    }
    if (this.items !== null) {
      this.serversService.storeServers(this.items).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
    console.log(this.items);
    this.cartService.cartChanged.next(this.items);
  }
  IsEmpty() {
     if (this.items) {
       let count = 0;
       for (let i = 0 ; i < this.items.length ; i++ ) {
         if (this.items[i].owner === this.loginService.CurrentUser) {
           count++;
         }
       }
       if (count === 0) {
         return true;
       }
       return false;
     }
    return true;
  }
}

