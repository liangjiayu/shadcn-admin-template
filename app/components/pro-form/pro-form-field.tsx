import { cn } from 'cn';
import { useId, type ReactNode } from 'react';
import { useController, type FieldValues } from 'react-hook-form';

import { Field, FieldContent, FieldError, FieldLabel, FieldTitle } from '@/components/ui/field';

import { useProFormContext } from './context';
import type { ProFormFieldProps, ProFormFieldRender } from './types';

export type ProFormFieldComponentProps<T extends FieldValues = FieldValues> =
  ProFormFieldProps<T> & {
    labelMode?: 'control' | 'group';
    render: (props: ProFormFieldRender<T>) => ReactNode;
  };

export function ProFormField<T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  shouldUnregister,
  label,
  description,
  required = false,
  disabled = false,
  className,
  render,
  labelMode = 'control',
}: ProFormFieldComponentProps<T>) {
  const id = useId();
  const { layout, disabled: formDisabled } = useProFormContext();
  const { field, fieldState } = useController<T>({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
  });
  const isDisabled = disabled || formDisabled || !!field.disabled;
  const hasLabel = label != null && label !== false;
  const hasDescription = description != null && description !== false;
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;
  const labelId = `${id}-label`;
  const LabelComponent = labelMode === 'group' ? FieldTitle : FieldLabel;
  const describedBy =
    [hasDescription ? descriptionId : undefined, fieldState.error?.message ? errorId : undefined]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <Field
      data-invalid={fieldState.invalid}
      data-disabled={isDisabled}
      className={cn(
        'min-w-0',
        layout === 'horizontal' && 'md:flex-row md:items-start',
        layout === 'inline' && 'w-full sm:w-56',
        className,
      )}
    >
      {hasLabel && (
        <LabelComponent
          id={labelId}
          {...(labelMode === 'control' ? { htmlFor: id } : {})}
          className={cn(layout === 'horizontal' && 'md:w-28 md:shrink-0 md:pt-2')}
        >
          {label}
          {required && (
            <span className="text-destructive" aria-hidden="true">
              *
            </span>
          )}
        </LabelComponent>
      )}
      <FieldContent className="min-w-0">
        {render({
          field,
          fieldState,
          labelId: hasLabel ? labelId : undefined,
          controlProps: {
            id,
            disabled: isDisabled,
            'aria-invalid': fieldState.invalid,
            'aria-required': required,
            'aria-describedby': describedBy,
          },
        })}
        {hasDescription && (
          <div id={descriptionId} className="text-sm text-muted-foreground">
            {description}
          </div>
        )}
        {fieldState.error && <FieldError id={errorId} errors={[fieldState.error]} />}
      </FieldContent>
    </Field>
  );
}
