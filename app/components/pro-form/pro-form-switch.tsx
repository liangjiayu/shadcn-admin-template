import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Switch } from '@/components/ui/switch';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormSwitchProps<T extends FieldValues = FieldValues> = ProFormFieldPropsWithControl<
  ComponentProps<typeof Switch>,
  T
>;

export function ProFormSwitch<T extends FieldValues = FieldValues>({
  fieldProps,
  ...props
}: ProFormSwitchProps<T>) {
  return (
    <ProFormField<T>
      {...props}
      render={({ field, controlProps }) => (
        <Switch
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
