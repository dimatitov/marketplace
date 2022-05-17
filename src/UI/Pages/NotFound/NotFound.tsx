import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";

import styles from "./NotFound.module.scss";
import { NotFoundIcon } from "Components/icons";
import { Button } from "Components/Button";
import { ROUTES } from "constants/routes";

export const NotFound: FC<RouteComponentProps> = ({ navigate }) => {
  useEffect(() => {
    if (navigate) {
      navigate("/not-found", { replace: true });
    }
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <NotFoundIcon />
        <h2 className={styles.title}>Not Found</h2>
        <p className={styles.text}>The resource requested could not be found on this server!</p>
        <Button
          variant={"primary"}
          classes={{ button: styles.button }}
          onClick={navigate ? () => navigate(ROUTES.HOME_PAGE) : undefined}
        >
          RETURN HOME PAGE
        </Button>
      </div>
    </>
  );
};
