import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { TiassComponent } from "./pages/tiass/tiass.component";

export const routes = [ 
   
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "tiass", component: TiassComponent },
];

export const navigatableComponents = [
  LoginComponent,
  SignupComponent,
  TiassComponent
];
 