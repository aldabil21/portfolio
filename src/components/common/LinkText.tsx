import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useTheme } from "@material-ui/core";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  newtab?: boolean;
}

const LinkText = ({ href, children, external, newtab }: LinkTextProps) => {
  const theme = useTheme();
  const StyledLink = styled.a`
    box-shadow: inset 0 -0.4em 0px 0px ${theme.palette.action.active};
    transition: all 200ms ease-in;
    padding: 0 2px;
    &:hover {
      color: ${theme.palette.secondary.main};
      box-shadow: inset 0 -1.7em 0px 0px ${theme.palette.action.active};
    }
  `;

  const externalProps = newtab ? { target: "_blank", rel: "npreferrer" } : {};
  return external ? (
    <StyledLink href={href} {...externalProps}>
      {children}
    </StyledLink>
  ) : (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default LinkText;
