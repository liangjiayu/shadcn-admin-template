import { useForm } from 'react-hook-form';

import {
  ProForm,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormCombobox,
  ProFormDatePicker,
  ProFormGroup,
  ProFormInput,
  ProFormNumber,
  ProFormPassword,
  ProFormRadioGroup,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormTextarea,
} from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const statusOptions = [
  { label: '待处理', value: 'pending' },
  { label: '进行中', value: 'active' },
  { label: '已完成', value: 'completed' },
  { label: '已归档（禁用）', value: 'archived', disabled: true },
];
const tagOptions = [
  { label: '设计', value: 'design' },
  { label: '开发', value: 'development' },
  { label: '测试', value: 'testing' },
];
const peopleOptions = [
  { label: '张三', value: 0 },
  { label: '李四', value: 1 },
  { label: '王五（禁用）', value: 2, disabled: true },
];
type Values = {
  title: string;
  password: string;
  quantity: number | null;
  description: string;
  account: string;
  status: string | null;
  tags: string[];
  owner: number | null;
  skills: string[];
  date: string | null;
  priority: number | null;
  channels: string[];
  agreed: boolean;
  enabled: boolean;
  progress: number[];
  range: number[];
};

export function BasicExample() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    defaultValues: {
      title: '',
      password: '',
      quantity: 0,
      description: '',
      account: 'demo',
      status: 'pending',
      tags: [],
      owner: 0,
      skills: [],
      date: null,
      priority: 0,
      channels: ['email'],
      agreed: false,
      enabled: true,
      progress: [30],
      range: [20, 80],
    },
  });

  return (
    <ExampleCard
      title="基础控件"
      description="各类控件的基础用法，包含单选、多选、搜索、清空和禁用选项。提交结果展示字段值及其类型，重置恢复默认值。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={({ password, ...values }) =>
          feedback.setResult({ ...values, password: password ? '已设置' : '未设置' })
        }
      >
        <ProFormGroup title="输入" columns={3}>
          <ProFormInput
            control={form.control}
            name="title"
            label="文本输入"
            fieldProps={{ placeholder: '请输入标题' }}
          />
          <ProFormPassword
            control={form.control}
            name="password"
            label="密码"
            fieldProps={{ placeholder: '请输入示例密码', autoComplete: 'new-password' }}
          />
          <ProFormNumber
            control={form.control}
            name="quantity"
            label="数字输入"
            description="清空后为 null，0 为有效数值。"
            fieldProps={{ min: 0 }}
          />
          <ProFormTextarea
            control={form.control}
            name="description"
            label="多行文本"
            className="md:col-span-2"
            fieldProps={{ placeholder: '请输入说明', rows: 3 }}
          />
          <ProFormInput
            control={form.control}
            name="account"
            label="禁用输入"
            disabled
            description="禁用字段仍保留提交值。"
          />
        </ProFormGroup>
        <ProFormGroup title="选择" columns={3}>
          <ProFormSelect
            control={form.control}
            name="status"
            label="下拉单选"
            options={statusOptions}
          />
          <ProFormSelect
            control={form.control}
            name="tags"
            label="下拉多选"
            options={tagOptions}
            multiple
          />
          <ProFormDatePicker
            control={form.control}
            name="date"
            label="日期"
            description="日期值为 yyyy-MM-dd 字符串。"
          />
          <ProFormCombobox
            control={form.control}
            name="owner"
            label="搜索单选"
            options={peopleOptions}
            description="选项使用数字值，支持选择 0。"
          />
          <ProFormCombobox
            control={form.control}
            name="skills"
            label="搜索多选"
            options={tagOptions}
            multiple
          />
          <ProFormRadioGroup
            control={form.control}
            name="priority"
            label="单选组"
            options={[
              { label: '低', value: 0 },
              { label: '中', value: 1 },
              { label: '高', value: 2 },
            ]}
          />
        </ProFormGroup>
        <ProFormGroup title="开关与多选" columns={3}>
          <ProFormCheckboxGroup
            control={form.control}
            name="channels"
            label="复选框组"
            options={[
              { label: '邮件', value: 'email' },
              { label: '站内信', value: 'message' },
              { label: '短信（禁用）', value: 'sms', disabled: true },
            ]}
          />
          <ProFormCheckbox control={form.control} name="agreed" label="同意接收通知" />
          <ProFormSwitch control={form.control} name="enabled" label="自动提醒" />
        </ProFormGroup>
        <ProFormGroup title="滑块" columns={2}>
          <ProFormSlider
            control={form.control}
            name="progress"
            label="进度"
            description="单值使用数组，例如 [30]。"
            fieldProps={{ min: 0, max: 100 }}
          />
          <ProFormSlider
            control={form.control}
            name="range"
            label="范围"
            description="双值数组表示区间，每次调整 5。"
            fieldProps={{ min: 0, max: 100, step: 5 }}
          />
        </ProFormGroup>
      </ProForm>
    </ExampleCard>
  );
}
