import React, { FC } from "react";

import { Button } from "Components/Button";
import { LogoutIcon } from "Components/icons";

import styles from "./UserInformationBlock.module.scss";

interface UserInformationBlockProps {
  avatar?: string;
  onClick: () => void;
}

export const UserInformationBlock: FC<UserInformationBlockProps> = ({ avatar, onClick }) => {
  const avatarIcon = avatar ? (
    <img src={avatar} className={styles.avatar} alt={"avatar"} />
  ) : (
    <div className={styles.avatar} />
  );
  return (
    <div className={styles.userInformation}>
      {avatarIcon}
      <Button type={"button"} variant={"singleIcon"} icon={<LogoutIcon />} onClick={onClick} />
    </div>
  );
};
