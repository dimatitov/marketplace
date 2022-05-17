import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import { ROUTES } from "constants/routes";

import { SignIn } from "Pages/Signin";
import { NotFound } from "Pages/NotFound";
import { MainLayout, IMainLayout } from "Components/layouts";
import { HomePage } from "Pages/HomePage";
import { SingUp } from "Pages/SingUp/SingUp";
import { PlugPage } from "Pages/PlugPage";
import { ForgotPassword } from "Pages/ForgotPassword";
import { VerifyEmail } from "Pages/VerifyEmail";
import { OopsPage } from "Pages/OopsPage/OopsPage";
import { ProfilePage } from "Pages/ProfilePage";

export type Layout = IMainLayout;

export interface IPages {
  path: ROUTES;
  component: FC<RouteComponentProps>;
  isProtected: boolean;
  layout: FC<Layout> | null;
  title: string;
  default?: boolean;
}

export const pages: Array<IPages> = [
  {
    path: ROUTES.SIGN_IN,
    component: SignIn,
    isProtected: false,
    layout: MainLayout,
    title: "signIn",
  },
  {
    path: ROUTES.SIGN_UP,
    component: SingUp,
    isProtected: false,
    layout: MainLayout,
    title: "singUp",
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    component: ForgotPassword,
    isProtected: false,
    layout: MainLayout,
    title: "Forgot password",
  },
  {
    path: ROUTES.OOPS_PAGE,
    component: OopsPage,
    isProtected: false,
    layout: MainLayout,
    title: "Verify email",
  },
  {
    path: ROUTES.VERIFY_EMAIL,
    component: VerifyEmail,
    isProtected: false,
    layout: MainLayout,
    title: "Verify email",
  },
  {
    path: ROUTES.HOME_PAGE,
    component: HomePage,
    isProtected: true,
    layout: MainLayout,
    title: "home",
  },
  {
    path: ROUTES.GAMES_PAGE,
    component: PlugPage,
    isProtected: true,
    layout: MainLayout,
    title: "games",
  },
  {
    path: ROUTES.MARKETPLACE_PAGE,
    component: PlugPage,
    isProtected: true,
    layout: MainLayout,
    title: "store",
  },
  {
    path: ROUTES.GUILD_PAGE,
    component: PlugPage,
    isProtected: true,
    layout: MainLayout,
    title: "guild",
  },
  {
    path: ROUTES.PROFILE_PAGE,
    component: ProfilePage,
    isProtected: true,
    layout: MainLayout,
    title: "profile",
  },
  {
    path: ROUTES.CURRENT_PROFILE_PAGE,
    component: ProfilePage,
    isProtected: true,
    layout: MainLayout,
    title: "your profile",
  },
  {
    path: ROUTES.NOT_FOUND,
    component: NotFound,
    isProtected: false,
    default: true,
    layout: MainLayout,
    title: "notFound",
  },
];
