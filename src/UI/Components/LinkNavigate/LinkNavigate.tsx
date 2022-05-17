import React, { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "@reach/router";

import styles from "./LinkNavigate.module.scss";

interface LinkNavigateProps {
  text: string;
  route: string;
  routeTitle: string;
  classes?: {
    root: string;
  };
}

export const LinkNavigate: FC<LinkNavigateProps> = ({ text, route, routeTitle, classes }) => {
  const navigate = useNavigate();
  const handleNavigate = (): void => {
    void navigate(route);
  };
  return (
    <div className={classNames(styles.linkWrapper, classes?.root)}>
      <span className={styles.text}>{text}</span>
      <button className={styles.route} type="button" onClick={handleNavigate}>
        {routeTitle}
      </button>
    </div>
  );
};
