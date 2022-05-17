import { default as axiosLib } from "axios";
import { navigate } from "@reach/router";
import { ROUTES } from "constants/routes";

export const axios = axiosLib.create({
  baseURL: process.env.REACT_APP_API_HOST || "",
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => response,
  (reject) => {
    if (!reject.response) {
      return Promise.reject(reject);
    }
    const isSignInPage = window.location.pathname.includes("sign-in");
    const isUnAuthorized = reject.response.status === 401;
    if (!isSignInPage && isUnAuthorized) {
      void navigate(ROUTES.SIGN_IN);
      return;
    }
    return Promise.reject(reject.response);
  },
);
