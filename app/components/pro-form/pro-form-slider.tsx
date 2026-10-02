import { cn } from 'cn';
import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Slider } from '@/components/ui/slider';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormSliderProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof Slider>, 'children' | 'render' | 'onValueCommitted'>,
  T,
  N,
  O
> & {
  showValue?: boolean;
};

export function ProFormSlider<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, showValue = true, ...props }: ProFormSliderProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      labelMode="group"
      render={({ field, controlProps, labelId }) => (
        <div className="space-y-2">
          <Slider
            {...fieldProps}
            {...controlProps}
            name={field.name}
            value={field.value ?? [fieldProps?.min ?? 0]}
            onValueChange={field.onChange}
            onBlur={field.onBlur}
            aria-labelledby={props.label ? labelId : undefined}
            ref={(element) => {
              // RHF must focus the range input rather than the slider's outer div.
              field.ref(element?.querySelector<HTMLInputElement>('input[type="range"]') ?? null);
            }}
            className={cn('py-2', fieldProps?.className)}
          />
          {showValue && (
            <div className="text-sm text-muted-foreground">
              {(field.value ?? [fieldProps?.min ?? 0]).join(' – ')}
            </div>
          )}
        </div>
      )}
    />
  );
}
