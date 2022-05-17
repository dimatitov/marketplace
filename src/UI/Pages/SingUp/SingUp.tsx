import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { useStore } from "Core/store";

import { ROUTES } from "constants/routes";

import { SignUpFormValues } from "Pages/SingUp/SignUp.interfaces";
import { UserAgreements } from "Pages/SingUp/components/UserAgreements/UserAgreements";

import { FormAuthWrapper } from "Components/FormAuthWrapper/FormAuthWrapper";
import { EyeCloseIcon, EyeIcon, SingUpIcon } from "Components/icons";
import { TextField } from "Components/TextField/TextField";
import { Button } from "Components/Button/Button";
import { LinkNavigate } from "Components/LinkNavigate/LinkNavigate";

import styles from "./SingUp.module.scss";

export const SingUp: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isVisiblePassword, setVisiblePassword] = useState<boolean>(false);

  const SignupSchema = yup.object().shape({
    accountName: yup.string().required("Account name is a required field"),
    email: yup.string().email("Incorrect Email").required("Email is a required field"),
    password: yup
      .string()
      .min(6, t("signUp.password.error.greater", { gt: 6, sm: 30 }))
      .matches(/^(?=.*[A-Za-z])[0-9a-zA-Z]{8,}$/, "password must match the following: [A-z][0-9]")
      .required("Password is a required field"),
  });

  const { store, asyncActions } = useStore((store) => ({
    UserEntity: store.UserEntity,
  }));

  const { UserEntity } = store;

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      accountName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(
        asyncActions.User.registration({
          accountName: values.accountName,
          email: values.email,
          password: values.password,
        }),
      );
    },
    validateOnChange: false,
  });

  const isPasswordError = Boolean(formik.errors.password);

  const passwordHint = isPasswordError
    ? formik.errors.password
    : t("signUp.password.error.mustContainNumeric", { count: 8 });
  return (
    <FormAuthWrapper classes={{ padding: styles.paddingWrapper }}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <i className={styles.icon}>
          <SingUpIcon />
        </i>
        <TextField
          type="text"
          name="accountName"
          value={formik.values.accountName}
          onChange={formik.handleChange}
          placeholder={t("signUp.accountName.placeholder")}
          classes={{ root: styles.singUpInput, input: styles.input }}
          isErrorField={!!formik.errors.accountName}
          errorText={formik.errors.accountName}
        />
        <TextField
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder={t("signUp.email.placeholder")}
          classes={{ root: styles.singUpInput, input: styles.input }}
          errorText={formik.errors.email}
          isErrorField={!!formik.errors.email}
        />
        <TextField
          type={isVisiblePassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          isErrorField={isPasswordError}
          onChange={formik.handleChange}
          placeholder={t("signUp.password.placeholder")}
          classes={{ root: styles.lastSingUpInput, input: styles.input, rightIcon: styles.rightIconButton }}
          rightIcon={
            <button type="button" onClick={() => setVisiblePassword(!isVisiblePassword)}>
              {isVisiblePassword ? <EyeIcon /> : <EyeCloseIcon />}
            </button>
          }
        />
        <p
          className={classNames(styles.passwordFieldHint, {
            [styles.passwordFieldHintDefault]: !isPasswordError,
            [styles.passwordFieldHintError]: isPasswordError,
          })}
        >
          {passwordHint}
        </p>
        <Button
          type="submit"
          variant={"primary"}
          classes={{ button: styles.signUpButton }}
          disabled={UserEntity.isLoading}
        >
          <span>{t("signUpText")}</span>
        </Button>
        <LinkNavigate
          text={`${t("alreadyMember")}?`}
          route={ROUTES.SIGN_IN}
          routeTitle={t("signInText")}
          classes={{ root: styles.linkSignIn }}
        />
        <UserAgreements />
      </form>
    </FormAuthWrapper>
  );
};
