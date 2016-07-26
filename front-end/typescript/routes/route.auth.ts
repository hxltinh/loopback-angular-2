import { RouterConfig } from "@angular/router";
import AuthContainer from "../containers/Auth";
import LoginComponent from "../containers/Auth/Login";

const routes: RouterConfig = [
  {
    path: "auth",
    component: AuthContainer,
    children: [
      {
        path:"login",
        component: LoginComponent
      }
    ]
  }
];

export default routes;
