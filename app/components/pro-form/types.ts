import type { ReactNode } from 'react';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

export type ProFormLayout = 'vertical' | 'horizontal' | 'inline';

export type ProFormFieldProps<T extends FieldValues = FieldValues> = Pick<
  UseControllerProps<T, FieldPath<T>, any>,
  'name' | 'control' | 'rules' | 'defaultValue' | 'shouldUnregister'
> & {
  label?: ReactNode;
  description?: ReactNode;
  /** 只控制必填标记；校验规则通过 rules 或 resolver 配置。 */
  required?: boolean;
  /** 仅禁用交互，保留字段的提交值。 */
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

export type ProFormFieldRender<T extends FieldValues = FieldValues> = {
  field: ControllerRenderProps<T>;
  fieldState: ControllerFieldState;
  controlProps: ProFormControlProps;
  labelId?: string;
};

/** 排除由字段绑定和控件封装管理的属性，避免出现两个状态来源。 */
export type ProFormFieldPropsWithControl<
  P,
  T extends FieldValues = FieldValues,
> = ProFormFieldProps<T> & {
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
    | 'required'
    | 'children'
    | 'className'
    | 'render'
    | 'nativeButton'
    | 'aria-disabled'
    | 'aria-invalid'
    | 'aria-required'
    | 'aria-describedby'
    | 'aria-labelledby'
  > & { className?: string };
};
