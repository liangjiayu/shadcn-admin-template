import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormCheckboxProps<T extends FieldValues = FieldValues> =
  ProFormFieldPropsWithControl<ComponentProps<typeof Checkbox>, T>;

export function ProFormCheckbox<T extends FieldValues = FieldValues>({
  fieldProps,
  ...props
}: ProFormCheckboxProps<T>) {
  return (
    <ProFormField<T>
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
