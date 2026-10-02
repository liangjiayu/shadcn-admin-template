import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  ProForm,
  ProFormCheckbox,
  ProFormGroup,
  ProFormInput,
  ProFormNumber,
  ProFormPassword,
} from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const schema = z
  .object({
    name: z.string().trim().min(1, '请输入姓名'),
    email: z.email('请输入有效邮箱'),
    age: z
      .number('请输入年龄')
      .int('年龄必须为整数')
      .min(18, '年龄不能小于 18')
      .max(100, '年龄不能大于 100')
      .nullable()
      .refine((value) => value !== null, '请输入年龄'),
    password: z.string().min(6, '密码至少 6 位'),
    confirmPassword: z.string().min(1, '请再次输入密码'),
    agreed: z.boolean().refine(Boolean, '请同意使用条款'),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ['confirmPassword'],
    message: '两次密码输入不一致',
  });
type Values = z.infer<typeof schema>;

export function ValidationExample() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      agreed: false,
    },
  });

  return (
    <ExampleCard
      title="字段校验"
      description="失焦与提交时校验必填、格式、数值范围和密码一致性，错误显示在对应字段下方。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={({ password: _password, confirmPassword: _confirmPassword, ...values }) =>
          feedback.setResult({ ...values, password: '已设置', confirmPassword: '一致' })
        }
      >
        <ProFormGroup columns={3}>
          <ProFormInput
            control={form.control}
            name="name"
            label="姓名"
            required
            fieldProps={{ placeholder: '请输入姓名' }}
          />
          <ProFormInput
            control={form.control}
            name="email"
            label="邮箱"
            required
            fieldProps={{ type: 'email', placeholder: 'name@example.com' }}
          />
          <ProFormNumber
            control={form.control}
            name="age"
            label="年龄"
            required
            description="18～100 之间的整数。"
          />
        </ProFormGroup>
        <ProFormGroup columns={2}>
          <ProFormPassword
            control={form.control}
            name="password"
            label="密码"
            required
            description="至少 6 位。"
            fieldProps={{ autoComplete: 'new-password' }}
          />
          <ProFormPassword
            control={form.control}
            name="confirmPassword"
            label="确认密码"
            required
            fieldProps={{ autoComplete: 'new-password' }}
          />
        </ProFormGroup>
        <ProFormCheckbox control={form.control} name="agreed" label="同意使用条款" required />
      </ProForm>
    </ExampleCard>
  );
}
