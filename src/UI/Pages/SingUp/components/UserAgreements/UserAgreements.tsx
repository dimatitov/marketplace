import React, { FC } from "react";

import styles from "./UserAgreements.module.scss";
import { useTranslation } from "react-i18next";

export const UserAgreements: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.linkWrapper}>
      <p>{t("userAgreement.agree")}</p>
      <a className={styles.route} href="/">
        {t("userAgreement.policy")}
      </a>
      <span>{t("and")}</span>
      <a className={styles.route} href="/">
        {t("userAgreement.terms")}
      </a>
    </div>
  );
};
