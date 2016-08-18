/*
 * @Container: main container
 */
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { HTTP_PROVIDERS } from "@angular/http";

import AuthService from "../services/auth.service";

@Component({
  selector: "my-app",
  template: `
    <div class="container">
      <div class="row">
        <h3>this is the start of angular 2</h3>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, AuthService]
})
export default class MainApp{}
