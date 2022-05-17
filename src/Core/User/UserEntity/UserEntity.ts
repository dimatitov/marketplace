import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { withNetworkState, withNetworkReducers, IWithNetworkState } from "Core/utils/network";
import { DEFAULT_FORGOT_EMAIL, DEFAULT_USER_INFO, IUserEntityState, IUserInfo } from "Core/User/UserEntity";

const initialState: IUserEntityState & IWithNetworkState = {
  ...withNetworkState,
  userInfo: {} as IUserInfo,
  forgotEmail: "",
};

export const UserEntity = createSlice({
  name: "UserEntity",
  initialState,
  reducers: {
    ...withNetworkReducers,
    saveUser(state, action: PayloadAction<IUserInfo>) {
      state.userInfo = {
        ...action.payload,
      };
    },
    resetUser(state) {
      state.userInfo = DEFAULT_USER_INFO;
    },
    saveForgotEmail(state, action: PayloadAction<string>) {
      state.forgotEmail = action.payload;
    },
    resetForgotEmail(state) {
      state.forgotEmail = DEFAULT_FORGOT_EMAIL;
    },
  },
});
