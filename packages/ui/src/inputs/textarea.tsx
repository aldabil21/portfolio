import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface TextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'type'> {
  label?: string | React.ReactNode;
  error?: string;
  onChangeString?: (value: string) => void;
  rounded?: boolean;
  hideErrorSpace?: boolean;
  hideErrorMark?: boolean;
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {
    label,
    error,
    onChangeString,
    rounded = false,
    className,
    hideErrorSpace = false,
    hideErrorMark = false,
    ...props
  },
  ref
) {
  return (
    <>
      {label ? (
        <label
          className={`block pb-1 dark:text-text ${props.disabled ? 'text-gray-400' : ''}`}
          htmlFor={props.id}
        >
          {label}
        </label>
      ) : null}
      <div className='relative'>
        <textarea
          className={`w-full border p-2 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-0 disabled:cursor-not-allowed
          disabled:text-gray-400 bg-gray-50 disabled:bg-gray-100 dark:bg-secondary/20 dark:text-white dark:disabled:bg-white/5
          ${error ? 'border-error' : 'border-gray-300 dark:border-gray-600'}
          ${rounded ? 'rounded-md' : 'rounded-none'}
          ${props.dir === 'ltr' ? 'pr-6' : 'ltr:pr-6 rtl:pl-6 rtl:text-right'}
          ${className || ''}`}
          onChange={(e) => {
            onChangeString?.(e.target.value);
          }}
          ref={ref}
          {...props}
        />
        {error && !hideErrorMark ? (
          <svg
            className={`absolute inset-y-0 right-0 mx-1 h-full fill-error
            ${props.dir === 'ltr' ? '' : 'rtl:left-0 rtl:right-auto'}`}
            height='18'
            viewBox='0 0 20 19'
            width='18'
          >
            <path d='M9.99121 18.7422C14.9746 18.7422 19.0879 14.6289 19.0879 9.6543C19.0879 4.67969 14.9658 0.566406 9.98242 0.566406C5.00781 0.566406 0.90332 4.67969 0.90332 9.6543C0.90332 14.6289 5.0166 18.7422 9.99121 18.7422ZM9.99121 16.9316C5.95703 16.9316 2.73145 13.6885 2.73145 9.6543C2.73145 5.62012 5.95703 2.38574 9.98242 2.38574C14.0166 2.38574 17.2598 5.62012 17.2686 9.6543C17.2773 13.6885 14.0254 16.9316 9.99121 16.9316ZM9.98242 11.1133C10.4658 11.1133 10.7471 10.8408 10.7559 10.3311L10.8877 6.10352C10.9053 5.58496 10.5186 5.20703 9.97363 5.20703C9.42871 5.20703 9.05078 5.57617 9.06836 6.09473L9.19141 10.3311C9.20898 10.832 9.49023 11.1133 9.98242 11.1133ZM9.98242 14.0312C10.5537 14.0312 11.0195 13.6182 11.0195 13.0557C11.0195 12.502 10.5625 12.0889 9.98242 12.0889C9.41113 12.0889 8.94531 12.502 8.94531 13.0557C8.94531 13.6094 9.41992 14.0312 9.98242 14.0312Z' />
          </svg>
        ) : null}
      </div>
      <p
        className={`my-1 text-xs text-error
        ${hideErrorSpace ? '' : 'min-h-[16px]'}
        ${error ? 'visible' : 'text-transparent'}`}
      >
        {error}
      </p>
    </>
  );
});
