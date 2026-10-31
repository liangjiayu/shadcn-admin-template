import { useState, type ReactNode } from 'react';
import { useForm, type DefaultValues, type FieldValues, type UseFormReturn } from 'react-hook-form';

import { ProForm } from '@/components/pro-form';
import { Button } from '@/components/ui/button';

export function FormResult({ value }: { value: unknown }) {
  return (
    <div role="status" className="min-w-0 space-y-2">
      <div className="text-muted-foreground">{value === null ? '尚未提交' : '提交结果'}</div>
      {value !== null && (
        <pre className="max-h-80 overflow-auto rounded-lg bg-muted p-3 text-xs">
          {JSON.stringify(value, null, 2)}
        </pre>
      )}
    </div>
  );
}

export function FormActions({ submitting = false }: { submitting?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button type="submit">{submitting ? '正在提交…' : '提交'}</Button>
      <Button type="reset" variant="outline">
        重置
      </Button>
    </div>
  );
}

/** 为独立字段用例提供表单上下文、提交结果及重置行为。 */
export function FormExample<T extends FieldValues>({
  defaultValues,
  children,
}: {
  defaultValues: DefaultValues<T>;
  children: ReactNode | ((form: UseFormReturn<T>) => ReactNode);
}) {
  const form = useForm<T>({ defaultValues });
  const [result, setResult] = useState<unknown>(null);

  return (
    <div className="max-w-xl space-y-5">
      <ProForm
        form={form}
        onSubmit={(values) => setResult(values)}
        onReset={() => {
          form.reset();
          setResult(null);
        }}
      >
        {typeof children === 'function' ? children(form) : children}
        <FormActions submitting={form.formState.isSubmitting} />
      </ProForm>
      <FormResult value={result} />
    </div>
  );
}
