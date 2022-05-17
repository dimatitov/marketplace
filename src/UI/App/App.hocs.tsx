import React, { ComponentType, ReactElement } from "react";
import { Location, WindowLocation } from "@reach/router";

// Только для компонента "App", потому что на корневом уровне у нас нет доступа к местоположению с помощью useLocation
// eslint-disable-next-line @typescript-eslint/ban-types
export const withLocation = <T extends object>(WrappedComponent: ComponentType<T & { location: WindowLocation }>) => {
  return (props: T): ReactElement => {
    return (
      <Location>
        {({ location }) => {
          return <WrappedComponent location={location} {...props} />;
        }}
      </Location>
    );
  };
};
