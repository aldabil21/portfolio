import { Fragment } from 'react';
import HomeBanner from '@/components/home/banner';
import AboutMe from '@/components/home/about-me';
import Cpu from '@/components/home/cpu';
import Projects from '@/components/home/projects';
import RadialBg from '@/components/ui/radial-bg';
import WhatCanIHelpYouWith from '../../components/common/help-with';

const Page: NextPage = ({ params: { lang } }) => {
  return (
    <Fragment>
      <div className='absolute -z-10 h-full min-h-[1600px] w-full overflow-hidden'>
        <RadialBg />
      </div>
      <HomeBanner lang={lang} />
      <AboutMe lang={lang} />
      <Cpu />
      <Projects lang={lang} limit={5} />
      <WhatCanIHelpYouWith lang={lang} />
    </Fragment>
  );
};

export default Page;
