import { Switch } from "react-router-dom";
import { useAuth } from "../Providers/Auth";

import { Login } from "../Pages/Login";
import { Register } from "../Components/Register";
import LandingPage from "../Pages/LandingPage";
import NotFound from "../Pages/NotFound";
import PetsPage from "../Pages/PetsPage";
import Route from "./Route";

const Routes = () => {
  const { token } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/services" isPrivate component={() => {}} />
      <Route exact path="/pets" isPrivate component={PetsPage} />
      <Route component={NotFound} isPrivate={!!token} />
    </Switch>
  );
};

export default Routes;
