import { cn } from 'cn';
import { X } from 'lucide-react';
import type { ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox';

import { optionKey, type ProFormOption } from './options';
import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormComboboxOption = Omit<ProFormOption, 'label'> & { label: string };

export type ProFormComboboxProps<T extends FieldValues = FieldValues> =
  ProFormFieldPropsWithControl<
    Omit<ComponentProps<typeof ComboboxChipsInput>, 'placeholder'>,
    T
  > & {
    options: readonly ProFormComboboxOption[];
    multiple?: boolean;
    placeholder?: string;
    allowClear?: boolean;
    emptyText?: string;
  };

export function ProFormCombobox<T extends FieldValues = FieldValues>({
  options,
  placeholder = '请选择',
  multiple = false,
  allowClear = true,
  emptyText = '暂无匹配选项',
  fieldProps,
  ...props
}: ProFormComboboxProps<T>) {
  const anchor = useComboboxAnchor();

  return (
    <ProFormField<T>
      {...props}
      render={({ field, controlProps }) => {
        const selected = multiple
          ? ((field.value ?? []) as (string | number)[])
              .map((value) => options.find((option) => option.value === value))
              .filter((option) => option !== undefined)
          : [];
        const inputProps = {
          ...fieldProps,
          ...controlProps,
          ref: field.ref,
          onBlur: field.onBlur,
          placeholder,
        };

        return (
          <Combobox
            items={options}
            name={field.name}
            multiple={multiple}
            disabled={controlProps.disabled}
            value={
              multiple ? selected : (options.find((option) => option.value === field.value) ?? null)
            }
            itemToStringLabel={(option: ProFormComboboxOption) => option.label}
            itemToStringValue={optionKey}
            isItemEqualToValue={(option, value) => option.value === value.value}
            onValueChange={(value) => {
              field.onChange(
                Array.isArray(value) ? value.map((option) => option.value) : (value?.value ?? null),
              );
            }}
          >
            {multiple ? (
              <div className="flex min-w-0 gap-1">
                <ComboboxChips ref={anchor} className="min-w-0 flex-1">
                  <ComboboxValue>
                    {selected.map((option) => (
                      <ComboboxChip key={optionKey(option)}>{option.label}</ComboboxChip>
                    ))}
                  </ComboboxValue>
                  <ComboboxChipsInput {...inputProps} />
                </ComboboxChips>
                {allowClear && selected.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="清空选择"
                    disabled={controlProps.disabled}
                    onClick={() => {
                      field.onChange([]);
                      field.onBlur();
                    }}
                  >
                    <X />
                  </Button>
                )}
              </div>
            ) : (
              <ComboboxInput
                {...inputProps}
                showClear={allowClear}
                className={cn('w-full', fieldProps?.className)}
              />
            )}
            <ComboboxContent anchor={multiple ? anchor : undefined}>
              <ComboboxEmpty>{emptyText}</ComboboxEmpty>
              <ComboboxList>
                {(option: ProFormComboboxOption) => (
                  <ComboboxItem key={optionKey(option)} value={option} disabled={option.disabled}>
                    {option.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        );
      }}
    />
  );
}
