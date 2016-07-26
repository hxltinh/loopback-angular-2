import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: "my-app",
  template: `
    <h3>this is the start of angular 2</h3>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export default class MainApp{}
