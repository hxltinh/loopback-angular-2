import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";

import 'rxjs/add/operator/toPromise';

@Injectable()
export default class AuthService {

  private url = "api/login";

  constructor(private http: Http, private router: Router) {}

  login(auth) {
    let headers = new Headers({
    'Content-Type': 'application/json'});

    return this.http
               .post(this.url, JSON.stringify(auth), {headers: headers})
  }

  loginSuccessAction(authInfo) {
    // TODO: store auth infor here
    this.router.navigate(["/"]);
  }
}
