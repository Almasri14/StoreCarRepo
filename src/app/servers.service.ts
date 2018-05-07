import {Injectable} from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServersService {
  constructor( private http: Http) {}
  storeServers( servers: any[]) {
    return this.http.put('https://store-14.firebaseio.com/data.json', servers);
  }
  OrderItems( servers: any[]) {
    return this.http.put('https://store-14.firebaseio.com/order.json', servers);
  }
  deleteServers( servers: any) {
    console.log('deleted');
    return this.http.delete('https://store-14.firebaseio.com/data.json');
  }
  getOrders() {
    return this.http.get('https://store-14.firebaseio.com/order.json')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  getServers() {
    return this.http.get('https://store-14.firebaseio.com/data.json')
      .map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }
  getAppName() {
    return this.http.get('https://store-14.firebaseio.com/appName.json')
      .map((response: Response) => {
      return response.json();
    }
      );
  }
}
