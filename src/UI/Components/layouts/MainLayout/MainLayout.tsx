import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import { Header } from "Components/Header/Header";

import styles from "./MainLayout.module.scss";

export interface IMainLayout {
  children: ReactNode;
}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={classNames(styles.layout, "bg-fixed")}>
      <Header />
      <main>
        <div className="mx-auto max-w-[1280px] px-4">{children}</div>
      </main>
    </div>
  );
};
