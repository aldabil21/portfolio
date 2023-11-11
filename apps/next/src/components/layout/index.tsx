import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import { StickySocials } from 'ui/common';

type Props = {
  lang: Languages;
  children: React.ReactNode;
};

const Layout = ({ children, lang }: Props) => {
  return (
    <Fragment>
      <Header lang={lang} />
      <main>
        {children}
        <StickySocials />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
