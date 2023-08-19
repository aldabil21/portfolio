'use client';
import React, { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

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

// CSS
const SOLID: Record<ButtonTheme, string> = {
  primary:
    'bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast',
  secondary:
    'bg-secondary hover:bg-secondary-light active:bg-secondary-dark ring-secondary text-secondary-contrast',
  tertiary:
    'bg-tertiary hover:bg-tertiary-light active:bg-tertiary-dark ring-tertiary text-tertiary-contrast',
  error: 'bg-error hover:bg-error-light active:bg-error-dark ring-error text-error-contrast',
  success:
    'bg-success hover:bg-success-light active:bg-success-dark ring-success text-success-contrast',
  white: 'bg-white hover:bg-white active:bg-white-dark ring-white text-black',
};
//  shadow-inner shadow-primary-contrast
const OUTLINED: Record<ButtonTheme, string> = {
  primary: `border-primary bg-primary-light/10 active:bg-primary-light/20 ring-primary text-primary 
  bg-[url(/images/noise-dark.png)] dark:bg-[url(/images/noise.png)] shadow-[inset_0_0_20px_0] hover:shadow-[inset_0_0_40px_0] !shadow-primary-light/30 dark:!shadow-primary-contrast/20`,
  secondary: `border-secondary hover:bg-secondary-light/5 active:bg-secondary-light/10 ring-secondary text-secondary
  bg-[url(/images/noise-dark.png)] dark:bg-[url(/images/noise.png)] shadow-[inset_0_0_20px_0] hover:shadow-[inset_0_0_40px_0] !shadow-secondary-light/30 dark:!shadow-secondary-contrast/20`,
  tertiary: `border-tertiary hover:bg-tertiary-light/5 active:bg-tertiary-light/10 ring-tertiary text-tertiary-contrast
  bg-[url(/images/noise-dark.png)] dark:bg-[url(/images/noise.png)] shadow-[inset_0_0_20px_0] hover:shadow-[inset_0_0_40px_0] !shadow-tertiary-contrast/20`,
  error: 'border-error hover:bg-error-light/5 active:bg-error-light/10 ring-error text-error-dark',
  success:
    'border-success hover:bg-success-light/5 active:bg-success-light/10 ring-success text-success-dark',
  white: `dark:border-white border-black hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 ring-black dark:ring-white
  text-black dark:text-white bg-[url(/images/noise-dark.png)] dark:bg-[url(/images/noise.png)] shadow-[inset_0_0_20px_0] hover:shadow-[inset_0_0_40px_0] !shadow-black/20 dark:!shadow-white/20`,
};
const TEXT: Record<ButtonTheme, string> = {
  primary: 'hover:bg-primary-light/5 active:bg-primary-light/5 ring-primary text-primary',
  secondary: 'hover:bg-secondary-light/5 active:bg-secondary-light/5 ring-secondary text-secondary',
  tertiary: 'hover:bg-tertiary-light/5 active:bg-tertiary-light/5 ring-tertiary text-tertiary',
  error: 'hover:bg-error-light/5 active:bg-error-light/5 ring-error text-error-dark',
  success: 'hover:bg-success-light/5 active:bg-success-light/5 ring-success text-success-dark',
  white: 'hover:bg-white/5 active:bg-white/5 ring-white text-white',
};

function MainButton<C extends React.ElementType>(
  {
    children,
    as,
    theme = 'primary',
    shape = 'outlined',
    loading,
    disabled,
    className,
    rounded = false,
    ...props
  }: Props<C>,
  ref: React.ForwardedRef<never>
) {
  const Component = (as || 'button') as React.ElementType;
  const btnClasses = useMemo(() => {
    switch (shape) {
      case 'outlined':
        return OUTLINED[theme] + ' border focus:ring-1';
      case 'text':
        return TEXT[theme] + ' focus:ring-1';
      default:
        return SOLID[theme] + ' focus:ring-1 ring-offset-2';
    }
  }, [theme, shape]);

  return (
    <Component
      className={twMerge(
        btnClasses,
        `relative inline-flex items-center justify-center gap-1 overflow-hidden px-6 py-2 text-center
        ring-offset-body transition-all focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400`,
        rounded ? 'rounded-md' : '',
        className || ''
      )}
      disabled={loading || disabled}
      {...props}
      ref={ref}
    >
      {children}
    </Component>
  );
}

const Button = forwardRef(MainButton) as <C extends React.ElementType = 'button'>(
  props: Props<C> & { ref?: React.RefObject<React.ComponentRef<C>> }
) => ReturnType<typeof MainButton>;

export default Button;
