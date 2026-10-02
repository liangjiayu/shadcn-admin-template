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
import { useExampleFeedback } from './use-example-feedback';

const layouts: { label: string; value: ProFormLayout }[] = [
  { label: '纵向', value: 'vertical' },
  { label: '横向', value: 'horizontal' },
  { label: '行内', value: 'inline' },
];
type Values = {
  keyword: string;
  status: string | null;
  profile: { name: string; email: string; phone: string };
};

export function LayoutExamples() {
  const [layout, setLayout] = useState<ProFormLayout>('vertical');
  const [columns, setColumns] = useState<1 | 2 | 3>(2);
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    defaultValues: {
      keyword: '',
      status: null,
      profile: { name: '张三', email: 'demo@example.com', phone: '' },
    },
  });

  return (
    <ExampleCard
      title="布局与分组"
      description="支持纵向、横向、行内布局，以及一至三列分组。小屏自动使用单列，切换布局保留已填内容。"
      result={feedback.result}
    >
      <div className="flex flex-wrap gap-6">
        <div role="group" aria-label="表单布局" className="flex flex-wrap gap-2">
          {layouts.map(({ label, value }) => (
            <Button
              key={value}
              type="button"
              variant={layout === value ? 'default' : 'outline'}
              aria-pressed={layout === value}
              onClick={() => setLayout(value)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div role="group" aria-label="分组列数" className="flex flex-wrap gap-2">
          {([1, 2, 3] as const).map((value) => (
            <Button
              key={value}
              type="button"
              variant={columns === value ? 'default' : 'outline'}
              aria-pressed={columns === value}
              onClick={() => setColumns(value)}
            >
              {value} 列
            </Button>
          ))}
        </div>
      </div>
      <ProForm
        {...feedback.formProps}
        form={form}
        layout={layout}
        onFinish={(values) => feedback.setResult(values)}
      >
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
            { label: '启用', value: 'enabled' },
            { label: '停用', value: 'disabled' },
          ]}
        />
        <ProFormGroup
          title="联系人"
          description="分组字段使用嵌套路径，提交后得到 profile 对象。"
          columns={columns}
          className="w-full"
        >
          <ProFormInput control={form.control} name="profile.name" label="姓名" />
          <ProFormInput
            control={form.control}
            name="profile.email"
            label="邮箱"
            fieldProps={{ type: 'email' }}
          />
          <ProFormInput
            control={form.control}
            name="profile.phone"
            label="电话"
            fieldProps={{ type: 'tel' }}
          />
        </ProFormGroup>
      </ProForm>
    </ExampleCard>
  );
}
