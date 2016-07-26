import { provideRouter, RouterConfig } from "@angular/router";
import DashboardComponent from "../containers/DashBoard";

const routes: RouterConfig = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch:"full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

export default [ provideRouter(routes) ];
