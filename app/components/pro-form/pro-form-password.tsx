import { cn } from 'cn';
import { Eye, EyeOff } from 'lucide-react';
import { useState, type ComponentProps } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ProFormField, type ProFormFieldPropsWithControl } from './pro-form-field';

export type ProFormPasswordProps<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
> = ProFormFieldPropsWithControl<Omit<ComponentProps<typeof Input>, 'type'>, T, N, O>;

export function ProFormPassword<
  T extends FieldValues = FieldValues,
  N extends FieldPath<T> = FieldPath<T>,
  O = T,
>({ fieldProps, ...props }: ProFormPasswordProps<T, N, O>) {
  const [visible, setVisible] = useState(false);
  return (
    <ProFormField
      {...props}
      render={({ field, controlProps }) => (
        <div className="relative">
          <Input
            {...fieldProps}
            {...field}
            {...controlProps}
            type={visible ? 'text' : 'password'}
            value={field.value ?? ''}
            className={cn('pr-9', fieldProps?.className)}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0"
            disabled={controlProps.disabled}
            aria-controls={controlProps.id}
            aria-pressed={visible}
            aria-label={visible ? '隐藏密码' : '显示密码'}
            onClick={() => setVisible(!visible)}
          >
            {visible ? <EyeOff /> : <Eye />}
          </Button>
        </div>
      )}
    />
  );
}
