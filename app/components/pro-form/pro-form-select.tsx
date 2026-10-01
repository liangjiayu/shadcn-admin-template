import { cn } from 'cn';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { optionKey, type ProFormOption } from './options';
import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormSelectProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof SelectTrigger>, 'children' | 'render' | 'nativeButton'>,
  T,
  N,
  O
> & {
  options: ProFormOption[];
  placeholder?: string;
  multiple?: boolean;
  allowClear?: boolean;
};

export function ProFormSelect<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({
  options,
  placeholder = '请选择',
  multiple = false,
  allowClear = true,
  fieldProps,
  ...props
}: ProFormSelectProps<T, N, O>) {
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => (
        <div className="flex min-w-0 gap-1">
          <Select
            name={field.name}
            multiple={multiple}
            items={options}
            value={field.value ?? (multiple ? [] : null)}
            onValueChange={field.onChange}
            disabled={controlProps.disabled}
          >
            <SelectTrigger
              {...fieldProps}
              {...controlProps}
              ref={field.ref}
              onBlur={field.onBlur}
              className={cn('w-full min-w-0 flex-1', fieldProps?.className)}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={optionKey(option)} value={option.value} disabled={option.disabled}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {allowClear && (multiple ? field.value?.length > 0 : field.value != null) && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="清空选择"
              disabled={controlProps.disabled}
              onClick={() => {
                field.onChange(multiple ? [] : null);
                field.onBlur();
              }}
            >
              <X />
            </Button>
          )}
        </div>
      )}
    />
  );
}
