import { useNavigate } from "@reach/router";
import { useEffect } from "react";

import { ROUTES } from "constants/routes";
import { useTranslation } from "react-i18next";

export const useNotFoundPage = (isNotFoundPage: boolean): void => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isNotFoundPage) {
      void navigate(`${location?.origin}${ROUTES.NOT_FOUND}`);
    }
  }, [isNotFoundPage]);
};

export const useUpdateTitle = (title: string | undefined): void => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t(`pageTitles.${title}`) ?? "";
  }, [title]);
};
