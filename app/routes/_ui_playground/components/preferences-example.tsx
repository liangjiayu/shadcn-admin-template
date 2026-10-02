import { useForm } from 'react-hook-form';

import {
  ProForm,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormDatePicker,
  ProFormGroup,
  ProFormRadioGroup,
  ProFormSlider,
  ProFormSwitch,
} from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { displayOptions, displayValue, useExampleFeedback } from './use-example-feedback';

const priorityOptions = [
  { label: '低', value: 0 },
  { label: '中', value: 1 },
  { label: '高', value: 2 },
];
const channelOptions = [
  { label: '邮件', value: 'email' },
  { label: '站内信', value: 'message' },
  { label: '短信（禁用）', value: 'sms', disabled: true },
];
type Values = {
  deadline: string | null;
  priority: number | null;
  channels: string[];
  agreed: boolean;
  enabled: boolean;
  progress: number[];
  range: number[];
};

export function PreferencesExample() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    defaultValues: {
      deadline: null,
      priority: 0,
      channels: ['email'],
      agreed: false,
      enabled: false,
      progress: [30],
      range: [20, 80],
    },
  });

  return (
    <ExampleCard
      title="日期与偏好设置"
      description="展示日历、单选组、复选框、开关，以及单值和范围滑块，适合配置日期与偏好。"
      instructions="选择并清空日期，调整通知渠道与开关，拖动滑块或使用方向键改变数值。提交查看结果，重置恢复初始设置。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={(values) =>
          feedback.setResult([
            { label: '截止日期', value: displayValue(values.deadline) },
            { label: '优先级', value: displayOptions(values.priority, priorityOptions) },
            { label: '通知渠道', value: displayOptions(values.channels, channelOptions) },
            { label: '接收通知', value: values.agreed ? '同意' : '未同意' },
            { label: '自动提醒', value: values.enabled ? '已开启' : '已关闭' },
            { label: '完成进度', value: `${values.progress[0]}%` },
            { label: '提醒范围', value: `${values.range[0]}% ～ ${values.range[1]}%` },
          ])
        }
      >
        <ProFormGroup columns={2}>
          <ProFormDatePicker
            control={form.control}
            name="deadline"
            label="截止日期"
            description="打开日历选择日期，也可以清空。"
          />
          <ProFormRadioGroup
            control={form.control}
            name="priority"
            label="优先级"
            description="同时只能选择一个优先级。"
            options={priorityOptions}
          />
          <ProFormCheckboxGroup
            control={form.control}
            name="channels"
            label="通知渠道"
            description="支持多选，短信渠道暂不可用。"
            options={channelOptions}
          />
          <ProFormCheckbox
            control={form.control}
            name="agreed"
            label="同意接收通知"
            description="复选框可以单独勾选或取消。"
          />
          <ProFormSwitch
            control={form.control}
            name="enabled"
            label="自动提醒"
            description="点击开关切换开启和关闭状态。"
          />
        </ProFormGroup>
        <ProFormGroup title="进度与范围" columns={2}>
          <ProFormSlider
            control={form.control}
            name="progress"
            label="完成进度（%）"
            description="拖动滑块调整进度，范围为 0～100。"
            fieldProps={{ min: 0, max: 100, step: 1 }}
          />
          <ProFormSlider
            control={form.control}
            name="range"
            label="提醒范围（%）"
            description="两个滑块分别控制起点和终点，每次调整 5。"
            fieldProps={{ min: 0, max: 100, step: 5 }}
          />
        </ProFormGroup>
      </ProForm>
    </ExampleCard>
  );
}
