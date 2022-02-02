import { Redirect, Route as AppRoute } from "react-router-dom";
import { useAuth } from "../Providers/Auth/index.tsx";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <AppRoute
      {...rest}
      render={() =>
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/services"} />
        )
      }
    />
  );
};

export default Route;
