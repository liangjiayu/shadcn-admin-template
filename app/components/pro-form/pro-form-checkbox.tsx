import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormCheckboxProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof Checkbox>, 'render' | 'nativeButton'>,
  T,
  N,
  O
>;

export function ProFormCheckbox<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, ...props }: ProFormCheckboxProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => (
        <Checkbox
          {...fieldProps}
          {...controlProps}
          name={field.name}
          ref={field.ref}
          onBlur={field.onBlur}
          checked={field.value ?? false}
          onCheckedChange={field.onChange}
        />
      )}
    />
  );
}
