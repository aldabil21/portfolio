import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
