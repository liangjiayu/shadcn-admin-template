import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  ProForm,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormDatePicker,
  ProFormGroup,
  ProFormInput,
  ProFormNumber,
  ProFormPassword,
  ProFormRadioGroup,
  ProFormSelect,
  ProFormSwitch,
  ProFormTextarea,
} from '@/components/pro-form';

import { ExampleCard } from './example-card';

const schema = z.object({
  name: z.string().min(1, '请输入名称'),
  password: z.string(),
  description: z.string(),
  amount: z.number().min(0, '数量不能小于 0').nullable(),
  status: z.string().nullable(),
  tags: z.array(z.string()),
  priority: z.number().nullable(),
  channels: z.array(z.string()),
  agreed: z.boolean(),
  enabled: z.boolean(),
  deadline: z.string().nullable(),
});
type Values = z.infer<typeof schema>;
const statusOptions = [
  { label: '待办', value: 'todo' },
  { label: '进行中', value: 'progress' },
  { label: '已完成', value: 'done' },
  { label: '已归档（禁用）', value: 'archived', disabled: true },
];
const tagOptions = [
  { label: '设计', value: 'design' },
  { label: '开发', value: 'development' },
  { label: '测试', value: 'test' },
];

export function CommonFields() {
  const [result, setResult] = useState<Values>();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      password: '',
      description: '',
      amount: 0,
      status: 'todo',
      tags: [],
      priority: 0,
      channels: ['email'],
      agreed: false,
      enabled: false,
      deadline: null,
    },
  });
  return (
    <ExampleCard
      title="常用字段"
      description="统一的标签、说明、校验与绑定；数字、布尔值和选项保持原始类型。"
      result={result}
      code={`const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues });

<ProForm form={form} onFinish={save}>
  <ProFormGroup title="基本信息" columns={2}>
    <ProFormInput control={form.control} name="name" label="名称" required />
    <ProFormNumber control={form.control} name="amount" label="数量" />
    <ProFormSelect control={form.control} name="tags" label="标签" multiple options={options} />
    <ProFormDatePicker control={form.control} name="deadline" label="截止日期" />
  </ProFormGroup>
</ProForm>`}
    >
      <ProForm form={form} onFinish={(values) => setResult(values)}>
        <ProFormGroup title="基本信息" columns={2}>
          <ProFormInput
            control={form.control}
            name="name"
            label="名称"
            required
            fieldProps={{ placeholder: '请输入名称' }}
          />
          <ProFormPassword
            control={form.control}
            name="password"
            label="密码"
            fieldProps={{ placeholder: '示例密码', autoComplete: 'new-password' }}
          />
          <ProFormNumber
            control={form.control}
            name="amount"
            label="数量"
            description="可以输入 0，清空后为 null。"
            fieldProps={{ min: 0 }}
          />
          <ProFormDatePicker
            control={form.control}
            name="deadline"
            label="截止日期"
            description="提交 yyyy-MM-dd 格式的本地日期。"
          />
          <ProFormSelect
            control={form.control}
            name="status"
            label="状态"
            options={statusOptions}
          />
          <ProFormSelect
            control={form.control}
            name="tags"
            label="标签（多选）"
            multiple
            options={tagOptions}
          />
        </ProFormGroup>
        <ProFormTextarea
          control={form.control}
          name="description"
          label="描述"
          fieldProps={{ rows: 3, maxLength: 500, placeholder: '补充说明' }}
        />
        <ProFormGroup title="偏好设置" columns={2}>
          <ProFormRadioGroup
            control={form.control}
            name="priority"
            label="优先级"
            options={[
              { label: '低', value: 0 },
              { label: '中', value: 1 },
              { label: '高', value: 2 },
            ]}
          />
          <ProFormCheckboxGroup
            control={form.control}
            name="channels"
            label="通知渠道"
            options={[
              { label: '邮件', value: 'email' },
              { label: '站内信', value: 'message' },
              { label: '短信（禁用）', value: 'sms', disabled: true },
            ]}
          />
          <ProFormCheckbox control={form.control} name="agreed" label="同意接收通知" />
          <ProFormSwitch control={form.control} name="enabled" label="启用自动提醒" />
        </ProFormGroup>
      </ProForm>
    </ExampleCard>
  );
}
