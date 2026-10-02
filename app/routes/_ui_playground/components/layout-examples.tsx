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
import { displayOptions, displayValue, useExampleFeedback } from './use-example-feedback';

const layouts: { label: string; value: ProFormLayout }[] = [
  { label: '纵向', value: 'vertical' },
  { label: '横向', value: 'horizontal' },
  { label: '行内', value: 'inline' },
];
type Values = { keyword: string; status: string | null; profile: { name: string; email: string } };
const statusOptions = [
  { label: '全部', value: 'all' },
  { label: '启用', value: 'enabled' },
];

export function LayoutExamples() {
  const [layout, setLayout] = useState<ProFormLayout>('vertical');
  const feedback = useExampleFeedback();
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
      description="比较标签在上方、左侧和行内排列的效果，分组字段在宽屏显示双列、小屏显示单列。"
      instructions="先修改关键词或联系人，再切换三种布局，已输入的内容会保留。提交查看结果，重置恢复初始联系人。"
      result={feedback.result}
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
      <ProForm
        {...feedback.formProps}
        form={form}
        layout={layout}
        onFinish={(values) =>
          feedback.setResult([
            { label: '关键词', value: displayValue(values.keyword) },
            { label: '状态', value: displayOptions(values.status, statusOptions) },
            { label: '联系人姓名', value: displayValue(values.profile.name) },
            { label: '联系人邮箱', value: displayValue(values.profile.email) },
          ])
        }
      >
        <ProFormInput
          control={form.control}
          name="keyword"
          label="关键词"
          fieldProps={{ placeholder: '搜索名称' }}
        />
        <ProFormSelect control={form.control} name="status" label="状态" options={statusOptions} />
        <ProFormGroup
          title="联系人"
          description="相关字段放在同一分组，方便一起查看和填写。"
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
