import React, { FC } from "react";
import { useLocation, useNavigate } from "@reach/router";
import { MENU, MenuItem } from "Components/Menu/Menu.constants";

import styles from "./Menu.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export const Menu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleMenuItemClick = (menuItem: MenuItem) => {
    void navigate(menuItem.path);
  };

  const checkIfItemIsCurrent = (menuItem: MenuItem): boolean => {
    return menuItem.path === location.pathname;
  };
  return (
    <nav className={styles.menu}>
      {MENU.map((menuItem) => {
        const isCurrentMenuItem = checkIfItemIsCurrent(menuItem);
        return (
          <button
            key={menuItem.path}
            className={classNames({
              [styles.menuItem]: true,
              [styles.currentMenuItem]: isCurrentMenuItem,
            })}
            type="button"
            onClick={() => {
              if (isCurrentMenuItem) return;
              handleMenuItemClick(menuItem);
            }}
          >
            {t(`menu.${menuItem.name}`)}
          </button>
        );
      })}
    </nav>
  );
};
