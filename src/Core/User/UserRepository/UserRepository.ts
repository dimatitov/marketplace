import { IUserRepository, IUserResponse } from "Core/User/UserRepository";
import { HttpClient } from "../../../libs/HttpClient";
import { userInfoAdapter } from "Core/User/UserRepository/UserRepository.adapters";

export const UserRepository: IUserRepository = {
  login: async (login, password) => {
    try {
      const userResponse = await HttpClient.post<IUserResponse>("/auth/sign-in", {
        login,
        password,
      });
      return userInfoAdapter(userResponse.data);
    } catch (err: any) {
      if ([401, 403].includes(err?.status)) {
        throw new Error("Неправильный логин или пароль");
      }
      throw new Error("Что-то пошло не так, попробуйте позже");
    }
  },
  registration: async (accountName: string, email: string, password: string) => {
    try {
      const userResponse = await HttpClient.post("auth/sign-up", {
        nickName: accountName,
        email,
        password,
        // пока флаги захардкожены
        ppAccept: true,
        termOfUse: true,
      });
      console.log("userResponse", userResponse);
    } catch (err: any) {
      throw new Error("Что-то пошло не так, попробуйте позже");
    }
  },
  logout: async () => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    } catch (err) {
      throw new Error("Не получилось, так произошло");
    }
  },
  forgot: async () => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 201 });
        }, 2000);
      });
    } catch (err) {
      throw new Error("Неверный Апи");
    }
  },
};
