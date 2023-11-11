import { SocialsIcons } from 'ui/common';

const Footer = () => {
  return (
    <footer
      className='bg-primary-dark relative z-10 space-y-6 p-4 text-center text-white dark:bg-[#200625] md:space-y-0'
      dir='ltr'
    >
      <SocialsIcons />
      <p>{`${new Date().getFullYear()} © aldabil.me`}</p>
    </footer>
  );
};

export default Footer;
