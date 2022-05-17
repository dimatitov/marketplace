import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./FormAuthWrapper.module.scss";

interface FormAuthWrapperProps {
  children: ReactNode;
  classes: {
    padding: string;
  };
}

export const FormAuthWrapper: FC<FormAuthWrapperProps> = ({ children, classes }) => {
  return (
    <div className={styles.formContainer}>
      <div className={classNames(styles.formWrapper, classes.padding)}>{children}</div>
    </div>
  );
};
