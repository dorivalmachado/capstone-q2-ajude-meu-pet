import { Switch } from "react-router-dom";
import { useAuth } from "../Providers/Auth/index.tsx";

import { Login } from "../Pages/Login/index.tsx";
import { ServicesPage } from "../Pages/ServicesPage";
import RegisterPage from "../Pages/RegisterPage";
import LandingPage from "../Pages/LandingPage";
import NotFound from "../Pages/NotFound";
import PetsPage from "../Pages/PetsPage";
import ProfilePage from "../Pages/ProfilePage";
import Route from "./Route";
import { TeamPage } from "../Pages/TeamPage";

const Routes = () => {
  const { token } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/services" isPrivate component={ServicesPage} />
      <Route exact path="/pets" isPrivate component={PetsPage} />
      <Route exact path="/profile" isPrivate component={ProfilePage} />
      <Route component={NotFound} isPrivate={!!token} />
      <Route exact path="/team" component={TeamPage} />
    </Switch>
  );
};

export default Routes;
