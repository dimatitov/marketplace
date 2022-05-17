import React, { FC, ReactNode, ButtonHTMLAttributes, MouseEvent } from "react";
import { noop } from "lodash";
import classNames from "classnames";

import styles from "./Button.module.scss";

export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "singleIcon" | "text";
  isLoading?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  gap?: string;
  classes?: { button?: string; icon?: string };
}

export const Button: FC<ButtonProps> = ({ onClick = noop, children, disabled, variant, type, icon, gap, classes }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onClick(e);
  };
  return (
    <button
      className={classNames(classes?.button, {
        [styles.button]: true,
        [styles.buttonPrimary]: variant === "primary",
        [styles.buttonSecondary]: variant === "secondary",
        [styles.buttonSingleIcon]: variant === "singleIcon",
        [styles.buttonText]: variant === "text",
        [styles.disabled]: disabled,
      })}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      style={{ margin: gap }}
    >
      {icon && <i className={classNames(classes?.icon)}>{icon}</i>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  onClick: noop,
  type: "button",
};
