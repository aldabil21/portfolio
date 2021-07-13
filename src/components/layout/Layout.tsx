import React, { Fragment, useState } from "react";
import Head from "next/head";
import SideDrawer from "./Drawer";
import { useTheme } from "@material-ui/core";
import styled from "@emotion/styled";
import BottomNav from "./BottomNav";
import { WithMediaQuery, WithMediaQueryProps } from "../hoc/WithMediaQuery";
import { useRouter } from "next/router";

interface LayoutProps extends WithMediaQueryProps {
  children: JSX.Element;
}

const Main = styled.main(({ isMobile }: { isMobile: boolean }) => ({
  flexGrow: 1,
  marginBottom: isMobile ? "3rem" : "",
}));

const Layout = ({ children, mdDown, isMobile }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  const { pathname, push } = useRouter();
  const bottomSpace = isMobile && pathname !== "/";

  const toHome = () => push("/");
  const toggleDrawer = () => setOpen(!open);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideDrawer
        open={!mdDown || open}
        toggleDrawer={toggleDrawer}
        isMobile={isMobile}
      >
        <Main id="main" isMobile={bottomSpace}>
          {children}
        </Main>
      </SideDrawer>
      <BottomNav open={isMobile} toHome={toHome} toggleDrawer={toggleDrawer} />
    </Fragment>
  );
};

export default WithMediaQuery(Layout);
