import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Switch } from '@/components/ui/switch';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormSwitchProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof Switch>, 'render' | 'nativeButton'>,
  T,
  N,
  O
>;

export function ProFormSwitch<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, ...props }: ProFormSwitchProps<T, N, O>) {
  return (
    <ProFormField
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
