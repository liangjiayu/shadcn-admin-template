import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  ProForm,
  ProFormGroup,
  ProFormInput,
  ProFormSelect,
  type ProFormLayout,
} from '@/components/pro-form';
import { Button } from '@/components/ui/button';

import { ExampleCard } from './example-card';

const layouts: { label: string; value: ProFormLayout }[] = [
  { label: '纵向', value: 'vertical' },
  { label: '横向', value: 'horizontal' },
  { label: '行内', value: 'inline' },
];
type Values = { keyword: string; status: string | null; profile: { name: string; email: string } };

export function LayoutExamples() {
  const [layout, setLayout] = useState<ProFormLayout>('vertical');
  const [result, setResult] = useState<Values>();
  const form = useForm<Values>({
    defaultValues: {
      keyword: '',
      status: null,
      profile: { name: '张三', email: 'demo@example.com' },
    },
  });
  return (
    <ExampleCard
      title="布局与分组"
      description="切换布局查看标签位置；多列分组在小屏自动变为单列，字段支持嵌套路径。"
      result={result}
      code={`<ProForm form={form} layout="horizontal" onFinish={save}>
  <ProFormInput control={form.control} name="keyword" label="关键词" />
  <ProFormGroup title="联系人" columns={2}>
    <ProFormInput control={form.control} name="profile.name" label="姓名" />
    <ProFormInput control={form.control} name="profile.email" label="邮箱" />
  </ProFormGroup>
</ProForm>`}
    >
      <div role="group" aria-label="表单布局" className="flex flex-wrap gap-2">
        {layouts.map((item) => (
          <Button
            key={item.value}
            type="button"
            variant={layout === item.value ? 'default' : 'outline'}
            aria-pressed={layout === item.value}
            onClick={() => setLayout(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <ProForm form={form} layout={layout} onFinish={(values) => setResult(values)}>
        <ProFormInput
          control={form.control}
          name="keyword"
          label="关键词"
          fieldProps={{ placeholder: '搜索名称' }}
        />
        <ProFormSelect
          control={form.control}
          name="status"
          label="状态"
          options={[
            { label: '全部', value: 'all' },
            { label: '启用', value: 'enabled' },
          ]}
        />
        <ProFormGroup
          title="联系人"
          description="双列分组，使用 profile.name 等嵌套字段路径。"
          columns={2}
          className="w-full"
        >
          <ProFormInput control={form.control} name="profile.name" label="姓名" />
          <ProFormInput
            control={form.control}
            name="profile.email"
            label="邮箱"
            fieldProps={{ type: 'email' }}
          />
        </ProFormGroup>
      </ProForm>
    </ExampleCard>
  );
}
