import { Redirect, Route as AppRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const accessToken = "precisa pegar do useAuth";

  return (
    <AppRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/services"} />
        )
      }
    />
  );
};

export default Route;
