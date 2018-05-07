import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../../store.service';
import {Store} from '../../store.model';
import {CartService} from '../../../cart/cart.service';

@Component({
  selector: 'app-store-admin-item',
  templateUrl: './store-admin-item.component.html',
  styleUrls: ['./store-admin-item.component.css']
})
export class StoreAdminItemComponent implements OnInit {

  @Input() store: Store;
  constructor(private storeService: StoreService , private cartService: CartService) { }
  ngOnInit() {
  }
  onSelected() {
    this.storeService.emitCar(this.store);
  }
}
