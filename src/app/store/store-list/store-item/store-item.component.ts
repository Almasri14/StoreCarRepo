import {Component, Input, OnInit} from '@angular/core';
import {Store} from '../../store.model';
import {StoreService} from '../../store.service';
@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() store: Store;
  constructor(private storeService: StoreService) { }
  ngOnInit() {
  }
  onSelected() {
    this.storeService.emitCar(this.store);
  }
}
