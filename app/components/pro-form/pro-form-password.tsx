import { cn } from 'cn';
import { Eye, EyeOff } from 'lucide-react';
import { useState, type ComponentProps } from 'react';
import type { FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ProFormField } from './pro-form-field';
import type { ProFormFieldPropsWithControl } from './types';

export type ProFormPasswordProps<T extends FieldValues = FieldValues> =
  ProFormFieldPropsWithControl<Omit<ComponentProps<typeof Input>, 'type'>, T>;

export function ProFormPassword<T extends FieldValues = FieldValues>({
  fieldProps,
  ...props
}: ProFormPasswordProps<T>) {
  const [visible, setVisible] = useState(false);
  return (
    <ProFormField<T>
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
