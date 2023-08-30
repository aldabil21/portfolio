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
    'ui-bg-primary enabled:hover:ui-bg-primary-light enabled:active:ui-bg-primary-dark ui-ring-primary ui-text-primary-contrast disabled:ui-bg-primary/10',
  secondary:
    'ui-bg-secondary enabled:hover:ui-bg-secondary-light enabled:active:ui-bg-secondary-dark ui-ring-secondary ui-text-secondary-contrast disabled:ui-bg-secondary/30',
  tertiary:
    'ui-bg-tertiary enabled:hover:ui-bg-tertiary-light enabled:active:ui-bg-tertiary-dark ui-ring-tertiary ui-text-tertiary-contrast',
  error:
    'ui-bg-error enabled:hover:ui-bg-error-light enabled:active:ui-bg-error-dark ui-ring-error ui-text-error-contrast',
  success:
    'ui-bg-success enabled:hover:ui-bg-success-light enabled:active:ui-bg-success-dark ui-ring-success ui-text-success-contrast',
  white:
    'ui-bg-white enabled:hover:ui-bg-white enabled:active:ui-bg-white-dark ui-ring-white ui-text-black',
};

const OUTLINED: Record<ButtonTheme, string> = {
  primary: `ui-border-primary active:ui-bg-primary-light/20 ui-ring-primary ui-text-primary 
  ui-shadow-[inset_0_0_10px_rgb(var(--color-primary))] hover:ui-shadow-[inset_0_0_20px_0_rgb(var(--color-primary)/10)]`,
  secondary: `ui-border-secondary hover:ui-bg-secondary-light/5 active:ui-bg-secondary-light/10 ui-ring-secondary ui-text-secondary
  ui-shadow-[inset_0_0_10px_rgb(var(--color-secondary))] hover:ui-shadow-[inset_0_0_20px_0_rgb(var(--color-secondary)/10)]`,
  tertiary: `ui-border-tertiary hover:ui-bg-tertiary-light/5 active:ui-bg-tertiary-light/10 ui-ring-tertiary ui-text-tertiary-contrast
  ui-shadow-[inset_0_0_10px_rgb(var(--color-tertiary))] hover:ui-shadow-[inset_0_0_20px_0_rgb(var(--color-tertiary)/10)]`,
  error:
    'ui-border-error hover:ui-bg-error-light/5 active:ui-bg-error-light/10 ui-ring-error ui-text-error-dark',
  success:
    'ui-border-success hover:ui-bg-success-light/5 active:ui-bg-success-light/10 ui-ring-success ui-text-success-dark',
  white: `dark:ui-border-white ui-border-black hover:ui-bg-black/5 dark:hover:ui-bg-white/5 active:ui-bg-black/10 dark:active:ui-bg-white/10 ui-ring-black dark:ui-ring-white
  ui-text-black dark:ui-text-white ui-shadow-[inset_0_0_10px_rgb(255,255,255)] hover:ui-shadow-[inset_0_0_20px_0_rgb(255,255,255,0.1)]`,
};

const TEXT: Record<ButtonTheme, string> = {
  primary:
    'hover:ui-bg-primary-light/5 enabled:active:ui-bg-primary-light/5 ui-ring-primary ui-text-primary',
  secondary:
    'hover:ui-bg-secondary-light/5 enabled:active:ui-bg-secondary-light/5 ui-ring-secondary ui-text-secondary',
  tertiary:
    'hover:ui-bg-tertiary-light/5 enabled:active:ui-bg-tertiary-light/5 ui-ring-tertiary ui-text-tertiary',
  error:
    'hover:ui-bg-error-light/5 enabled:active:ui-bg-error-light/5 ui-ring-error ui-text-error-dark',
  success:
    'hover:ui-bg-success-light/5 enabled:active:ui-bg-success-light/5 ui-ring-success ui-text-success-dark',
  white:
    'ui-text-text ui-ring-black dark:hover:ui-bg-white/5 dark:enabled:active:ui-bg-white/5 dark:ui-ring-white hover:ui-bg-black/5 enabled:active:ui-bg-black/5 ',
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
        return `${OUTLINED[theme]} ui-border focus:ui-ring-1`;
      case 'text':
        return `${TEXT[theme]} focus:ui-ring-1`;
      default:
        return `${SOLID[theme]} focus:ui-ring-1 ui-ring-offset-2`;
    }
  }, [theme, shape]);

  return (
    <Component
      className={twMerge(
        btnClasses,
        `ui-ring-offset-body ui-relative ui-inline-flex ui-items-center ui-justify-center ui-gap-1 ui-overflow-hidden ui-px-6 ui-py-2
        ui-text-center ui-transition-all ui-duration-200 focus:ui-outline-none disabled:ui-cursor-not-allowed disabled:ui-text-gray-400`,
        rounded ? 'ui-rounded-md' : '',
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
