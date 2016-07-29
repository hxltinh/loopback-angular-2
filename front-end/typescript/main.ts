import { bootstrap } from "@angular/platform-browser-dynamic";
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import "../scss/global.scss";
import MainApp from "./containers/main.app";

import Routes from "./routes";

bootstrap(MainApp, [Routes, disableDeprecatedForms(), provideForms()]);

// Header Auth Key: Authorization
