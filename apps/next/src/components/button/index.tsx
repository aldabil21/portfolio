'use client';
import React, { forwardRef, useMemo } from 'react';
import { Button as UiButton } from 'shared-components/button';

type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'white';
type ButtonShape = 'solid' | 'outlined' | 'text';
type ComponentProps<C extends React.ElementType> = {
  theme?: ButtonTheme;
  shape?: ButtonShape;
  loading?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  as?: C | React.ElementType<C>;
};
type Props<C extends React.ElementType = 'button'> = ComponentProps<C> &
  React.ComponentPropsWithoutRef<C>;

function MainButton<C extends React.ElementType>(
  { children, theme = 'primary', shape = 'outlined', ...props }: Props<C>,
  ref: React.ForwardedRef<never>
) {
  const Component = UiButton as React.ElementType;
  const btnClasses = useMemo(() => {
    switch (shape) {
      case 'outlined':
        return 'bg-[url(/images/noise-dark.png)] dark:bg-[url(/images/noise.png)]';
      default:
        return '';
    }
  }, [shape]);

  return (
    <Component className={btnClasses} theme={theme} shape={shape} {...props} ref={ref}>
      {children}
    </Component>
  );
}

const Button = forwardRef(MainButton) as <C extends React.ElementType = 'button'>(
  props: Props<C> & { ref?: React.RefObject<React.ComponentRef<C>> }
) => ReturnType<typeof MainButton>;

export default Button;
