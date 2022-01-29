import { Switch } from "react-router-dom";
import { useAuth } from "../Providers/Auth";

import { Login } from "../Pages/Login";
import {Register} from "../Pages/Register"
import LandingPage from "../Pages/LandingPage";
import NotFound from "../Pages/NotFound";
import PetsPage from "../Pages/PetsPage";
import Route from "./Route";
import { ServicesPage } from "../Pages/ServicesPage";

const Routes = () => {
  const { token } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/services" isPrivate component={ServicesPage} />
      <Route exact path="/pets" isPrivate component={PetsPage} />
      <Route component={NotFound} isPrivate={!!token} />
    </Switch>
  );
};

export default Routes;
