import { cn } from 'cn';
import { useId, type ReactNode } from 'react';
import {
  useController,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';

import { useProFormContext } from './context';

export type ProFormFieldProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = Pick<UseControllerProps<T, N, O>, 'name' | 'control'> & {
  label?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export type ProFormControlProps = {
  id: string;
  disabled: boolean;
  'aria-invalid': boolean;
  'aria-required': boolean;
  'aria-describedby'?: string;
};

export type ProFormFieldRender<T extends FieldValues, N extends FieldPath<T>> = {
  field: ControllerRenderProps<T, N>;
  fieldState: ControllerFieldState;
  controlProps: ProFormControlProps;
  labelId: string;
};

export type ProFormFieldComponentProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldProps<T, N, O> & {
  labelMode?: 'control' | 'group';
  render: (props: ProFormFieldRender<T, N>) => ReactNode;
};

export type ProFormFieldPropsWithControl<
  P,
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldProps<T, N, O> & {
  fieldProps?: Omit<
    P,
    | 'name'
    | 'value'
    | 'defaultValue'
    | 'checked'
    | 'defaultChecked'
    | 'indeterminate'
    | 'inputRef'
    | 'onChange'
    | 'onValueChange'
    | 'onCheckedChange'
    | 'onBlur'
    | 'ref'
    | 'id'
    | 'disabled'
    | 'aria-invalid'
    | 'aria-required'
    | 'aria-describedby'
  >;
};

export function ProFormField<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({
  name,
  control,
  label,
  description,
  required = false,
  disabled = false,
  className,
  render,
  labelMode = 'control',
}: ProFormFieldComponentProps<T, N, O>) {
  const id = useId();
  const { layout, disabled: formDisabled } = useProFormContext();
  const { field, fieldState } = useController<T, N, O>({ name, control });
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;
  const labelId = `${id}-label`;
  const LabelComponent = labelMode === 'group' ? FieldTitle : FieldLabel;
  const describedBy =
    [description ? descriptionId : undefined, fieldState.error ? errorId : undefined]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <Field
      data-invalid={fieldState.invalid}
      data-disabled={disabled || formDisabled}
      className={cn(
        'min-w-0',
        layout === 'horizontal' && 'md:flex-row md:items-start',
        layout === 'inline' && 'w-full sm:w-56',
        className,
      )}
    >
      {label && (
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
          labelId,
          controlProps: {
            id,
            disabled: disabled || formDisabled,
            'aria-invalid': fieldState.invalid,
            'aria-required': required,
            'aria-describedby': describedBy,
          },
        })}
        {description && <FieldDescription id={descriptionId}>{description}</FieldDescription>}
        {fieldState.error && <FieldError id={errorId} errors={[fieldState.error]} />}
      </FieldContent>
    </Field>
  );
}
