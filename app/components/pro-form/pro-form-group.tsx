import { cn } from 'cn';
import { useMemo, type ComponentProps, type ReactNode } from 'react';

import { ProFormContext, useProFormContext } from './context';

export type ProFormGroupProps = Omit<ComponentProps<'fieldset'>, 'title'> & {
  title?: ReactNode;
  description?: ReactNode;
  columns?: 1 | 2 | 3;
};

export function ProFormGroup({
  title,
  description,
  columns = 1,
  children,
  className,
  disabled = false,
  ...props
}: ProFormGroupProps) {
  const parent = useProFormContext();
  const isDisabled = parent.disabled || disabled;
  const context = useMemo(() => ({ ...parent, disabled: isDisabled }), [parent, isDisabled]);

  return (
    <ProFormContext.Provider value={context}>
      <fieldset {...props} disabled={isDisabled} className={cn('min-w-0 space-y-4', className)}>
        {title && <legend className="mb-2 text-sm font-medium">{title}</legend>}
        {description && <div className="text-sm text-muted-foreground">{description}</div>}
        <div
          className={cn(
            'grid min-w-0 grid-cols-1 gap-5',
            columns === 2 && 'md:grid-cols-2',
            columns === 3 && 'md:grid-cols-3',
          )}
        >
          {children}
        </div>
      </fieldset>
    </ProFormContext.Provider>
  );
}
