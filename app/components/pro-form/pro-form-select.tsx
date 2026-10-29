import { cn } from 'cn';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { optionKey, type ProFormOption } from './options';
import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormSelectProps<T extends FieldValues = FieldValues> = ProFormFieldPropsWithControl<
  ComponentProps<typeof SelectTrigger>,
  T
> & {
  options: readonly ProFormOption[];
  multiple?: boolean;
  placeholder?: string;
  allowClear?: boolean;
};

export function ProFormSelect<T extends FieldValues = FieldValues>({
  options,
  placeholder = '请选择',
  multiple = false,
  allowClear = true,
  fieldProps,
  ...props
}: ProFormSelectProps<T>) {
  return (
    <ProFormField<T>
      {...props}
      render={({ field, controlProps }) => (
        <div className="flex min-w-0 gap-1">
          <Select
            name={field.name}
            multiple={multiple}
            items={options}
            itemToStringValue={(value: string | number) => optionKey({ value })}
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
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    key={optionKey(option)}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
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
