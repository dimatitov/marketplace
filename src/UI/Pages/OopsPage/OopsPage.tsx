import React, { FC } from "react";
import { useNavigate } from "@reach/router";

import { ROUTES } from "constants/routes";

import { ForgotWrapper } from "Components/ForgotWrapper";
import { OopsIcon } from "Components/icons";
import { Button } from "Components/Button";

import styles from "./OopsPage.module.scss";

export const OopsPage: FC = () => {
  const navigate = useNavigate();
  return (
    <ForgotWrapper classes={{ root: styles.root }}>
      <i className={styles.icon}>
        <OopsIcon />
      </i>
      <div className={styles.text}>
        <p className={styles.title}>Oh no! Something has gone wrong</p>
        <p>A problem has accured and the system can’t recover. Please log out and try again.</p>
      </div>
      <Button
        variant={"primary"}
        type={"button"}
        classes={{ button: styles.button }}
        onClick={() => navigate(ROUTES.SIGN_IN)}
      >
        retry
      </Button>
    </ForgotWrapper>
  );
};
