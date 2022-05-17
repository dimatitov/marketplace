import React, { FC } from "react";

import { IconProps } from "Components/icons/types";

export const DXLogoIcons: FC<IconProps> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 88 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M54.2211 33.4619V38.1739H49.4606V33.4619H54.2211ZM55.8589 31.8371H47.8228V39.7988H55.854V31.8371H55.8589ZM62.2523 25.497V30.2106H57.4918V25.497H62.2523ZM63.8852 23.8738H55.854V31.8339H63.8852V23.8738ZM86.3622 33.4619V38.1739H81.6065V33.4619H86.3622ZM88 31.8371H79.9688V39.7988H88V31.8371ZM78.331 25.497V30.2106H73.5753V25.497H78.331ZM79.9704 23.8738H71.9311V31.8339H79.9639V23.8738H79.9704ZM71.9311 15.9234H63.8934V23.8851H71.9311V15.9234ZM54.2211 1.62326V6.33682H49.4606V1.62326H54.2211ZM55.854 0H47.8228V7.96007H55.854V0ZM62.2475 9.58816V14.3017H57.4918V9.58816H62.2475ZM63.8852 7.9649H55.854V15.925H63.8852V7.9649ZM86.3622 1.62326V6.33682H81.6065V1.62326H86.3622ZM88 0H79.9688V7.96007H88V0ZM78.331 9.58816V14.3017H73.5753V9.58816H78.331ZM79.9704 7.9649H71.9311V15.925H79.9639V7.9649H79.9704Z"
        fill="url(#paint0_linear_274_519)"
      />
      <path d="M8.01171 32.0609H32.0436V8.24022H0V0.299476H40.0553V40H0V16.181H8.01171V32.0609Z" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_274_519"
          x1="-2.40569"
          y1="20"
          x2="89.8577"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3783FF" />
          <stop offset="0.17" stopColor="#3B87FF" />
          <stop offset="0.33" stopColor="#4793FF" />
          <stop offset="0.5" stopColor="#5AA7FE" />
          <stop offset="0.67" stopColor="#75C4FD" />
          <stop offset="0.77" stopColor="#89D8FD" />
          <stop offset="0.83" stopColor="#70DEFC" />
          <stop offset="0.97" stopColor="#31ECFA" />
          <stop offset="1" stopColor="#23EFF9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

DXLogoIcons.defaultProps = {
  width: "88",
  height: "40",
};
