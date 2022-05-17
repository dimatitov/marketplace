import React, { FC } from "react";
import { StarProps } from "Components/icons/types";

export const RatingStar: FC<StarProps> = () => {
  return (
    <svg width={15} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m7.5 0 1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient id="a" x1={-1.552} y1={7.387} x2={15} y2={7.387} gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D3FC" />
          <stop offset={1} stopColor="#728BEF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
