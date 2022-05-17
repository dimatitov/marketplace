import React, { FC } from "react";
import { IconProps } from "Components/icons/types";

export const LogoutIcon: FC<IconProps> = ({ fill }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.69359 17.01L2.3267 12.4985L6.69465 7.98811"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2.32617 12.4993H15.8595" stroke="#1AC0EF" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M7.58838 1.97461L18.8677 1.97794C20.5283 1.97932 21.8742 3.32564 21.8751 4.98624V20.0148C21.8751 21.6758 20.5287 23.0222 18.8677 23.0222H7.58838"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

LogoutIcon.defaultProps = {
  fill: "var(--blue)",
};
