import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";

export interface WithMediaQueryProps {
  isMobile: boolean;
  mdDown: boolean;
  mdUp: boolean;
}

export function WithMediaQuery<T extends WithMediaQueryProps>(
  Component: React.ComponentType<T>
) {
  const ComponentWithMQ = (props: Omit<T, keyof WithMediaQueryProps>) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const mdUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
      <Component
        {...(props as T)}
        isMobile={isMobile}
        mdDown={mdDown}
        mdUp={mdUp}
      />
    );
  };

  return ComponentWithMQ;
}
