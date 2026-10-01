import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui/input';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormInputProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<ComponentProps<typeof Input>, T, N, O>;

export function ProFormInput<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, ...props }: ProFormInputProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => (
        <Input {...fieldProps} {...field} {...controlProps} value={field.value ?? ''} />
      )}
    />
  );
}
