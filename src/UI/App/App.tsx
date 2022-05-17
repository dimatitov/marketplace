import React, { FC, ReactNode } from "react";
import { Router } from "@reach/router";

import { ProtectedRoute } from "Components/ProtectedRoute/ProtectedRoute";
import { PublicRoute } from "Components/PublicRoute/PublicRoute";

import { pages } from "Pages/index";

export interface ILayout {
  children: ReactNode;
}

console.log("process.env.REACT_APP_API_HOST", process.env.REACT_APP_API_HOST);

export const App: FC = () => {
  return (
    <Router>
      {pages.map((page) => {
        return page.isProtected ? (
          <ProtectedRoute key={page.path} {...page} />
        ) : (
          <PublicRoute key={page.path} {...page} />
        );
      })}
    </Router>
  );
};
