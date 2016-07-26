import { bootstrap } from "@angular/platform-browser-dynamic";
import "../scss/global.scss";
import MainApp from "./containers/main.app";

import Routes from "./routes";

bootstrap(MainApp, [ Routes ]);
