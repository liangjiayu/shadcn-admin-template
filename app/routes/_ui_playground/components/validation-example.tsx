import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormInput, ProFormPassword, ProFormSelect } from '@/components/pro-form';

import { ExampleCard } from './example-card';

const schema = z
  .object({
    email: z.email('请输入有效邮箱'),
    password: z.string().min(6, '密码至少 6 位'),
    confirmPassword: z.string(),
    contactMethod: z.enum(['email', 'phone']),
    phone: z.string(),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword)
      ctx.addIssue({ code: 'custom', path: ['confirmPassword'], message: '两次密码输入不一致' });
    if (values.contactMethod === 'phone' && !/^1\d{10}$/.test(values.phone))
      ctx.addIssue({ code: 'custom', path: ['phone'], message: '请输入 11 位手机号' });
  });
type Values = z.infer<typeof schema>;

export function ValidationExample() {
  const [result, setResult] = useState<Values>();
  const [invalidCount, setInvalidCount] = useState(0);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      contactMethod: 'email',
      phone: '',
    },
  });
  const contactMethod = useWatch({ control: form.control, name: 'contactMethod' });
  return (
    <ExampleCard
      title="校验与联动"
      description="提交触发 Zod 校验；更改联系方式显示手机号，切换后保留已输入的值。"
      result={result}
      code={`const method = useWatch({ control: form.control, name: 'contactMethod' });

<ProForm form={form} onFinish={save} onFinishFailed={handleErrors}>
  <ProFormInput name="email" label="邮箱" required />
  <ProFormSelect name="contactMethod" label="联系方式" options={options} />
  {method === 'phone' && <ProFormInput name="phone" label="手机号" required />}
</ProForm>
// 跨字段校验使用 schema.superRefine，并指定错误字段 path。`}
    >
      <ProForm
        form={form}
        onFinish={(values) => setResult(values)}
        onFinishFailed={() => setInvalidCount((count) => count + 1)}
      >
        <ProFormInput
          control={form.control}
          name="email"
          label="邮箱"
          required
          fieldProps={{ type: 'email', placeholder: 'name@example.com', autoComplete: 'email' }}
        />
        <ProFormPassword
          control={form.control}
          name="password"
          label="登录密码"
          required
          fieldProps={{ autoComplete: 'new-password' }}
        />
        <ProFormPassword
          control={form.control}
          name="confirmPassword"
          label="确认密码"
          required
          fieldProps={{ autoComplete: 'new-password' }}
        />
        <ProFormSelect
          control={form.control}
          name="contactMethod"
          label="联系方式"
          options={[
            { label: '邮件', value: 'email' },
            { label: '手机', value: 'phone' },
          ]}
          allowClear={false}
        />
        {contactMethod === 'phone' && (
          <ProFormInput
            control={form.control}
            name="phone"
            label="手机号"
            required
            fieldProps={{ type: 'tel', autoComplete: 'tel' }}
          />
        )}
      </ProForm>
      <p className="text-xs text-muted-foreground">校验失败次数：{invalidCount}</p>
    </ExampleCard>
  );
}
