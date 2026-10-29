import { cn } from 'cn';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { optionKey, type ProFormOption } from './options';
import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormCheckboxGroupProps<T extends FieldValues = FieldValues> =
  ProFormFieldPropsWithControl<Omit<ComponentProps<'div'>, 'role'>, T> & {
    options: readonly ProFormOption[];
  };

export function ProFormCheckboxGroup<T extends FieldValues = FieldValues>({
  options,
  fieldProps,
  ...props
}: ProFormCheckboxGroupProps<T>) {
  return (
    <ProFormField<T>
      {...props}
      labelMode="group"
      render={({ field, controlProps, labelId }) => {
        const values: (string | number)[] = field.value ?? [];
        const firstEnabled = options.findIndex((option) => !option.disabled);
        return (
          <div
            {...fieldProps}
            id={controlProps.id}
            aria-invalid={controlProps['aria-invalid']}
            aria-describedby={controlProps['aria-describedby']}
            aria-disabled={controlProps.disabled}
            role="group"
            aria-labelledby={labelId}
            className={cn('flex flex-wrap gap-4', fieldProps?.className)}
          >
            {options.map((option, index) => {
              const id = `${controlProps.id}-${index}`;
              return (
                <div key={optionKey(option)} className="flex items-center gap-2">
                  <Checkbox
                    {...controlProps}
                    id={id}
                    ref={index === firstEnabled ? field.ref : undefined}
                    name={field.name}
                    value={optionKey(option)}
                    onBlur={field.onBlur}
                    disabled={controlProps.disabled || option.disabled}
                    checked={values.includes(option.value)}
                    onCheckedChange={(checked) =>
                      field.onChange(
                        checked
                          ? [...values, option.value]
                          : values.filter((value) => value !== option.value),
                      )
                    }
                  />
                  <Label htmlFor={id}>{option.label}</Label>
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
}
