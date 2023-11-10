import type { HTMLAttributes } from 'react';
import React, { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { CircleSpinner } from '../spinners';

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
    'bg-primary enabled:hover:bg-primary-light enabled:active:bg-primary-dark ring-primary text-primary-contrast disabled:bg-primary/10',
  secondary:
    'bg-secondary enabled:hover:bg-secondary-light enabled:active:bg-secondary-dark ring-secondary text-secondary-contrast disabled:bg-secondary/30',
  tertiary:
    'bg-tertiary enabled:hover:bg-tertiary-light enabled:active:bg-tertiary-dark ring-tertiary text-tertiary-contrast',
  error:
    'bg-error enabled:hover:bg-error-light enabled:active:bg-error-dark ring-error text-error-contrast',
  success:
    'bg-success enabled:hover:bg-success-light enabled:active:bg-success-dark ring-success text-success-contrast',
  white: 'bg-white enabled:hover:bg-white enabled:active:bg-white-dark ring-white text-black',
};

const OUTLINED: Record<ButtonTheme, string> = {
  primary: `border-primary enabled:active:bg-primary-light/20 ring-primary text-primary 
  enabled:shadow-[inset_0_0_10px_rgb(var(--color-primary))] enabled:hover:shadow-[inset_0_0_20px_0_rgb(var(--color-primary)/10)]
  dark:disabled:border-gray-800 disabled:border-gray-400`,
  secondary: `border-secondary hover:bg-secondary-light/5 active:bg-secondary-light/10 ring-secondary text-secondary
  enabled:shadow-[inset_0_0_10px_rgb(var(--color-secondary))] enabled:hover:shadow-[inset_0_0_20px_0_rgb(var(--color-secondary)/10)]
  dark:disabled:border-gray-800 disabled:border-gray-400`,
  tertiary: `border-tertiary hover:bg-tertiary-light/5 active:bg-tertiary-light/10 ring-tertiary text-tertiary-contrast
  shadow-[inset_0_0_10px_rgb(var(--color-tertiary))] hover:shadow-[inset_0_0_20px_0_rgb(var(--color-tertiary)/10)]`,
  error: 'border-error hover:bg-error-light/5 active:bg-error-light/10 ring-error text-error-dark',
  success:
    'border-success hover:bg-success-light/5 active:bg-success-light/10 ring-success text-success-dark',
  white: `dark:border-white border-black hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 ring-black dark:ring-white
  text-black dark:text-white shadow-[inset_0_0_10px_rgb(255,255,255)] hover:shadow-[inset_0_0_20px_0_rgb(255,255,255,0.1)]`,
};

const TEXT: Record<ButtonTheme, string> = {
  primary: 'hover:bg-primary-light/5 enabled:active:bg-primary-light/5 ring-primary text-primary',
  secondary:
    'hover:bg-secondary-light/5 enabled:active:bg-secondary-light/5 ring-secondary text-secondary',
  tertiary:
    'hover:bg-tertiary-light/5 enabled:active:bg-tertiary-light/5 ring-tertiary text-tertiary',
  error: 'hover:bg-error-light/5 enabled:active:bg-error-light/5 ring-error text-error-dark',
  success:
    'hover:bg-success-light/5 enabled:active:bg-success-light/5 ring-success text-success-dark',
  white:
    'text-text ring-black dark:hover:bg-white/5 dark:enabled:active:bg-white/5 dark:ring-white hover:bg-black/5 enabled:active:bg-black/5 ',
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
        return `${OUTLINED[theme]} border focus:ring-1`;
      case 'text':
        return `${TEXT[theme]} focus:ring-1`;
      default:
        return `${SOLID[theme]} focus:ring-1 ring-offset-2`;
    }
  }, [theme, shape]);

  return (
    <Component
      className={twMerge(
        btnClasses,
        `ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-6 py-2
        text-center transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400`,
        rounded ? 'rounded-md' : '',
        className || ''
      )}
      disabled={loading || disabled}
      {...props}
      ref={ref}
    >
      {loading ? <CircleSpinner width={16} /> : null}
      {children}
    </Component>
  );
}

export const Button = forwardRef(MainButton) as <C extends React.ElementType = 'button'>(
  props: Props<C> & { ref?: React.RefObject<React.ComponentRef<C>> }
) => ReturnType<typeof MainButton>;
