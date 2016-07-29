import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import AuthService from "services/auth.service";

import LoginInterface from "interface/login.intf";

@Component({
  selector: "login",
  template: require("./template.tpl")
})
export default class Login {

  constructor(private authServ: AuthService) {}
  login: LoginInterface = {
    username: "",
    password: ""
  };

  onSubmit(loginForm) {
    this.authServ.login();
  }
}
