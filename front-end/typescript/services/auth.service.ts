import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export default class AuthService {

  private url = "api/login";

  constructor(private http: Http) {}

  login(auth) {
    let headers = new Headers({
    'Content-Type': 'application/json'});

  return this.http
             .post(this.url, JSON.stringify(auth), {headers: headers})
             
  }
}
