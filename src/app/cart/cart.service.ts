import {Store} from '../store/store.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {ServersService} from '../servers.service';
import {LoginService} from '../login/login.service';

@Injectable()
export class CartService {
  carsSelected = new Subject<Store>();
  cartChanged = new Subject<Store[]>();
  ordersChanged = new Subject<Store[]>();
  private items: Store[] = [];
  private itemsToBuy: Store[] = [];
  public buyNow = 0;
  public buyAll = 0;
  i = 0;
  exist = 0;
  ex = 0;
  checkBoxValue = false;
  public ordersFromDataBase: Store[] = [];
  onCheckAll = 0;
  onCheck = 0;

  constructor(private serverService: ServersService, private loginServer: LoginService) {
    this.serverService.getServers().subscribe(
      (items: any[]) => {
        console.log(items);
        this.items = items;
        if (this.items !== null) {
          this.cartChanged.next(this.items);
        }
      },
      (error) => console.log(error)
    );
    this.items = this.getItems();


    this.serverService.getOrders().subscribe(
      (items: any[]) => {
        console.log(items);
        if (items !== null) {
          this.ordersFromDataBase = items;
        }
        if (this.ordersFromDataBase !== null) {
          this.ordersChanged.next(this.itemsToBuy);
        }
      },
      (error) => console.log(error)
    );
    this.itemsToBuy = this.getItemsToBuy();
  }

  addItem(item: Store) {
    item.owner = this.loginServer.getEmail();
    console.log(item.owner);
    if (this.items === null) {
      this.items = [];
      this.items.push(item);
      this.serverService.storeServers(this.getItems()).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      this.cartChanged.next(this.items);
    } else {
      for (this.i = 0; this.i < this.items.length; this.i++) {
        if (this.items[this.i].name === item.name) {
          console.log(this.items[this.i].owner);
          console.log(item.owner);
          if ( this.items[this.i].owner === item.owner) {
            this.items[this.i].amount++;
            this.serverService.storeServers(this.getItems()).subscribe(
              (response) => console.log(response),
              (error) => console.log(error)
            );
            this.cartChanged.next(this.items);
            this.exist = 1;
            break;
          }
        }
      }
      if (!this.exist) {
        this.items.push(item);
        this.serverService.storeServers(this.getItems()).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
        this.cartChanged.next(this.items);
      }
    }
    this.exist = 0;
    console.log('Items are: ');
    console.log(this.items);
  }

  getItems() {
    if (this.items !== null) {
      return this.items;
    }
  }
  getOrdersFromDataBase() {
    if (this. ordersFromDataBase !== null) {
      return this. ordersFromDataBase;
    }else {
      return [];
    }
  }
  getItemsToBuy() {
    if (this.itemsToBuy !== null) {
      return this.itemsToBuy;
    }else {
      return [];
    }
  }
  initializeItemsToBuy() {
    this.itemsToBuy = [];
  }
  addItemsToBuy(item: Store) {
    console.log(this.itemsToBuy);
    if (this.itemsToBuy === null) {
      this.itemsToBuy = [];
    }
      for (this.i = 0; this.i < this.itemsToBuy.length; this.i++) {
        if (this.itemsToBuy[this.i].name === item.name && this.itemsToBuy[this.i].owner === item.owner) {
          console.log('Exist');
          this.ex = 1;
          this.onCheckAll = 0;
        }
      }
      if (!this.ex) {
        console.log('Dose not Exist');
        this.itemsToBuy.push(item);
        this.checkBoxValue = true;
      }else {
        this.deleteItemsToBuy(item);
    }
    console.log(this.itemsToBuy);
    console.log(this.itemsToBuy.length);
    if (this.itemsToBuy.length === 0) {
      console.log('Empty');
      this.checkBoxValue = false;
      this.onCheck = 0;
    }
    this.ex = 0;
  }
  addNowItemsToBuy(item: Store) {
    if (this.itemsToBuy === null) {
      this.itemsToBuy = [];
    }
    console.log(this.itemsToBuy);
    this.itemsToBuy.push(item);
    console.log(this.itemsToBuy);
  }
  deleteItemsToBuy(car: Store) {
    if (car !== null) {
      for (let i = 0; i < this.itemsToBuy.length; i++) {
        if (this.itemsToBuy[i].name === car.name && this.itemsToBuy[i].owner === car.owner) {
          this.itemsToBuy.splice(i, 1);
          break;
        }
      }
    }
    console.log(this.itemsToBuy);
  }
}
