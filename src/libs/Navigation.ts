import { navigate } from "@reach/router";

export interface INavigation {
  goTo(url: string): void;
  goBack(prevVisitedRoutes?: number): void;
  replace(url: string): void;
}

export const Navigation: INavigation = {
  goTo: navigate,
  goBack: (prevVisitedRoutes = -1) => navigate(prevVisitedRoutes),
  replace: (url) => navigate(url, { replace: true }),
};
