import React, { FC } from "react";
import { IconProps } from "Components/icons/types";

export const MessageIcon: FC<IconProps> = ({ fill }) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5907 33.2872C17.6843 33.4206 17.837 33.5 18 33.5C18.163 33.5 18.3157 33.4206 18.4093 33.2872L22.5457 27.3928H30.8571C32.2938 27.3928 33.5 26.2828 33.5 24.8571V6.53571C33.5 5.10996 32.2938 4 30.8571 4H5.14286C3.70619 4 2.5 5.10996 2.5 6.53571V24.8571C2.5 26.2828 3.70621 27.3928 5.14286 27.3928H13.4543L17.5907 33.2872Z"
        stroke={fill}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MessageIcon.defaultProps = {
  fill: "var(--blue)",
};
