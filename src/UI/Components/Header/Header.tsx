import React, { FC } from "react";
import { useNavigate } from "@reach/router";
import { useDispatch } from "react-redux";

import { useStore } from "Core/store";

import { ROUTES } from "constants/routes";

import { Menu } from "Components/Menu/Menu";
import { Button } from "Components/Button";
import { AuthInformation } from "Components/AuthInformation/AuthInformation";
import { DXLogoIcons, LanguageIcon, MessageIcon, SearchIcon } from "Components/icons";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { store, asyncActions } = useStore((store) => ({
    UserEntity: store.UserEntity,
  }));
  const { UserEntity } = store;
  // mocka
  const name: string = UserEntity.userInfo.accountName;
  const isAuthorized = Boolean(name);

  const singUpNavigate = (): void => {
    void navigate(ROUTES.SIGN_UP);
  };

  const singInNavigate = (): void => {
    void navigate(ROUTES.SIGN_IN);
  };

  const logout = (): void => {
    dispatch(asyncActions.User.logout());
  };

  return (
    <div className={styles.header}>
      <i className={styles.logo}>
        <DXLogoIcons />
      </i>

      <Menu />

      <div className={styles.rightHeaderContent}>
        <div className={styles.singleIconWrapper}>
          <Button variant={"singleIcon"} icon={<SearchIcon />} classes={{ button: styles.button }} />
          <Button variant={"singleIcon"} icon={<LanguageIcon />} classes={{ button: styles.button }} />
          {isAuthorized && <Button type={"button"} variant={"singleIcon"} icon={<MessageIcon />} />}
        </div>
        <AuthInformation
          isAuthorized={isAuthorized}
          userInfo={UserEntity.userInfo}
          signUp={singUpNavigate}
          signIn={singInNavigate}
          logout={logout}
        />
      </div>
    </div>
  );
};
