import React, { FC } from "react";

import styles from "./VerifyEmail.module.scss";
import { ForgotWrapper } from "Components/ForgotWrapper";
import { DXLogoIcons, VerifyEmailIcon } from "Components/icons";
import { Button } from "Components/Button";
import { useNavigate } from "@reach/router";
import { ROUTES } from "constants/routes";
import { useStore } from "Core/store";

export const VerifyEmail: FC = () => {
  const navigate = useNavigate();
  const { store } = useStore((store) => ({
    UserEntity: store.UserEntity,
  }));

  const {
    UserEntity: { forgotEmail },
  } = store;
  const handleResendEmail = () => {
    console.log("kek");
  };
  return (
    <ForgotWrapper classes={{ root: styles.wrapper }}>
      <i className={styles.icon}>
        <DXLogoIcons width={"40"} height={"20"} />
      </i>
      <i className={styles.icon}>
        <VerifyEmailIcon />
      </i>
      <div className={styles.text}>
        <p className={styles.linkText}>{`We have sent an email to ${forgotEmail}`}</p>
        <p>
          You need to verify your email to continue If you have not received the varification email, please check your
          “Spam” or “Bulk Email” folder. You can also click the resend button below to have another email sent to you.
        </p>
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          type={"button"}
          variant={"primary"}
          classes={{ button: styles.checkButton }}
          onClick={() => navigate(ROUTES.SIGN_IN)}
        >
          Check again and continue
        </Button>
        <Button type={"button"} variant={"text"} classes={{ button: styles.resendButton }} onClick={handleResendEmail}>
          Resend verification email
        </Button>
      </div>
    </ForgotWrapper>
  );
};
