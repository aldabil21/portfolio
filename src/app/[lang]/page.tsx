import { Fragment } from 'react';
import HomeBanner from '@/components/home/Banner';

const Page: NextPage = async ({ params: { lang } }) => {
  return (
    <Fragment>
      <HomeBanner lang={lang} />
    </Fragment>
  );
};

export default Page;
