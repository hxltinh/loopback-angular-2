/*
 * @Boot: Boot system
 * handle first load
 * implement scss, js library
 */
import { bootstrap } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { disableDeprecatedForms, provideForms } from "@angular/forms";

import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import "../scss/global.scss";
import MainApp from "./containers/main.app";

import Routes from "./routes";

process.env.NODE_ENV === "production" &&  enableProdMode();

bootstrap(MainApp, [Routes, disableDeprecatedForms(), provideForms()]);
console.log('alo');
// Header Auth Key: Authorization
