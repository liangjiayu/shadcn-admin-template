import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import {
  ProForm,
  ProFormInput,
  ProFormNumber,
  ProFormPassword,
  ProFormTextarea,
} from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { displayValue, useExampleFeedback } from './use-example-feedback';

const schema = z.object({
  name: z.string().trim().min(1, '请输入名称'),
  password: z.string(),
  description: z.string().max(500, '说明最多 500 字'),
  amount: z.number().min(0, '数量不能小于 0').nullable(),
  account: z.string(),
});
type Values = z.infer<typeof schema>;

export function CommonFields() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', password: '', description: '', amount: 0, account: '演示账号' },
  });
  const description = useWatch({ control: form.control, name: 'description' });

  return (
    <ExampleCard
      title="文本与数字输入"
      description="展示输入框、多行文本和数字输入的默认、必填、禁用与错误样式，密码支持显示和隐藏。"
      instructions="直接提交可查看名称的必填错误；输入名称后再次提交。清空数量、切换密码可见性，或输入多行说明，观察不同状态。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={(values) =>
          feedback.setResult([
            { label: '名称', value: values.name },
            { label: '密码', value: values.password ? '已设置' : '未设置' },
            { label: '数量', value: displayValue(values.amount) },
            { label: '账号', value: values.account },
            { label: '补充说明', value: displayValue(values.description) },
          ])
        }
      >
        <ProFormInput
          control={form.control}
          name="name"
          label="名称"
          required
          description="必填项，提交时会检查是否已填写。"
          fieldProps={{ placeholder: '请输入名称' }}
        />
        <ProFormPassword
          control={form.control}
          name="password"
          label="密码"
          description="点击眼睛图标切换显示，提交摘要不会展示密码。"
          fieldProps={{ placeholder: '请输入示例密码', autoComplete: 'new-password' }}
        />
        <ProFormNumber
          control={form.control}
          name="amount"
          label="数量"
          description="可填写 0 或正数，也可以清空；负数会显示校验错误。"
          fieldProps={{ min: 0, placeholder: '请输入数量' }}
        />
        <ProFormInput
          control={form.control}
          name="account"
          label="账号（禁用）"
          disabled
          description="此字段无法编辑，提交时仍保留账号。"
        />
        <ProFormTextarea
          control={form.control}
          name="description"
          label="补充说明"
          description={`最多 500 字，已输入 ${description.length} 字。`}
          fieldProps={{ rows: 3, maxLength: 500, placeholder: '输入多行说明，最多 500 字' }}
        />
      </ProForm>
    </ExampleCard>
  );
}
