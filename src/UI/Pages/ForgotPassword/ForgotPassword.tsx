import React, { FC } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { useStore } from "Core/store";

import { ROUTES } from "constants/routes";

import { ForgotWrapper } from "Components/ForgotWrapper";
import { ForgotPasswordIcon, SuccessIcon, WarningIcon } from "Components/icons";
import { TextField } from "Components/TextField/TextField";
import { Button } from "Components/Button/Button";
import { LinkNavigate } from "Components/LinkNavigate/LinkNavigate";

import styles from "./ForgotPassword.module.scss";

const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().required().email("Incorrect type of email"),
});

interface ForgotPasswordValues {
  email: string;
}

export const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const { store, asyncActions } = useStore((store) => ({
    UserEntity: store.UserEntity,
  }));

  const { UserEntity } = store;

  const formik = useFormik<ForgotPasswordValues>({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      dispatch(asyncActions.User.forgotPassword(values));
    },
    validateOnChange: true,
  });

  const isEmailError = !!formik.errors.email;
  const successEmail = formik.values.email ? <SuccessIcon /> : null;

  return (
    <ForgotWrapper classes={{ root: styles.paddingWrapper }}>
      <i className={styles.icon}>
        <ForgotPasswordIcon />
      </i>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          label={"Email"}
          placeholder={"Please, enter your email address"}
          classes={{
            input: styles.input,
            root: styles.root,
            rightIcon: styles.inputIcon,
          }}
          rightIcon={isEmailError ? <WarningIcon /> : successEmail}
          errorText={formik.errors.email}
          isErrorField={isEmailError}
        />
        <Button type={"submit"} variant={"primary"} classes={{ button: styles.submit }} disabled={UserEntity.isLoading}>
          continue
        </Button>
        <LinkNavigate text={"Go back to the"} route={ROUTES.SIGN_IN} routeTitle={"sign in page?"} />
      </form>
    </ForgotWrapper>
  );
};
