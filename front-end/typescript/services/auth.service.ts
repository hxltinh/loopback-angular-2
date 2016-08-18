import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router } from "@angular/router";
import BaseAjaxRequest from "./base/base.ajax.request";
import { Observable } from "rxjs/Observable";

import LoginInterface from "../interface/login.intf";

import "rxjs/add/operator/toPromise";

@Injectable()
export default class AuthService extends BaseAjaxRequest{

  protected apiUrl = "api/login";

  constructor(private http: Http, private router: Router) {
    super();
  }

  login(auth): Observable<Response> {
    let headers = new Headers({
    "Content-Type": "application/json"});
    return this.http
               .post(this.getUrl(), JSON.stringify(auth), {headers: headers});
  }

  loginSuccessAction(authInfo) {
    // TODO: store auth infor here
    this.router.navigate(["/"]);
  }
}
