import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import {
  ProForm,
  ProFormField,
  ProFormGroup,
  ProFormInput,
  ProFormSwitch,
  type ProFormLayout,
} from '@/components/pro-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ExampleCard } from '../../components/example-card';
import { FormActions, FormExample, FormResult } from '../../components/pro-form-example';

const profileSchema = z.object({
  name: z.string().trim().min(2, '姓名至少 2 个字符'),
  email: z.email('请输入有效的邮箱地址'),
});

function BasicExample() {
  const [result, setResult] = useState<unknown>(null);
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: '', email: '' },
  });

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
        <ProFormInput
          control={form.control}
          name="name"
          label="姓名"
          required
          description="至少 2 个字符，提交时去除首尾空格。"
          fieldProps={{ placeholder: '请输入姓名' }}
        />
        <ProFormInput
          control={form.control}
          name="email"
          label="邮箱"
          required
          fieldProps={{ type: 'email', placeholder: 'name@example.com' }}
        />
        <FormActions />
      </ProForm>
      <FormResult value={result} />
    </div>
  );
}

function LayoutExample() {
  const [layout, setLayout] = useState<ProFormLayout>('vertical');
  const [result, setResult] = useState<unknown>(null);
  const form = useForm({ defaultValues: { keyword: '', owner: '' } });

  return (
    <div className="space-y-5">
      <div role="group" aria-label="表单布局" className="flex flex-wrap gap-2">
        {(
          [
            ['vertical', '垂直'],
            ['horizontal', '水平'],
            ['inline', '行内'],
          ] as const
        ).map(([value, label]) => (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={layout === value ? 'default' : 'outline'}
            aria-pressed={layout === value}
            onClick={() => setLayout(value)}
          >
            {label}
          </Button>
        ))}
      </div>
      <ProForm
        form={form}
        layout={layout}
        onSubmit={(values) => setResult(values)}
        onReset={() => {
          form.reset();
          setResult(null);
        }}
      >
        <ProFormInput name="keyword" label="关键词" fieldProps={{ placeholder: '搜索名称' }} />
        <ProFormInput name="owner" label="负责人" fieldProps={{ placeholder: '搜索负责人' }} />
        <FormActions />
      </ProForm>
      <FormResult value={result} />
    </div>
  );
}

function GroupExample() {
  const [columns, setColumns] = useState<1 | 2 | 3>(2);

  return (
    <div className="space-y-5">
      <div role="group" aria-label="分组列数" className="flex flex-wrap gap-2">
        {([1, 2, 3] as const).map((value) => (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={columns === value ? 'default' : 'outline'}
            aria-pressed={columns === value}
            onClick={() => setColumns(value)}
          >
            {value} 列
          </Button>
        ))}
      </div>
      <FormExample defaultValues={{ profile: { name: '', email: '', phone: '' }, region: '华东' }}>
        <ProFormGroup
          title="基本资料"
          description="通过嵌套字段路径组织资料，窄屏下自动堆叠为一列。"
          columns={columns}
        >
          <ProFormInput name="profile.name" label="姓名" />
          <ProFormInput name="profile.email" label="邮箱" />
          <ProFormInput name="profile.phone" label="电话" />
        </ProFormGroup>
        <ProFormGroup title="所属区域" description="禁用整个分组，仍保留字段提交值。" disabled>
          <ProFormInput name="region" label="区域" />
        </ProFormGroup>
      </FormExample>
    </div>
  );
}

function CustomFieldExample() {
  return (
    <FormExample defaultValues={{ code: '' }}>
      {(form) => (
        <ProFormField
          control={form.control}
          name="code"
          label="项目编码"
          required
          description="输入自动转为大写，要求 3–8 位英文字母。"
          rules={{
            required: '请输入项目编码',
            pattern: { value: /^[A-Z]{3,8}$/, message: '请输入 3–8 位英文字母' },
          }}
          render={({ field, controlProps }) => (
            <Input
              {...field}
              {...controlProps}
              value={typeof field.value === 'string' ? field.value : ''}
              placeholder="例如 DEMO"
              onChange={(event) => field.onChange(event.target.value.toUpperCase())}
            />
          )}
        />
      )}
    </FormExample>
  );
}

function LinkedExample() {
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const form = useForm({ defaultValues: { notify: false, email: '' } });
  const notify = useWatch({ control: form.control, name: 'notify' });
  const submitting = form.formState.isSubmitting;

  return (
    <div className="max-w-xl space-y-5">
      <Button
        type="button"
        variant="outline"
        aria-pressed={disabled}
        disabled={submitting}
        onClick={() => setDisabled((value) => !value)}
      >
        {disabled ? '启用整个表单' : '禁用整个表单'}
      </Button>
      <ProForm
        form={form}
        disabled={disabled}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setResult(values);
        }}
        onReset={() => {
          form.reset();
          setResult(null);
        }}
      >
        <ProFormSwitch
          name="notify"
          label="接收邮件通知"
          description="开启后显示并校验邮箱；字段卸载后，从提交数据中移除。"
        />
        {notify && (
          <ProFormInput
            name="email"
            label="接收邮箱"
            required
            shouldUnregister
            rules={{
              required: '请输入接收邮箱',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入有效的邮箱地址' },
            }}
            fieldProps={{ type: 'email', placeholder: 'name@example.com' }}
          />
        )}
        <FormActions submitting={submitting} />
      </ProForm>
      <FormResult value={result} />
    </div>
  );
}

export default function ProFormExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法与校验"
        description="ProForm 提供表单上下文，结合 Zod 校验；提交查看结果，重置恢复初始值。"
      >
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="layout"
        title="表单布局"
        description="切换 vertical、horizontal、inline 布局，已填写的字段值会保留；水平布局在窄屏下自动堆叠。"
      >
        <LayoutExample />
      </ExampleCard>
      <ExampleCard
        id="group"
        title="ProFormGroup 字段分组"
        description="使用标题、说明和列数组织相关字段，可统一禁用分组。"
      >
        <GroupExample />
      </ExampleCard>
      <ExampleCard
        id="custom-field"
        title="ProFormField 自定义字段"
        description="通过 render 为自定义控件绑定字段值、事件、校验及无障碍属性。"
      >
        <CustomFieldExample />
      </ExampleCard>
      <ExampleCard
        id="linked"
        title="条件字段、禁用与异步提交"
        description="通过 useWatch 联动字段和 shouldUnregister 移除卸载字段。模拟提交耗时 1 秒，期间自动禁用表单并防止重复提交。"
      >
        <LinkedExample />
      </ExampleCard>
    </div>
  );
}
