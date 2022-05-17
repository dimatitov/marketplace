import { createAsyncThunk } from "@reduxjs/toolkit";

import { Thunk } from "Core/types/interactor";
import { UserEntity } from "Core/User/UserEntity";
import { INavigation, Navigation } from "libs/Navigation";
import { ROUTES } from "constants/routes";
import { IUserRepository, UserRepository } from "Core/User/UserRepository";
import { Cookie, ICookie } from "libs/Cookie";

export interface IUserInteractor {
  login: Thunk<{ login: string; password: string }>;
  registration: Thunk<{ accountName: string; email: string; password: string }>;
  logout: Thunk<undefined>;
  forgotPassword: Thunk<{ email: string }>;
}

export const createUserInteractor = (
  Repository: IUserRepository,
  Entity: typeof UserEntity,
  Navigation: INavigation,
  Cookie: ICookie,
): IUserInteractor => ({
  login: createAsyncThunk("UserInteractor/login", async ({ login, password }, { dispatch }) => {
    try {
      dispatch(Entity.actions.setLoading(true));
      const userLoginResponse = await Repository.login(login, password);
      dispatch(Entity.actions.saveUser(userLoginResponse));
      Navigation.replace(ROUTES.HOME_PAGE);
    } catch (err: any) {
      dispatch(Entity.actions.setError(err.message));
    } finally {
      dispatch(Entity.actions.setLoading(false));
    }
  }),
  registration: createAsyncThunk(
    "UserInteractor/registration",
    async ({ accountName, email, password }, { dispatch }) => {
      try {
        dispatch(Entity.actions.setLoading(true));
        await Repository.registration(accountName, email, password);
        Navigation.replace(ROUTES.SIGN_IN);
      } catch (err: any) {
        console.error(err);
        dispatch(Entity.actions.setError(err.message));
      } finally {
        dispatch(Entity.actions.setLoading(false));
      }
    },
  ),
  logout: createAsyncThunk("UserInteractor/logout", async (_, { dispatch }) => {
    try {
      dispatch(Entity.actions.setLoading(true));
      await Repository.logout();
      dispatch(Entity.actions.resetUser());
      Navigation.goTo(ROUTES.SIGN_IN);
    } catch (err: any) {
      console.error(err);
      dispatch(Entity.actions.setError(err.message));
    } finally {
      dispatch(Entity.actions.setLoading(false));
    }
  }),
  forgotPassword: createAsyncThunk("", async ({ email }, { dispatch }) => {
    try {
      // const isVerityPage = window.location.pathname.includes(
      //   ROUTES.VERIFY_EMAIL,
      // );
      dispatch(Entity.actions.setLoading(true));
      const forgotResponse = await Repository.forgot(email);

      if (forgotResponse.status === 200) {
        dispatch(Entity.actions.saveForgotEmail(email));
        Navigation.goTo(ROUTES.VERIFY_EMAIL);
      } else {
        Navigation.replace(ROUTES.OOPS_PAGE);
        dispatch(Entity.actions.resetForgotEmail());
      }
    } catch (err: any) {
      console.error(err);
      dispatch(Entity.actions.setError(err.message));
    } finally {
      dispatch(Entity.actions.setLoading(false));
    }
  }),
});

export const UserInteractor = createUserInteractor(UserRepository, UserEntity, Navigation, Cookie);
