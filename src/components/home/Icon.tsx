import React, { CSSProperties, Fragment } from "react";
import { animated, SpringValue } from "@react-spring/web";
import { IconProps } from "./icons";
import { Typography } from "@material-ui/core";

interface IconCompProps {
  style: CSSProperties & Record<string, SpringValue<number>>;
  icon: IconProps;
  canExternal: boolean;
}

const Icon = (props: IconCompProps) => {
  const { icon, style, canExternal, ...otherProps } = props;

  const child = (
    <Fragment>
      <div className="flex align-items-center flex-justify-center fullheight">
        <div style={{ filter: "drop-shadow(#f7f7f76e 0 0 3px)" }}>
          {icon.icon}
        </div>
      </div>
      <Typography align="center">
        {icon.title} {icon.soon && "(Soon)"}
      </Typography>
    </Fragment>
  );

  const iconProps =
    icon.external && canExternal
      ? {
          href: canExternal ? icon.href : undefined,
          target: "_blank",
          rel: "noreferrer",
        }
      : {};

  return (
    <animated.a
      {...otherProps}
      style={{
        boxShadow: style.shadow.to((s) => `1px 1px ${s}px #858b94`),
        background: icon.color,
        borderRadius: 5,
        cursor: "move",
        ...style,
      }}
      className="draggble-item"
      {...iconProps}
    >
      {child}
    </animated.a>
  );
};

export default Icon;
