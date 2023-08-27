import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { AnimationProps, MotionProps } from 'framer-motion';

type Props = {
  lang: string;
  children: React.ReactNode;
  /** Range from 0 - 1 */
  threshold?: number;
  /** Direction of reveal, the starting point @default bottom*/
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'none';
  /** Value of distance of direction translation @defaul 50 */
  distance?: number | string;
  /** Delay before start animation, in seconds @default 0 */
  delay?: number;
  /** Duration of nimation, in seconds @default 0.5 */
  duration?: number;
  /** Initial opacity from 0 - 1 @default 0 */
  opacity?: number;
  /** If `false` the animation will be triggerd each time the element enter the viewport @default true */
  once?: boolean;
  as?: keyof typeof motion;
  className?: string;
} & MotionProps;

export const Reveal = ({
  lang,
  children,
  threshold = 0.3,
  direction = 'bottom',
  delay = 0,
  duration = 0.5,
  opacity = 0,
  distance = 25,
  once = true,
  className,
  as = 'div',
  ...props
}: Props) => {
  const Component = motion[as];

  const IsRtl = lang === 'ar';

  const getInitial = useMemo(() => {
    let settings: AnimationProps['animate'] & AnimationProps['initial'] = {};
    switch (direction) {
      case 'right':
        settings = { x: IsRtl ? -distance : distance };
        break;
      case 'left':
        settings = { x: IsRtl ? distance : -distance };
        break;
      case 'top':
        settings = { y: -distance };
        break;
      default:
        settings = { y: distance };
        break;
    }
    return settings;
  }, [IsRtl, direction, distance]);

  return (
    <Component
      className={className}
      initial={{ ...getInitial, opacity }}
      viewport={{ once, amount: threshold }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration,
        },
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
