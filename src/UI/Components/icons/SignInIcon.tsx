import React, { FC } from "react";
import { IconProps } from "Components/icons/types";

export const SignInIcon: FC<IconProps> = ({ fill }) => {
  return (
    <svg width="186" height="27" viewBox="0 0 186 31" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 6.5H6V12.5H30V30.5H0V24.5H24V18.5H0V0.5H30V6.5ZM42 0.5V30.5H36V0.5H42ZM78 30.5H48V0.5H78V6.5H54V24.5H72V18.5H66V12.5H78V30.5ZM84 30.5V0.5H90L108 21.7812V0.5H114V30.5H108L90 9.875V30.5H84ZM150 0.5V30.5H144V0.5H150ZM156 30.5V0.5H162L180 21.7812V0.5H186V30.5H180L162 9.875V30.5H156Z"
        fill="white"
      />
    </svg>
  );
};

SignInIcon.defaultProps = {
  fill: "var(--white)",
};
