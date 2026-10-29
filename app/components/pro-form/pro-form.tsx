import { cn } from 'cn';
import { useMemo, useRef, type ComponentProps } from 'react';
import {
  FormProvider,
  type FieldValues,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

import { ProFormContext } from './context';
import type { ProFormLayout } from './types';

export type ProFormProps<T extends FieldValues, TOutput extends FieldValues = T> = Omit<
  ComponentProps<'form'>,
  'onSubmit' | 'onInvalid'
> & {
  form: UseFormReturn<T, any, TOutput>;
  onSubmit: SubmitHandler<TOutput>;
  onInvalid?: SubmitErrorHandler<T>;
  layout?: ProFormLayout;
  disabled?: boolean;
};

export function ProForm<T extends FieldValues, TOutput extends FieldValues = T>({
  form,
  onSubmit,
  onInvalid,
  layout = 'vertical',
  disabled = false,
  children,
  className,
  noValidate = true,
  ...props
}: ProFormProps<T, TOutput>) {
  const lock = useRef(false);
  const submitting = form.formState.isSubmitting;
  const locked = disabled || submitting || form.formState.disabled;
  const context = useMemo(() => ({ layout, disabled: locked }), [layout, locked]);

  return (
    <FormProvider {...form}>
      <ProFormContext.Provider value={context}>
        <form
          {...props}
          noValidate={noValidate}
          aria-busy={submitting}
          className={className}
          onSubmit={async (event) => {
            event.preventDefault();
            if (locked || lock.current) return;
            lock.current = true;
            try {
              await form.handleSubmit(onSubmit, onInvalid)(event);
            } finally {
              lock.current = false;
            }
          }}
        >
          <fieldset
            disabled={locked}
            className={cn(
              'flex min-w-0 flex-col gap-5 border-0 p-0',
              layout === 'inline' && 'flex-row flex-wrap items-start gap-4',
            )}
          >
            {children}
          </fieldset>
        </form>
      </ProFormContext.Provider>
    </FormProvider>
  );
}
