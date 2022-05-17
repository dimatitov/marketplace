import React, { FC, ReactNode } from "react";

interface IFallbackLayout {
  children: ReactNode;
}

export const FallbackLayout: FC<IFallbackLayout> = ({ children }) => {
  return <div>{children}</div>;
};
