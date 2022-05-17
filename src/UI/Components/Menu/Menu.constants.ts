import { ROUTES } from "constants/routes";

export interface MenuItem {
  path: string;
  name: string;
}

export const MENU: Array<MenuItem> = [
  {
    path: ROUTES.HOME_PAGE,
    name: "games",
  },
  {
    path: ROUTES.MARKETPLACE_PAGE,
    name: "marketplace",
  },
  {
    path: ROUTES.GUILD_PAGE,
    name: "guilds",
  },
  {
    path: ROUTES.CURRENT_PROFILE_PAGE,
    name: "profile",
  },
];
