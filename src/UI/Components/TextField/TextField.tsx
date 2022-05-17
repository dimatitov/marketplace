import React, { forwardRef, ReactNode } from "react";
import classNames from "classnames";
import styles from "./TextField.module.scss";

export interface TextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  type?: "text" | "password" | "number";
  placeholder?: string;
  label?: string;
  errorText?: string;
  isErrorField?: boolean;
  errorEntity?: boolean;
  required?: boolean;
  classes?: {
    input?: string;
    label?: string;
    rightIcon?: string;
    root?: string;
  };
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      onChange,
      disabled,
      type,
      placeholder,
      name,
      label,
      errorText,
      isErrorField,
      required,
      classes,
      maxLength,
      min,
      max,
      errorEntity,
      rightIcon,
    },
    ref,
  ) => {
    return (
      <div className={classNames(styles.textFieldWrapper, classes?.root)}>
        {label && (
          <label className={classNames(styles.label, classes?.label)} htmlFor={label}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={label}
          maxLength={maxLength}
          className={classNames(
            {
              [styles.textField]: true,
              [styles.textFieldWithRightIcon]: !!rightIcon,
              [styles.textFieldError]: isErrorField,
              [styles.textFieldErrorEntity]: errorEntity,
            },
            classes?.input,
          )}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          autoComplete={"on"}
        />

        {isErrorField && <p className={styles.error}>{errorText}</p>}

        {rightIcon && <div className={classNames(styles.rightIcon, classes?.rightIcon)}>{rightIcon}</div>}
      </div>
    );
  },
);
