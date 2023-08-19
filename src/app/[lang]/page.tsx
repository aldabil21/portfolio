import { Fragment } from 'react';
import HomeBanner from '@/components/home/Banner';
import AboutMe from '@/components/home/AboutMe';
import Cpu from '@/components/home/Cpu';

const Page: NextPage = async ({ params: { lang } }) => {
  return (
    <Fragment>
      <HomeBanner lang={lang} />
      <AboutMe lang={lang} />
      <Cpu />
    </Fragment>
  );
};

export default Page;
