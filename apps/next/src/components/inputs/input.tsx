'use client';
import { forwardRef } from 'react';
import { Input as InputField } from 'ui/inputs';
import type { InputProps } from 'ui/inputs';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return <InputField {...props} ref={ref} />;
});

export default Input;
