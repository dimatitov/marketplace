import React, { FC } from "react";
import { ProfilePageProps } from "Pages/ProfilePage/ProfilePage.interfaces";

export const ProfilePage: FC<ProfilePageProps> = ({ userId }) => {
  return (
    <>
      <div>Profile</div>
      <div>Page:{userId}</div>
    </>
  );
};
