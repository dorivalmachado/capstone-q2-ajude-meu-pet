import { ComponentType } from "react";
import { RouteProps } from "react-router";
import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../Providers/Auth";

interface Props extends RouteProps {
  isPrivate?: boolean,
  component: ComponentType,
}

const Route = ({ isPrivate = false, component: Component, ...rest }: Props) => {
  const { token } = useAuth();

  return (
    <ReactRoute
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
