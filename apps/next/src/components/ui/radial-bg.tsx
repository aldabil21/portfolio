const RadialBg = () => {
  return (
    <div className='absolute inset-0 -top-80 left-1/2 w-[350%] -translate-x-1/2 md:w-[100%]'>
      <div
        className='bg-gradient-radial from-secondary dark:from-secondary absolute inset-0 -z-10
      mx-auto rounded-full via-transparent to-transparent opacity-[0.15] dark:via-transparent dark:to-transparent'
      />
    </div>
  );
};

export default RadialBg;
