import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/utils';

import { optionKey, type ProFormOption } from './options';
import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormCheckboxGroupProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<Omit<ComponentProps<'div'>, 'children'>, T, N, O> & {
  options: ProFormOption[];
};

export function ProFormCheckboxGroup<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ options, fieldProps, ...props }: ProFormCheckboxGroupProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      labelMode="group"
      render={({ field, controlProps, labelId }) => {
        const values: (string | number)[] = field.value ?? [];
        return (
          <div
            {...fieldProps}
            id={controlProps.id}
            aria-invalid={controlProps['aria-invalid']}
            aria-describedby={controlProps['aria-describedby']}
            aria-disabled={controlProps.disabled}
            role="group"
            aria-labelledby={props.label ? labelId : undefined}
            className={cn('flex flex-wrap gap-4', fieldProps?.className)}
          >
            {options.map((option, index) => {
              const id = `${controlProps.id}-${index}`;
              return (
                <div key={optionKey(option)} className="flex items-center gap-2">
                  <Checkbox
                    {...controlProps}
                    id={id}
                    ref={
                      index === options.findIndex((item) => !item.disabled) ? field.ref : undefined
                    }
                    name={field.name}
                    value={String(option.value)}
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
