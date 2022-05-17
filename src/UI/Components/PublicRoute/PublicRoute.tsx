import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { useUpdateTitle } from "App/App.hooks";
import { ILayout } from "App/App";
import { Layout } from "Pages/index";
import { FallbackLayout } from "Components/layouts";

interface PublicRouteProps {
  component: FC<RouteComponentProps>;
  title: string;
  layout: FC<Layout> | null;
}

export const PublicRoute: FC<PublicRouteProps & RouteComponentProps> = ({ component: Component, title, ...rest }) => {
  useUpdateTitle(title);
  const { layout: layoutProp = null } = rest;
  const Layout = (layoutProp ? layoutProp : FallbackLayout) as FC<ILayout>;
  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};
