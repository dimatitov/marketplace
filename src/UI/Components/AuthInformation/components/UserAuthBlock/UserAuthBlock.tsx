import React, { FC } from "react";

import { Button } from "Components/Button";
import styles from "./UserAuthBlock.module.scss";

interface UserAuthBlockProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export const UserAuthBlock: FC<UserAuthBlockProps> = ({ onSignIn, onSignUp }) => {
  return (
    <div className={styles.wrapper}>
      <Button type="button" variant={"secondary"} classes={{ button: styles.singUpButton }} onClick={onSignIn}>
        sing in
      </Button>
      <Button type="button" variant={"secondary"} classes={{ button: styles.singUpButton }} onClick={onSignUp}>
        sing up
      </Button>
    </div>
  );
};
