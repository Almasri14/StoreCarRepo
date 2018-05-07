import {Component, Input, OnInit} from '@angular/core';
import {Store} from '../../store/store.model';
import {NgForm} from '@angular/forms';
import {CartService} from '../cart.service';
import {ServersService} from '../../servers.service';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.css']
})
export class BuyComponentComponent implements OnInit {
  @Input() car: Store[];
  constructor(private cartService: CartService, private serverService: ServersService , private loginServer: LoginService) { }

  ngOnInit() {
  }
  OnBuy(form: NgForm) {
    if (this.cartService.getItemsToBuy() !== null ) {
      for (let i = 0; i < this.cartService.getItemsToBuy().length; i++) {
        if (this.cartService.getItemsToBuy()[i].owner === this.loginServer.CurrentUser) {
          console.log('You bought the car');
          this.cartService.ordersFromDataBase.push(this.cartService.getItemsToBuy()[i]);
          this.serverService.OrderItems(this.cartService. getOrdersFromDataBase()).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
          );
          console.log(this.cartService. getOrdersFromDataBase());
        }
      }
      this.Cancel();
    }
  }
  Cancel() {
    if (this.cartService.buyNow = 1) {
      this.cartService.initializeItemsToBuy();
    }
    this.cartService.buyAll = 0;
    this.cartService.buyNow = 0;
  }
}
