import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../store.service';
import {NgForm} from '@angular/forms';
import {Store} from '../../store.model';
import {LoginService} from '../../../login/login.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {
  Path: string[] = [];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }
  OnAdd(form: NgForm) {
    const car = form.value.car;
    const price = form.value.price;
    const Description = form.value.Description;
    this.Path.push(form.value.Path);
    this.storeService.addItem(new Store(car, price, Description, this.Path));
    alert('The car has been added');
  }
  Cancel() {
    this.storeService.SetAddNewCar(false);
  }
}
