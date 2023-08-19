const DownloadIcon = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M16.59 9.5H15V4.5C15 3.95 14.55 3.5 14 3.5H10C9.45 3.5 9 3.95 9 4.5V9.5H7.41C6.52 9.5 6.07 10.58 6.7 11.21L11.29 15.8C11.68 16.19 12.31 16.19 12.7 15.8L17.29 11.21C17.92 10.58 17.48 9.5 16.59 9.5ZM5 19.5C5 20.05 5.45 20.5 6 20.5H18C18.55 20.5 19 20.05 19 19.5C19 18.95 18.55 18.5 18 18.5H6C5.45 18.5 5 18.95 5 19.5Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default DownloadIcon;
