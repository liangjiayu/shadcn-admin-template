import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormTextareaProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<ComponentProps<typeof Textarea>, T, N, O>;

export function ProFormTextarea<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, ...props }: ProFormTextareaProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => (
        <Textarea {...fieldProps} {...field} {...controlProps} value={field.value ?? ''} />
      )}
    />
  );
}
