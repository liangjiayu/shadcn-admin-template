import { useForm } from 'react-hook-form';

import { ProForm, ProFormCombobox, ProFormSelect } from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { displayOptions, useExampleFeedback } from './use-example-feedback';

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
const peopleOptions = [
  { label: '张三', value: 0 },
  { label: '李四', value: 1 },
  { label: '王五（禁用）', value: 2, disabled: true },
];
type Values = { status: string | null; tags: string[]; assignee: number | null; skills: string[] };

export function SelectionExample() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    defaultValues: { status: 'todo', tags: [], assignee: null, skills: [] },
  });

  return (
    <ExampleCard
      title="选择与搜索"
      description="展示单选、多选、可搜索的选择器，以及清空、禁用选项和无匹配结果的状态。"
      instructions="选择多个标签，搜索并选择负责人。输入不存在的姓名可查看无匹配提示；点击清空按钮或移除技能标签，再提交核对选择。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={(values) =>
          feedback.setResult([
            { label: '状态', value: displayOptions(values.status, statusOptions) },
            { label: '标签', value: displayOptions(values.tags, tagOptions) },
            { label: '负责人', value: displayOptions(values.assignee, peopleOptions) },
            { label: '技能', value: displayOptions(values.skills, tagOptions) },
          ])
        }
      >
        <ProFormSelect
          control={form.control}
          name="status"
          label="状态（单选）"
          description="可清空当前选择，已归档选项不可选。"
          options={statusOptions}
        />
        <ProFormSelect
          control={form.control}
          name="tags"
          label="标签（多选）"
          description="可以同时选择多个标签，也可以一键清空。"
          options={tagOptions}
          multiple
        />
        <ProFormCombobox
          control={form.control}
          name="assignee"
          label="负责人（搜索单选）"
          placeholder="输入姓名搜索"
          description="输入姓名筛选，王五不可选。"
          emptyText="没有找到这位负责人，请换个姓名试试。"
          options={peopleOptions}
        />
        <ProFormCombobox
          control={form.control}
          name="skills"
          label="技能（搜索多选）"
          placeholder="搜索并添加技能"
          description="搜索后添加技能，点击标签的移除按钮取消选择。"
          emptyText="没有匹配的技能。"
          multiple
          options={tagOptions}
        />
      </ProForm>
    </ExampleCard>
  );
}
