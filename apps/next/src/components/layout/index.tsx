import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  lang: Languages;
  children: React.ReactNode;
};

const Layout = ({ children, lang }: Props) => {
  return (
    <Fragment>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
