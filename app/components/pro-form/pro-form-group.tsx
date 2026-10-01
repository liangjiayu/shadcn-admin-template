import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/utils';

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
  ...props
}: ProFormGroupProps) {
  return (
    <fieldset {...props} className={cn('min-w-0 space-y-4', className)}>
      {title && <legend className="mb-2 text-sm font-medium">{title}</legend>}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
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
  );
}
