import { cn } from 'cn';
import { LoaderCircle } from 'lucide-react';
import { useImperativeHandle, useMemo, useRef, type ComponentProps, type ReactNode } from 'react';
import {
  FormProvider,
  type FieldValues,
  type FieldPath,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

import { Button } from '@/components/ui/button';

import { ProFormContext, type ProFormLayout } from './context';

export type ProFormSubmitter = {
  submitText?: ReactNode;
  resetText?: ReactNode;
  submitButtonProps?: Omit<
    ComponentProps<typeof Button>,
    'type' | 'children' | 'render' | 'nativeButton'
  >;
  resetButtonProps?: Omit<
    ComponentProps<typeof Button>,
    'type' | 'children' | 'render' | 'nativeButton'
  >;
  render?: (
    actions: { submit: () => void; reset: () => void; submitting: boolean; disabled: boolean },
    buttons: ReactNode,
  ) => ReactNode;
};

export type ProFormProps<
  T extends FieldValues,
  TContext = any,
  TOutput extends FieldValues = T,
> = Omit<ComponentProps<'form'>, 'onSubmit' | 'onReset'> & {
  form: UseFormReturn<T, TContext, TOutput>;
  onFinish: SubmitHandler<TOutput>;
  onFinishFailed?: SubmitErrorHandler<T>;
  layout?: ProFormLayout;
  disabled?: boolean;
  submitter?: false | ProFormSubmitter;
};

export function ProForm<T extends FieldValues, TContext = any, TOutput extends FieldValues = T>({
  form,
  onFinish,
  onFinishFailed,
  layout = 'vertical',
  disabled = false,
  submitter = {},
  children,
  className,
  noValidate = true,
  ref,
  ...props
}: ProFormProps<T, TContext, TOutput>) {
  const lock = useRef(false);
  const element = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => element.current!);
  const submitting = form.formState.isSubmitting;
  const locked = disabled || submitting;
  const context = useMemo(() => ({ layout, disabled: locked }), [layout, locked]);
  const rootErrors = form.formState.errors.root;
  const rootEntry = Object.values(rootErrors ?? {}).find(
    (error) => error && typeof error === 'object' && 'message' in error,
  );
  const rootMessage =
    rootErrors?.message ??
    (rootEntry && typeof rootEntry === 'object' ? rootEntry.message : undefined);

  const reset = () => {
    if (!disabled && !lock.current) form.reset();
  };

  const submit = () => element.current?.requestSubmit();
  const config = submitter === false ? {} : submitter;
  const buttons = (
    <>
      <Button
        variant="outline"
        {...config.resetButtonProps}
        type="reset"
        disabled={locked || config.resetButtonProps?.disabled}
      >
        {config.resetText ?? '重置'}
      </Button>
      <Button
        {...config.submitButtonProps}
        type="submit"
        disabled={locked || config.submitButtonProps?.disabled}
      >
        {submitting && <LoaderCircle className="animate-spin" aria-hidden="true" />}
        {config.submitText ?? '提交'}
      </Button>
    </>
  );

  return (
    <FormProvider {...form}>
      <ProFormContext.Provider value={context}>
        <form
          {...props}
          ref={element}
          noValidate={noValidate}
          aria-busy={submitting}
          className={cn('space-y-5', className)}
          onReset={(event) => {
            event.preventDefault();
            reset();
          }}
          onSubmit={async (event) => {
            event.preventDefault();
            if (disabled || lock.current) return;
            lock.current = true;
            form.clearErrors('root');
            try {
              await form.handleSubmit(async (values, submitEvent) => {
                try {
                  await onFinish(values, submitEvent);
                } catch {
                  if (!form.getFieldState('root' as FieldPath<T>).error) {
                    form.setError('root.submit', {
                      type: 'submit',
                      message: '提交失败，请稍后重试。',
                    });
                  }
                }
              }, onFinishFailed)(event);
            } finally {
              lock.current = false;
            }
          }}
        >
          <fieldset disabled={locked} className="min-w-0 border-0 p-0">
            <div
              className={cn(
                'flex min-w-0 flex-col gap-5',
                layout === 'inline' && 'flex-row flex-wrap items-start gap-4',
              )}
            >
              {children}
            </div>
          </fieldset>
          {rootMessage && (
            <p role="alert" className="text-sm text-destructive">
              {rootMessage}
            </p>
          )}
          {submitter !== false && (
            <div className="flex flex-wrap items-center gap-2">
              {config.render
                ? config.render({ submit, reset, submitting, disabled: locked }, buttons)
                : buttons}
            </div>
          )}
        </form>
      </ProFormContext.Provider>
    </FormProvider>
  );
}
