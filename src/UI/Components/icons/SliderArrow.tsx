import React, { FC } from "react";
import { IconProps } from "Components/icons/types";

export const SliderArrow: FC<IconProps> = ({ className, fill }) => {
  return (
    <svg width={7} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="m1.6 5 4.278 4.145a.493.493 0 0 1 0 .708.525.525 0 0 1-.73 0L.505 5.354A.5.5 0 0 1 .353 5a.487.487 0 0 1 .152-.354l4.643-4.5a.525.525 0 0 1 .73 0 .493.493 0 0 1 0 .709L1.6 5Z"
        fill={fill ? fill : undefined}
      />
    </svg>
  );
};
