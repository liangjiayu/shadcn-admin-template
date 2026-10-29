import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui/input';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormInputProps<T extends FieldValues = FieldValues> = ProFormFieldPropsWithControl<
  ComponentProps<typeof Input>,
  T
>;

export function ProFormInput<T extends FieldValues = FieldValues>({
  fieldProps,
  ...props
}: ProFormInputProps<T>) {
  return (
    <ProFormField<T>
      {...props}
      render={({ field, controlProps }) => (
        <Input {...fieldProps} {...field} {...controlProps} value={field.value ?? ''} />
      )}
    />
  );
}
