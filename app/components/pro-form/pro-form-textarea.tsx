import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormTextareaProps<T extends FieldValues = FieldValues> =
  ProFormFieldPropsWithControl<ComponentProps<typeof Textarea>, T>;

export function ProFormTextarea<T extends FieldValues = FieldValues>({
  fieldProps,
  ...props
}: ProFormTextareaProps<T>) {
  return (
    <ProFormField<T>
      {...props}
      render={({ field, controlProps }) => (
        <Textarea {...fieldProps} {...field} {...controlProps} value={field.value ?? ''} />
      )}
    />
  );
}
