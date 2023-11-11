import { motion } from 'framer-motion';

export const AnimatedCheck = ({ className = '' }) => {
  return (
    <motion.svg
      className={className}
      fill='none'
      viewBox='0 0 121 120'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        animate={{ scale: 1, opacity: 0.3 }}
        clipRule='evenodd'
        d='M60.5 110C88.1142 110 110.5 87.6142 110.5 60C110.5 32.3858 88.1142 10 60.5 10C32.8858 10 10.5 32.3858 10.5 60C10.5 87.6142 32.8858 110 60.5 110Z'
        fill='currentColor'
        fillRule='evenodd'
        initial={{ scale: 0.2, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
      />
      <motion.path
        animate={{ pathLength: 1, strokeLinecap: 'round', strokeLinejoin: 'round' }}
        d='M35 64.5L52.5 79.5L87.5 42'
        initial={{ pathLength: 0, strokeLinecap: 'inherit', strokeLinejoin: 'inherit' }}
        stroke='currentColor'
        strokeWidth={10}
        transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
      />
    </motion.svg>
  );
};
