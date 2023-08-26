'use client';
import type { HTMLAttributes } from 'react';
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

type Props<C extends React.ElementType = 'button'> = ComponentProps<C> & HTMLAttributes<C>;

const SOLID: Record<ButtonTheme, string> = {
  primary:
    'comp-bg-primary hover:comp-bg-primary-light active:comp-bg-primary-dark comp-ring-primary comp-text-primary-contrast',
  secondary:
    'comp-bg-secondary hover:comp-bg-secondary-light active:comp-bg-secondary-dark comp-ring-secondary comp-text-secondary-contrast',
  tertiary:
    'comp-bg-tertiary hover:comp-bg-tertiary-light active:comp-bg-tertiary-dark comp-ring-tertiary comp-text-tertiary-contrast',
  error:
    'comp-bg-error hover:comp-bg-error-light active:comp-bg-error-dark comp-ring-error comp-text-error-contrast',
  success:
    'comp-bg-success hover:comp-bg-success-light active:comp-bg-success-dark comp-ring-success comp-text-success-contrast',
  white:
    'comp-bg-white hover:comp-bg-white active:comp-bg-white-dark comp-ring-white comp-text-black',
};

const OUTLINED: Record<ButtonTheme, string> = {
  primary: `comp-border-primary comp-bg-primary-light/10 active:comp-bg-primary-light/20 comp-ring-primary comp-text-primary 
  comp-shadow-[inset_0_0_20px_0] hover:comp-shadow-[inset_0_0_40px_0] !comp-shadow-primary-light/30 dark:!comp-shadow-primary-contrast/20`,
  secondary: `comp-border-secondary hover:comp-bg-secondary-light/5 active:comp-bg-secondary-light/10 comp-ring-secondary comp-text-secondary
  comp-shadow-[inset_0_0_20px_0] hover:comp-shadow-[inset_0_0_40px_0] !comp-shadow-secondary-light/30 dark:!comp-shadow-secondary-contrast/20`,
  tertiary: `comp-border-tertiary hover:comp-bg-tertiary-light/5 active:comp-bg-tertiary-light/10 comp-ring-tertiary comp-text-tertiary-contrast
  comp-shadow-[inset_0_0_20px_0] hover:comp-shadow-[inset_0_0_40px_0] !comp-shadow-tertiary-contrast/20`,
  error:
    'comp-border-error hover:comp-bg-error-light/5 active:comp-bg-error-light/10 comp-ring-error comp-text-error-dark',
  success:
    'comp-border-success hover:comp-bg-success-light/5 active:comp-bg-success-light/10 comp-ring-success comp-text-success-dark',
  white: `dark:comp-border-white comp-border-black hover:comp-bg-black/5 dark:hover:comp-bg-white/5 active:comp-bg-black/10 dark:active:comp-bg-white/10 comp-ring-black dark:comp-ring-white
  comp-text-black dark:comp-text-white comp-shadow-[inset_0_0_20px_0] hover:comp-shadow-[inset_0_0_40px_0] !comp-shadow-black/20 dark:!comp-shadow-white/20`,
};

const TEXT: Record<ButtonTheme, string> = {
  primary:
    'hover:comp-bg-primary-light/5 active:comp-bg-primary-light/5 comp-ring-primary comp-text-primary',
  secondary:
    'hover:comp-bg-secondary-light/5 active:comp-bg-secondary-light/5 comp-ring-secondary comp-text-secondary',
  tertiary:
    'hover:comp-bg-tertiary-light/5 active:comp-bg-tertiary-light/5 comp-ring-tertiary comp-text-tertiary',
  error:
    'hover:comp-bg-error-light/5 active:comp-bg-error-light/5 comp-ring-error comp-text-error-dark',
  success:
    'hover:comp-bg-success-light/5 active:comp-bg-success-light/5 comp-ring-success comp-text-success-dark',
  white:
    'dark:hover:comp-bg-white/5 dark:active:comp-bg-white/5 dark:comp-ring-white dark:comp-text-white hover:comp-bg-black/5 active:comp-bg-black/5 comp-ring-black comp-text-black',
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
        return `${OUTLINED[theme]} comp-border focus:comp-ring-1`;
      case 'text':
        return `${TEXT[theme]} focus:comp-ring-1`;
      default:
        return `${SOLID[theme]} focus:comp-ring-1 comp-ring-offset-2`;
    }
  }, [theme, shape]);

  return (
    <Component
      className={twMerge(
        btnClasses,
        `comp-ring-offset-body comp-relative comp-inline-flex comp-items-center comp-justify-center comp-gap-1 comp-overflow-hidden comp-px-6 comp-py-2
        comp-text-center comp-transition-all focus:comp-outline-none disabled:comp-cursor-not-allowed disabled:comp-text-gray-400`,
        rounded ? 'comp-rounded-md' : '',
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

export const Button = forwardRef(MainButton) as <C extends React.ElementType = 'button'>(
  props: Props<C> & { ref?: React.RefObject<React.ComponentRef<C>> }
) => ReturnType<typeof MainButton>;
