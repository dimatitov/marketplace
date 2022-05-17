import React, { FC, Fragment } from "react";

import { UserInformationBlock } from "Components/AuthInformation/components/UserInformationBlock/UserInformationBlock";
import { getFullNames } from "utils/getFullNames";

import { AvatarIcon } from "Components/icons";
import { UserAuthBlock } from "Components/AuthInformation/components/UserAuthBlock";
import { IUserInfo } from "Core/User/UserEntity";

interface AuthInformationProps {
  isAuthorized: boolean;
  userInfo?: IUserInfo;
  signUp: () => void;
  signIn: () => void;
  logout: () => void;
}

export const AuthInformation: FC<AuthInformationProps> = ({ userInfo, isAuthorized, logout, signUp, signIn }) => {
  const avatar = userInfo?.avatar ?? "";
  return (
    <Fragment>
      {isAuthorized ? (
        <UserInformationBlock avatar={avatar} onClick={logout} />
      ) : (
        <UserAuthBlock onSignUp={signUp} onSignIn={signIn} />
      )}
    </Fragment>
  );
};
