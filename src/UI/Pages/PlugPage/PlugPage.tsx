import React, { FC, Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import { useTranslation } from "react-i18next";

export const PlugPage: FC<RouteComponentProps> = ({ uri = "" }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="flex justify-center flex-1">
        <h2 className="text-white ">{t("urlSoon", { uri })}</h2>
      </div>
    </Fragment>
  );
};
