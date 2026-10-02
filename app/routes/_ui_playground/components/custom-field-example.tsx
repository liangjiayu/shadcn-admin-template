import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormField, ProFormGroup, ProFormInput } from '@/components/pro-form';
import { Input } from '@/components/ui/input';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const schema = z.object({
  code: z
    .string()
    .regex(/^\d+$/, '编号只能包含数字')
    .transform(Number)
    .pipe(
      z
        .number()
        .int()
        .min(1, '编号必须大于 0')
        .max(Number.MAX_SAFE_INTEGER, '编号超出安全整数范围'),
    ),
  score: z.number().min(0).max(10),
});

export function CustomFieldExample() {
  const feedback = useExampleFeedback();
  const form = useForm<z.input<typeof schema>, unknown, z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { code: '1001', score: 5 },
  });

  return (
    <ExampleCard
      title="自定义控件与类型转换"
      description="ProFormField 绑定原生范围控件，统一处理标签、校验与禁用状态。编号输入为字符串，经过 Zod 转换后以数字提交。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={(values) => feedback.setResult(values)}
      >
        <ProFormGroup columns={2}>
          <ProFormInput
            control={form.control}
            name="code"
            label="编号"
            required
            description="只接受正整数，例如 1001。"
            fieldProps={{ inputMode: 'numeric' }}
          />
          <ProFormField
            control={form.control}
            name="score"
            label="评分"
            description="范围 0～10，支持拖动和方向键。"
            render={({ field, controlProps }) => (
              <div className="flex items-center gap-3">
                <Input
                  {...field}
                  {...controlProps}
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  onChange={(event) => field.onChange(event.target.valueAsNumber)}
                />
                <output htmlFor={controlProps.id} className="shrink-0 text-sm tabular-nums">
                  {field.value} / 10
                </output>
              </div>
            )}
          />
        </ProFormGroup>
      </ProForm>
    </ExampleCard>
  );
}
