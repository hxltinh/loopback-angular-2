import { Component }  from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  template: `
    <h4>this is auth path</h4>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export default class AuthContainer {}
