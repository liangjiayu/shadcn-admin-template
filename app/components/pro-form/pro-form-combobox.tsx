import { cn } from 'cn';
import type { ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

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
import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormComboboxOption = ProFormOption & { label: string };

export type ProFormComboboxProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<
  Omit<ComponentProps<typeof ComboboxInput>, 'children' | 'render' | 'showClear' | 'showTrigger'>,
  T,
  N,
  O
> & {
  options: ProFormComboboxOption[];
  placeholder?: string;
  multiple?: boolean;
  allowClear?: boolean;
  emptyText?: string;
};

export function ProFormCombobox<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({
  options,
  placeholder = '请选择',
  multiple = false,
  allowClear = true,
  emptyText = '暂无匹配选项',
  fieldProps,
  ...props
}: ProFormComboboxProps<T, N, O>) {
  const anchor = useComboboxAnchor();

  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => {
        const selected = multiple
          ? ((field.value ?? []) as (string | number)[])
              .map((value) => options.find((option) => option.value === value))
              .filter((option): option is ProFormComboboxOption => option !== undefined)
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
              <ComboboxChips ref={anchor} className="w-full">
                <ComboboxValue>
                  {selected.map((option) => (
                    <ComboboxChip key={optionKey(option)}>{option.label}</ComboboxChip>
                  ))}
                </ComboboxValue>
                <ComboboxChipsInput {...inputProps} />
              </ComboboxChips>
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
