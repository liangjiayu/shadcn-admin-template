import { cn } from 'cn';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Slider } from '@/components/ui/slider';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormSliderProps<T extends FieldValues = FieldValues> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof Slider>, 'onValueCommitted'>,
  T
> & {
  showValue?: boolean;
};

export function ProFormSlider<T extends FieldValues = FieldValues>({
  fieldProps,
  showValue = true,
  ...props
}: ProFormSliderProps<T>) {
  return (
    <ProFormField<T>
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
            aria-labelledby={labelId}
            ref={(element) => {
              // RHF 需要聚焦可交互的 range input，而不是外层容器。
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
