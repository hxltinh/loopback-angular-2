import { Component } from "@angular/core";

@Component({
 selector: 'my-dashboard',
 template: '<h4>this is my dashboard</h4>',
 precompile: [DashboardComponent]
})
export default class DashboardComponent{};
