import {Injectable} from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeServerService {
  constructor( private http: Http) {}
  storeUsers( servers: any[]) {
    return this.http.put('https://store-14.firebaseio.com/users.json' , servers);
  }
  storeServers( servers: any[]) {
    return this.http.put('https://store-14.firebaseio.com/home.json', servers);
  }
  getServers() {
    return this.http.get('https://store-14.firebaseio.com/home.json')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  getUsers() {
    return this.http.get('https://store-14.firebaseio.com/users.json')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}
