import { Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { useAuth } from "../Providers/Auth";
import Route from "./Route";
import { Login } from "../Pages/Login";

const Routes = () => {
  const { token } = useAuth();

  return (
    <Switch>
      {/* <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={() => {}} />
      <Route exact path="/services" isPrivate component={() => {}} />
      <Route exact path="/pets" isPrivate component={() => {}} />
      <Route component={() => {}} isPrivate={!!token} /> */}
    </Switch>
  );
};

export default Routes;
