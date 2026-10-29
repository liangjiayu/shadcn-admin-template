import { cn } from 'cn';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { optionKey, type ProFormOption } from './options';
import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormRadioGroupProps<T extends FieldValues = FieldValues> =
  ProFormFieldPropsWithControl<ComponentProps<typeof RadioGroup>, T> & {
    options: readonly ProFormOption[];
  };

export function ProFormRadioGroup<T extends FieldValues = FieldValues>({
  options,
  fieldProps,
  ...props
}: ProFormRadioGroupProps<T>) {
  return (
    <ProFormField<T>
      {...props}
      labelMode="group"
      render={({ field, controlProps, labelId }) => {
        const selected = options.find((option) => option.value === field.value);
        const firstEnabled = options.findIndex((option) => !option.disabled);
        return (
          <RadioGroup
            {...fieldProps}
            {...controlProps}
            name={field.name}
            value={selected ? optionKey(selected) : null}
            onValueChange={(value) =>
              field.onChange(options.find((option) => optionKey(option) === value)?.value ?? null)
            }
            aria-labelledby={labelId}
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
                    ref={index === firstEnabled ? field.ref : undefined}
                    onBlur={field.onBlur}
                  />
                  <Label htmlFor={id}>{option.label}</Label>
                </div>
              );
            })}
          </RadioGroup>
        );
      }}
    />
  );
}
