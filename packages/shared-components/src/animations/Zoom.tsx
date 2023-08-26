import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  /** Delay before start animation, in seconds @default 0 */
  delay?: number;
  /** Duration of nimation, in seconds @default 0.5 */
  duration?: number;
  threshold?: number;
  /** If `false` the animation will be triggerd each time the element enter the viewport @default true */
  once?: boolean;
  as?: keyof typeof motion;
  className?: string;
};

export const Zoom = ({
  duration = 0.5,
  delay = 0,
  className,
  as = 'div',
  once = true,
  threshold,
  children,
}: Props) => {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { delay, duration, type: 'spring', bounce: 0.2 },
      }}
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </Component>
  );
};
