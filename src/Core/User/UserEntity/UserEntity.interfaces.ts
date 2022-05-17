export interface IUserProfileInfo {
  accountName: string;
  avatar?: string;
}
export interface IUserInfo extends IUserProfileInfo {
  token: string;
}

export interface IUserEntityState {
  userInfo: IUserInfo;
  forgotEmail?: string;
}
