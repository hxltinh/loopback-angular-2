/*
 * @Container: Auth Container
 */
import { Component }  from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector:"auth",
  template: `
    <div class="container-auth">
      <h4>this is auth path</h4>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export default class AuthContainer {}
