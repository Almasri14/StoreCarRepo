import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '../../store/store.model';
import {CartService} from '../cart.service';
import {ServersService} from '../../servers.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit, OnDestroy {
  @Input() car: Store;
  items: Store[];
  spliced = 0;
  private sub: Subscription;

  constructor( private cartService: CartService , private serversService: ServersService) {
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
    this.sub = this.cartService.cartChanged.subscribe(
      (cars: Store[]) => {
        this.items = cars;
      }
    );
  }
  OnCheck() {
    this.cartService.onCheck = 1;
    this.cartService.addItemsToBuy(this.car);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onSelected() {
    this.cartService.carsSelected.next(this.car);
  }
  OnBuy() {
    this.cartService.buyNow = 1;
    this.cartService.addNowItemsToBuy(this.car);
  }
  OnDeleteAll() {
    if (this.car !== null) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items !== null) {
          if (this.items[i].name === this.car.name) {
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
    }
  }
}
