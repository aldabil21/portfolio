import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary-dark/20 p-4 text-center' dir='ltr'>
      {`${new Date().getFullYear()} © aldabil.me`}
    </footer>
  );
};

export default Footer;
