import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormField, ProFormInput, ProFormSwitch } from '@/components/pro-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ExampleCard } from './example-card';

const schema = z.object({
  name: z.string().min(1, '请输入姓名'),
  code: z.string().regex(/^\d+$/, '请输入数字编号').transform(Number),
  score: z.number().min(0).max(10),
  enabled: z.boolean(),
});
type Values = z.output<typeof schema>;

export function StateExample() {
  const [disabled, setDisabled] = useState(false);
  const [fail, setFail] = useState(false);
  const [result, setResult] = useState<Values>();
  const [attempts, setAttempts] = useState(0);
  const form = useForm<z.input<typeof schema>, unknown, Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '张三', code: '1001', score: 5, enabled: false },
  });
  return (
    <ExampleCard
      title="状态与扩展"
      description="演示默认值、程序化赋值、禁用与异步提交；编号经过 Zod 转换，提交为数字。"
      result={result}
      code={`const form = useForm<z.input<typeof schema>, unknown, z.output<typeof schema>>({
  resolver: zodResolver(schema), defaultValues,
});

<ProForm form={form} disabled={disabled} onFinish={save}
  submitter={{ submitText: '保存', render: (actions, buttons) => <>{buttons}</> }}>
  <ProFormField name="score" label="评分" render={({ field, controlProps }) => (
    <Input {...field} {...controlProps} type="range" min={0} max={10}
      onChange={e => field.onChange(e.target.valueAsNumber)} />
  )} />
</ProForm>
// form.setValue、form.reset、form.setError 保留原生 RHF API。`}
    >
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          aria-pressed={disabled}
          disabled={form.formState.isSubmitting}
          onClick={() => setDisabled(!disabled)}
        >
          {disabled ? '启用表单' : '禁用表单'}
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-pressed={fail}
          disabled={form.formState.isSubmitting}
          onClick={() => setFail(!fail)}
        >
          {fail ? '关闭模拟失败' : '模拟提交失败'}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={disabled || form.formState.isSubmitting}
          onClick={() => form.setValue('name', '李四', { shouldDirty: true, shouldValidate: true })}
        >
          填入李四
        </Button>
      </div>
      <ProForm
        form={form}
        disabled={disabled}
        onFinish={async (values) => {
          setAttempts((count) => count + 1);
          await new Promise((resolve) => setTimeout(resolve, 900));
          if (fail) {
            form.setError('root.submit', { message: '模拟保存失败，关闭模拟失败后可重新提交。' });
            throw new Error('Simulated failure');
          }
          setResult(values);
        }}
        submitter={{
          submitText: '保存',
          render: ({ submitting }, buttons) => (
            <>
              {buttons}
              <span className="text-xs text-muted-foreground">
                {submitting ? '正在保存，请稍候…' : `已发起 ${attempts} 次保存`}
              </span>
            </>
          ),
        }}
      >
        <ProFormInput control={form.control} name="name" label="姓名" required />
        <ProFormInput
          control={form.control}
          name="code"
          label="编号"
          required
          description="输入是字符串，提交结果为数字。"
          fieldProps={{ inputMode: 'numeric' }}
        />
        <ProFormField
          control={form.control}
          name="score"
          label="评分（自定义字段）"
          description="通过 render 接入自定义控件，仍共享标签、错误与禁用状态。"
          render={({ field, controlProps }) => (
            <div className="flex items-center gap-3">
              <Input
                {...field}
                {...controlProps}
                type="range"
                min={0}
                max={10}
                onChange={(event) => field.onChange(event.target.valueAsNumber)}
              />
              <output htmlFor={controlProps.id} className="text-sm tabular-nums">
                {field.value}
              </output>
            </div>
          )}
        />
        <ProFormSwitch control={form.control} name="enabled" label="启用功能" />
      </ProForm>
    </ExampleCard>
  );
}
