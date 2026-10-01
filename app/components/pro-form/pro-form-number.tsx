import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui/input';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormNumberProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<Omit<ComponentProps<typeof Input>, 'type'>, T, N, O>;

export function ProFormNumber<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, ...props }: ProFormNumberProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => (
        <Input
          {...fieldProps}
          {...field}
          {...controlProps}
          type="number"
          value={field.value ?? ''}
          onChange={(event) =>
            field.onChange(
              Number.isFinite(event.target.valueAsNumber) ? event.target.valueAsNumber : null,
            )
          }
        />
      )}
    />
  );
}
