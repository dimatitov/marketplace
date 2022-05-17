import React, { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { useStore } from "Core/store";

import { ROUTES } from "constants/routes";

import { SignInFormValues } from "Pages/Signin/SignIn.interfaces";

import { EyeCloseIcon, EyeIcon, SignInIcon } from "Components/icons";
import { Button } from "Components/Button/Button";
import { TextField } from "Components/TextField/TextField";
import { LinkNavigate } from "Components/LinkNavigate/LinkNavigate";
import { FormAuthWrapper } from "Components/FormAuthWrapper/FormAuthWrapper";

import styles from "./Signin.module.scss";

export const SignIn: FC<RouteComponentProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { store, asyncActions } = useStore((store) => ({
    UserEntity: store.UserEntity,
  }));
  const SignInSchema = yup.object().shape({
    login: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(8, t("signUp.password.error.mustContainNumeric", { count: 8 })),
  });

  const { UserEntity } = store;

  const formik = useFormik<SignInFormValues>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      dispatch(
        asyncActions.User.login({
          login: values.login,
          password: values.password,
        }),
      );
    },
    validateOnChange: false,
  });

  const isPasswordError = !!formik.errors.password;
  const isLoginError = !!formik.errors.login;
  const [isVisiblePassword, setVisiblePassword] = useState<boolean>(false);

  return (
    <FormAuthWrapper classes={{ padding: styles.paddingWrapper }}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <i className={styles.icon}>
          <SignInIcon />
        </i>
        <TextField
          type="text"
          name="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          label={t("signIn.login.label")}
          placeholder={t("signIn.login.placeholder")}
          classes={{ root: styles.loginInput, input: styles.input }}
          isErrorField={isLoginError}
          errorText={formik.errors.login}
        />
        <TextField
          type={isVisiblePassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          rightIcon={
            <button type="button" onClick={() => setVisiblePassword(!isVisiblePassword)}>
              {isVisiblePassword ? <EyeIcon /> : <EyeCloseIcon />}
            </button>
          }
          classes={{
            root: styles.passwordInput,
            input: styles.input,
            rightIcon: styles.rightIconButton,
          }}
          label={t("signIn.password.label")}
          placeholder={t("signIn.password.placeholder")}
          isErrorField={isPasswordError}
          errorText={formik.errors.password}
        />
        <Button
          type="submit"
          variant={"primary"}
          classes={{ button: styles.signInButton }}
          disabled={UserEntity.isLoading}
        >
          <span>{t("signInText")}</span>
        </Button>
        <LinkNavigate text={t("forgotYourPass")} route={ROUTES.FORGOT_PASSWORD} routeTitle={"password?"} />
      </form>
    </FormAuthWrapper>
  );
};
