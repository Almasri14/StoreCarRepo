import {Store} from './store.model';
import {Injectable, OnInit} from '@angular/core';
import {CartService} from '../cart/cart.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {HomeServerService} from '../homeServer.service';

@Injectable()
export class StoreService implements OnInit {
  storeChanged = new Subject<Store[]>();
  carsSelected = new Subject<Store>();
  cars: Store[] = [];
  add = false;
  i = 0;
  exist = 0;
  constructor( private cartService: CartService , private homeServerService: HomeServerService) {
    this.homeServerService.getServers().subscribe(
      (items: any[]) => {
        console.log(items);
        this.cars = items;
        this.storeChanged.next(this.cars.slice());
      },
      (error) => console.log(error)
    );
  }
  ngOnInit() {
  }
  // cars: Store[] = [
  //   new Store('BMW',
  //     300000,
  //     'The best preformance you have ever seen',
  //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
  //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Golf',
  //     40000,
  //     'The best preformance you have ever seen',
  //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
  //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Mari',
  //     80000,
  //     'The best preformance you have ever seen',
  //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
  //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Masri',
  //     80000,
  //     'The best preformance you have ever seen',
  //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
  //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Massari',
  //     80000,
  //     'The best preformance you have ever seen',
  //     ['https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //     '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Nissan',
  //     30000,
  //     'The best preformance you have ever seen',
  //     ['https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //     '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Ferrari',
  //     400000,
  //     'The best preformance you have ever seen',
  //     ['https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dms/DMS/' +
  //     'local/ZA/fleet/fleet-page/luxury-cars-feature.jpg',
  //       'https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //       '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg']
  //   ),
  //   new Store('Lamborghini',
  //     1000000,
  //     'The fastest car ever',
  //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
  //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //     '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
  //   ),
  //   new Store('Lambo',
  //     1000000,
  //     'The fastest car ever',
  //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
  //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
  //   ),
  //   new Store('ghini',
  //     1000000,
  //     'The fastest car ever',
  //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
  //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
  //   ),
  //   new Store('Lamb',
  //     10000,
  //     'The fastest car ever',
  //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
  //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
  //   ),
  //   new Store('GTI',
  //     10000,
  //     'The fastest car ever',
  //     ['https://squadracorse.lamborghini.com/sites/lamborghinisc/files/dam' +
  //     '/__release/Academy%20-%20Winter/Gallery/best-of-WA-Livigno-2016-0317.jpg',
  //       'https://www.nissan-cdn.net/content/dam/Nissan/gb/vehicles/juke/f15/' +
  //       '1_carryover/overview/packshots/packshot_colorpicker_JUKE_QAB_medium.png.ximg.m_12_h.smart.png']
  //   )];

  addItem (item: Store) {
    if (this.cars === null) {
      this.cars = [];
      this.cars.push(item);
      this.homeServerService.storeServers(this.getCars()).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      this.storeChanged.next(this.cars);
    } else {
      for (this.i = 0; this.i < this.cars.length; this.i++) {
        if (this.cars[this.i].name === item.name) {
          this.cars[this.i].amount++;
          this.homeServerService.storeServers(this.getCars()).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
          );
          this.storeChanged.next(this.cars);
          this.exist = 1;
        }
      }
      if (!this.exist) {
        this.cars.push(item);
        this.homeServerService.storeServers(this.getCars()).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
        this.storeChanged.next(this.cars);
      }
    }
    this.exist = 0;
    console.log('Items are: ');
    console.log(this.cars);
  }
  SetAddNewCar( add: boolean) {
   this.add = add;
  }
  emitCar(car: Store) {
        console.log(car);
        this.carsSelected.next(car);
  }
  emitNextCar(car: Store) {
    if (car === null) {
      this.carsSelected.next(car);
    }
    for (let i = 0; i < this.cars.length; i++ ) {
      if (this.cars[i] === car ) {
        console.log(this.cars[i + 1]);
        this.carsSelected.next(this.cars[ i + 1]);
      }
    }
  }
  emitPrevCar(car: Store) {
    if (car === null) {
      this.carsSelected.next(car);
    }
    for (let i = 0; i < this.cars.length; i++ ) {
      if (this.cars[i] === car ) {
        console.log(this.cars[i - 1]);
        this.carsSelected.next(this.cars[ i - 1]);
      }
    }
  }

  getCars() {
    return this.cars.slice();
  }
  addItemsToCartList(item: Store) {
    this.cartService.addItem(item);
  }
}
