import { IUserResponse } from "Core/User/UserRepository/UserRepository.interfaces";
import { IUserInfo } from "Core/User/UserEntity";

export const userInfoAdapter = (userResponse: IUserResponse): IUserInfo => {
  return {
    accountName: userResponse.user.nickName,
    token: userResponse.token,
    avatar: userResponse.user.avatar ?? "",
  };
};
