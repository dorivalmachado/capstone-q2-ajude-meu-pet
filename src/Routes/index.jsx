import { Switch } from "react-router-dom";
import { useAuth } from "../Providers/Auth";
import Route from "./Route";
import { Login } from "../Pages/Login";
import Landing from "../Pages/Landing";

const Routes = () => {
  const { token } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={() => {}} />
      <Route exact path="/services" isPrivate component={() => {}} />
      <Route exact path="/pets" isPrivate component={() => {}} />
      <Route component={() => {}} isPrivate={!!token} />
    </Switch>
  );
};

export default Routes;
