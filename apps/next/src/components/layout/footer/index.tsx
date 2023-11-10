import { SocialsIcons } from 'ui/common';

const Footer = () => {
  return (
    <footer className='relative z-10 space-y-6 bg-[#200625] p-4 text-center md:space-y-0' dir='ltr'>
      <SocialsIcons />
      <p>{`${new Date().getFullYear()} © aldabil.me`}</p>
    </footer>
  );
};

export default Footer;
