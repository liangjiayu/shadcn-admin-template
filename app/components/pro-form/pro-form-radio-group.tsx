import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/utils';

import { optionKey, type ProFormOption } from './options';
import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormRadioGroupProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<Omit<ComponentProps<typeof RadioGroup>, 'children'>, T, N, O> & {
  options: ProFormOption[];
};

export function ProFormRadioGroup<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ options, fieldProps, ...props }: ProFormRadioGroupProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      labelMode="group"
      render={({ field, controlProps, labelId }) => (
        <RadioGroup
          {...fieldProps}
          {...controlProps}
          name={field.name}
          value={
            options.find((option) => option.value === field.value)
              ? optionKey(options.find((option) => option.value === field.value)!)
              : null
          }
          onValueChange={(value) =>
            field.onChange(options.find((option) => optionKey(option) === value)?.value ?? null)
          }
          aria-labelledby={props.label ? labelId : undefined}
          className={cn('flex flex-wrap gap-4', fieldProps?.className)}
        >
          {options.map((option, index) => {
            const id = `${controlProps.id}-${index}`;
            return (
              <div key={optionKey(option)} className="flex items-center gap-2">
                <RadioGroupItem
                  {...controlProps}
                  id={id}
                  value={optionKey(option)}
                  disabled={controlProps.disabled || option.disabled}
                  ref={
                    index === options.findIndex((item) => !item.disabled) ? field.ref : undefined
                  }
                  onBlur={field.onBlur}
                />
                <Label htmlFor={id}>{option.label}</Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
    />
  );
}
