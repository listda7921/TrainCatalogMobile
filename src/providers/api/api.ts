import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getPhotos() {
    return this.http.get('https://sheltered-oasis-26932.herokuapp.com/db').map(res => res.json());
  }

  sendPhoto(base64String) {
    var res;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let params = JSON.stringify({ base64String: base64String });
    //let url = "https://node-listda.c9users.io/api/Upload";
    let url = "https://sheltered-oasis-26932.herokuapp.com/api/Upload";
    console.log('api sending photo');
    return this.http.post(url, params, options).map(res => res.json());

  }
}
