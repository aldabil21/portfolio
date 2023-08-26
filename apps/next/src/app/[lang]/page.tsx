import { Fragment } from 'react';
import HomeBanner from '@/components/home/Banner';
import AboutMe from '@/components/home/AboutMe';
import Cpu from '@/components/home/Cpu';
import Projects from '@/components/home/Projects';
import RadialBg from '@/components/ui/RadialBg';

const Page: NextPage = async ({ params: { lang } }) => {
  return (
    <Fragment>
      <div className='absolute -z-10 h-full min-h-[1600px] w-full overflow-hidden'>
        <RadialBg />
      </div>
      <HomeBanner lang={lang} />
      <AboutMe lang={lang} />
      <Cpu />
      <Projects lang={lang} />
    </Fragment>
  );
};

export default Page;
