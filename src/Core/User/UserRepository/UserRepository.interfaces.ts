import { IUserInfo } from "Core/User/UserEntity";

export interface IUserRepository {
  login(login: string, password: string): Promise<IUserInfo>;
  registration(accountName: string, email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  forgot(email: string): Promise<{ status: number }>;
}

export interface IUserResponse {
  token: string;
  user: {
    id: number;
    nickName: string;
    email: string;
    profileId: number;
    avatar?: string;
  };
}
