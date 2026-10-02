import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormInput, ProFormPassword, ProFormSelect } from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const schema = z
  .object({
    email: z.email('请输入有效邮箱'),
    password: z.string().min(6, '密码至少 6 位'),
    confirmPassword: z.string().min(1, '请再次输入密码'),
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
  const feedback = useExampleFeedback();
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
      description="展示必填、邮箱格式、密码一致性和条件必填，错误会显示在对应字段下方。"
      instructions="直接提交查看错误；填写有效邮箱和两次相同的密码后重试。切换为手机联系，手机号会显示且必填；切换回来再选手机，号码仍会保留。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={(values) =>
          feedback.setResult([
            { label: '邮箱', value: values.email },
            { label: '登录密码', value: '已设置' },
            { label: '确认密码', value: '一致' },
            { label: '联系方式', value: values.contactMethod === 'phone' ? '手机' : '邮件' },
            ...(values.contactMethod === 'phone' ? [{ label: '手机号', value: values.phone }] : []),
          ])
        }
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
          description="至少 6 位，请使用示例密码。"
          fieldProps={{ placeholder: '请输入至少 6 位密码', autoComplete: 'new-password' }}
        />
        <ProFormPassword
          control={form.control}
          name="confirmPassword"
          label="确认密码"
          required
          fieldProps={{ placeholder: '请再次输入密码', autoComplete: 'new-password' }}
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
            description="手机联系时必须填写以 1 开头的 11 位号码。"
            fieldProps={{ type: 'tel', placeholder: '请输入 11 位手机号', autoComplete: 'tel' }}
          />
        )}
      </ProForm>
    </ExampleCard>
  );
}
