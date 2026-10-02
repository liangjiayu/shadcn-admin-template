import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormField, ProFormInput, ProFormSwitch } from '@/components/pro-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const schema = z.object({
  name: z.string().trim().min(1, '请输入姓名'),
  code: z.string().regex(/^\d+$/, '请输入数字编号').transform(Number),
  score: z.number().min(0).max(10),
  enabled: z.boolean(),
});
type Values = z.output<typeof schema>;

export function StateExample() {
  const [disabled, setDisabled] = useState(false);
  const [fail, setFail] = useState(false);
  const feedback = useExampleFeedback();
  const [attempts, setAttempts] = useState(0);
  const form = useForm<z.input<typeof schema>, unknown, Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '张三', code: '1001', score: 5, enabled: false },
  });
  return (
    <ExampleCard
      title="表单状态与扩展"
      description="展示默认内容、快捷填充、整表禁用和自定义评分；保存时显示等待状态，失败后可重试。"
      instructions="点击「填入李四」再重置，姓名会恢复为张三。开启模拟失败后保存，内容会保留；关闭模拟失败再次保存，等待后查看结果。"
      result={feedback.result}
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
        {...feedback.formProps}
        form={form}
        disabled={disabled}
        onFinish={async (values) => {
          setAttempts((count) => count + 1);
          await new Promise((resolve) => setTimeout(resolve, 900));
          if (fail) {
            form.setError('root.submit', { message: '模拟保存失败，关闭模拟失败后可重新提交。' });
            throw new Error('Simulated failure');
          }
          feedback.setResult([
            { label: '姓名', value: values.name },
            { label: '编号', value: values.code },
            { label: '评分', value: `${values.score} / 10` },
            { label: '功能状态', value: values.enabled ? '已开启' : '已关闭' },
          ]);
        }}
        submitter={{
          submitText: '保存',
          render: ({ submitting, disabled: locked, reset }) => (
            <>
              <Button
                type="button"
                variant="outline"
                disabled={locked}
                onClick={() => {
                  reset();
                  feedback.clearResult();
                }}
              >
                重置
              </Button>
              <Button type="submit" disabled={locked}>
                {submitting && <LoaderCircle className="animate-spin" aria-hidden="true" />}
                保存
              </Button>
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
          description="编号只能填写数字。"
          fieldProps={{ inputMode: 'numeric' }}
        />
        <ProFormField
          control={form.control}
          name="score"
          label="评分（自定义控件）"
          description="拖动或使用方向键调整评分；自定义控件也会随表单一起禁用。"
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
