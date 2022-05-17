import React, { FC, ReactNode } from "react";

import styles from "./ForgotPasseord.module.scss";
import classNames from "classnames";

interface ForgotWrapperProps {
  children: ReactNode;
  classes: {
    root: string;
  };
}

export const ForgotWrapper: FC<ForgotWrapperProps> = ({ children, classes }) => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.wrapper, classes.root)}>{children}</div>
    </div>
  );
};
