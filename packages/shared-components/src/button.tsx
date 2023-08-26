export function Button() {
  return (
    <div className='rounded-md '>
      <a href='https://turbo.build/repo/docs'>
        <div className='comp-flex comp-w-full comp-items-center comp-justify-center comp-rounded-md comp-border comp-border-transparent comp-px-8 comp-py-3 comp-text-base comp-font-medium comp-no-underline comp-bg-white comp-text-black hover:comp-bg-gray-300 md:comp-py-3 md:comp-px-10 md:comp-text-lg md:comp-leading-6'>
          Read the docs
          <span className='comp-ml-2 comp-bg-gradient-to-r comp-from-brandred comp-to-brandblue comp-bg-clip-text comp-text-transparent'>
            →
          </span>
        </div>
      </a>
    </div>
  );
}
