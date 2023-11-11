import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  /** Delay before start animation, in seconds @default 0 */
  delay?: number;
  /** Duration of nimation, in seconds @default 0.5 */
  duration?: number;
  /** Range from 0 - 1 */
  threshold?: number;
  /** If `false` the animation will be triggerd each time the element enter the viewport @default true */
  once?: boolean;
  as?: keyof typeof motion;
  className?: string;
};

export const Fade = ({
  duration = 0.5,
  delay = 0,
  once = true,
  threshold,
  className,
  children,
  as = 'div',
}: Props) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0 }}
      viewport={{ once, amount: threshold }}
      whileInView={{ opacity: 1, transition: { delay, duration } }}
    >
      {children}
    </Component>
  );
};
