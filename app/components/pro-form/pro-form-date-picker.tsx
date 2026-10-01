import { format, isValid, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { CalendarIcon, X } from 'lucide-react';
import { useState, type ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/utils';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormDatePickerProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof Button>, 'type' | 'children' | 'render' | 'nativeButton'>,
  T,
  N,
  O
> & {
  placeholder?: string;
  calendarProps?: Omit<
    ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'required'
  >;
};

export function ProFormDatePicker<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({
  fieldProps,
  calendarProps,
  placeholder = '请选择日期',
  ...props
}: ProFormDatePickerProps<T, N, O>) {
  const [open, setOpen] = useState(false);
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => {
        const parsed = typeof field.value === 'string' ? parseISO(field.value) : undefined;
        const selected = parsed && isValid(parsed) ? parsed : undefined;
        return (
          <div className="flex min-w-0 gap-1">
            <Popover
              open={open && !controlProps.disabled}
              onOpenChange={(next) => {
                setOpen(next);
                if (!next) field.onBlur();
              }}
            >
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    {...fieldProps}
                    {...controlProps}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    type="button"
                    className={cn(
                      'min-w-0 flex-1 justify-start font-normal',
                      !selected && 'text-muted-foreground',
                      fieldProps?.className,
                    )}
                  />
                }
              >
                <CalendarIcon />
                {selected ? format(selected, 'yyyy-MM-dd') : placeholder}
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar
                  locale={zhCN}
                  {...calendarProps}
                  mode="single"
                  selected={selected}
                  defaultMonth={selected ?? calendarProps?.defaultMonth}
                  onSelect={(date) => {
                    field.onChange(date ? format(date, 'yyyy-MM-dd') : null);
                    field.onBlur();
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
            {selected && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="清空日期"
                disabled={controlProps.disabled}
                onClick={() => {
                  field.onChange(null);
                  field.onBlur();
                }}
              >
                <X />
              </Button>
            )}
          </div>
        );
      }}
    />
  );
}
