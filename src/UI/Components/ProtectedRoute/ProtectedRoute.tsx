import React, { FC, useCallback } from "react";
import { RouteComponentProps, Redirect } from "@reach/router";
import { ROUTES } from "constants/routes";
import { useUpdateTitle } from "App/App.hooks";
import { ILayout } from "App/App";
import { Layout } from "Pages/index";
import { FallbackLayout } from "Components/layouts";

interface ProtectedRouteProps {
  component: FC<RouteComponentProps>;
  title: string;
  layout: FC<Layout> | null;
}

export const ProtectedRoute: FC<ProtectedRouteProps & RouteComponentProps> = ({
  component: Component,
  path,
  title,
  ...rest
}) => {
  useUpdateTitle(title);
  const { layout: layoutProp = null } = rest;
  const Layout = (layoutProp ? layoutProp : FallbackLayout) as FC<ILayout>;

  const isAuthorized = true;
  const renderComponent = useCallback(
    () => (
      <Layout>
        <Component {...rest} />
      </Layout>
    ),
    [Component, rest, path],
  );
  return isAuthorized ? renderComponent() : <Redirect to={ROUTES.SIGN_IN} noThrow={true} />;
};
