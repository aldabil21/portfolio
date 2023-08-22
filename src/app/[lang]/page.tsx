import { Fragment } from 'react';
import HomeBanner from '@/components/home/Banner';
import AboutMe from '@/components/home/AboutMe';
import Cpu from '@/components/home/Cpu';
import Projects from '@/components/home/Projects';

const Page: NextPage = async ({ params: { lang } }) => {
  return (
    <Fragment>
      <HomeBanner lang={lang} />
      <AboutMe lang={lang} />
      <Cpu />
      <Projects lang={lang} />
      {/* <div className='h-[2000px]' /> */}
    </Fragment>
  );
};

export default Page;
