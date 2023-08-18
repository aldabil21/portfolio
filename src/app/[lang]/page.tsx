import { Fragment } from 'react';
import HomeBanner from '@/components/home/Banner';
import AboutMe from '@/components/home/AboutMe';

const Page: NextPage = async ({ params: { lang } }) => {
  return (
    <Fragment>
      <HomeBanner lang={lang} />
      <AboutMe lang={lang} />
    </Fragment>
  );
};

export default Page;
