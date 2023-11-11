'use client';
import { forwardRef } from 'react';
import { TextArea as TextAreaField } from 'ui/inputs';
import type { TextAreaProps } from 'ui/inputs';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function Input(props, ref) {
  return <TextAreaField {...props} ref={ref} />;
});

export default TextArea;
