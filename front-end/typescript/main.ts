import { bootstrap } from "@angular/platform-browser-dynamic";
import "../scss/global.scss";
import MainApp from "./containers/main.app";

import AppRoute from "./routes/route.app";

bootstrap(MainApp, [ AppRoute ]);
