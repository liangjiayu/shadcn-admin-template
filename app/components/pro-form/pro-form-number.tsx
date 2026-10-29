import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui/input';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormNumberProps<T extends FieldValues = FieldValues> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof Input>, 'type'>,
  T
>;

export function ProFormNumber<T extends FieldValues = FieldValues>({
  fieldProps,
  ...props
}: ProFormNumberProps<T>) {
  return (
    <ProFormField<T>
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
