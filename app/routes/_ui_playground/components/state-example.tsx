import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormGroup, ProFormInput, ProFormSwitch } from '@/components/pro-form';
import { Button } from '@/components/ui/button';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const schema = z.object({
  name: z.string().trim().min(1, '请输入姓名'),
  email: z.email('请输入有效邮箱'),
  enabled: z.boolean(),
});
type Values = z.infer<typeof schema>;

export function StateExample() {
  const [disabled, setDisabled] = useState(false);
  const [fail, setFail] = useState(false);
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '张三', email: 'zhang@example.com', enabled: true },
  });

  return (
    <ExampleCard
      title="回填与提交状态"
      description="通过 reset 回填编辑数据并更新重置基准。保存模拟异步请求，期间锁定表单；失败保留输入并支持重试。"
      result={feedback.result}
    >
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          aria-pressed={disabled}
          disabled={form.formState.isSubmitting}
          onClick={() => setDisabled((value) => !value)}
        >
          {disabled ? '启用表单' : '禁用表单'}
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-pressed={fail}
          disabled={form.formState.isSubmitting}
          onClick={() => setFail((value) => !value)}
        >
          {fail ? '关闭模拟失败' : '模拟提交失败'}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={disabled || form.formState.isSubmitting}
          onClick={() => {
            form.reset({ name: '李四', email: 'li@example.com', enabled: false });
            feedback.clearResult();
          }}
        >
          回填李四
        </Button>
      </div>
      <ProForm
        {...feedback.formProps}
        form={form}
        disabled={disabled}
        onFinish={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (fail) {
            form.setError('root.submit', { message: '模拟保存失败，请关闭模拟失败后重新保存。' });
            throw new Error('Simulated save failure');
          }
          feedback.setResult(values);
        }}
        submitter={{
          submitText: '保存',
          render: ({ submitting }, buttons) => (
            <>
              {buttons}
              <span role="status" className="text-xs text-muted-foreground">
                {submitting
                  ? '正在保存…'
                  : form.formState.isDirty
                    ? '有未保存的修改'
                    : '当前为默认数据'}
              </span>
            </>
          ),
        }}
      >
        <ProFormGroup columns={2}>
          <ProFormInput control={form.control} name="name" label="姓名" required />
          <ProFormInput
            control={form.control}
            name="email"
            label="邮箱"
            required
            fieldProps={{ type: 'email' }}
          />
        </ProFormGroup>
        <ProFormSwitch control={form.control} name="enabled" label="启用账号" />
      </ProForm>
    </ExampleCard>
  );
}
