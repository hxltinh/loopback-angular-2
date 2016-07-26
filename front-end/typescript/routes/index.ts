import { provideRouter, RouterConfig } from "@angular/router";
import DashboardComponent from "../containers/DashBoard";

import AppRoutes from "./route.app";
import AuthRoutes from "./route.auth";

const routes: RouterConfig = [
  ...AppRoutes,
  ...AuthRoutes
];

export default [ provideRouter(routes) ];
