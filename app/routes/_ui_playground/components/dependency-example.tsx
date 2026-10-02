import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import {
  ProForm,
  ProFormGroup,
  ProFormInput,
  ProFormSelect,
  ProFormSwitch,
} from '@/components/pro-form';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const teams = {
  design: [
    { label: '张三', value: 'zhang' },
    { label: '李四', value: 'li' },
  ],
  development: [
    { label: '王五', value: 'wang' },
    { label: '赵六', value: 'zhao' },
  ],
};
const schema = z
  .object({
    team: z.enum(['design', 'development']),
    owner: z
      .string()
      .nullable()
      .refine((value) => value !== null, '请选择负责人'),
    invoice: z.boolean(),
    invoiceTitle: z.string(),
  })
  .superRefine((values, ctx) => {
    if (values.invoice && !values.invoiceTitle.trim()) {
      ctx.addIssue({ code: 'custom', path: ['invoiceTitle'], message: '请输入发票抬头' });
    }
  });
type Values = z.infer<typeof schema>;

export function DependencyExample() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { team: 'design', owner: 'zhang', invoice: false, invoiceTitle: '' },
  });
  const [team, owner, invoice] = useWatch({
    control: form.control,
    name: ['team', 'owner', 'invoice'],
  });

  useEffect(() => {
    if (owner !== null && !teams[team].some((option) => option.value === owner)) {
      form.setValue('owner', null, {
        shouldDirty: true,
        shouldValidate: form.formState.isSubmitted,
      });
    }
  }, [team, owner, form]);

  return (
    <ExampleCard
      title="字段联动"
      description="团队决定负责人选项，切换团队清空原负责人。开启发票后显示必填抬头，隐藏字段保留输入，提交时按条件过滤。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={({ invoiceTitle, ...values }) =>
          feedback.setResult({
            ...values,
            ...(values.invoice ? { invoiceTitle: invoiceTitle.trim() } : {}),
          })
        }
      >
        <ProFormGroup columns={2}>
          <ProFormSelect
            control={form.control}
            name="team"
            label="团队"
            allowClear={false}
            options={[
              { label: '设计团队', value: 'design' },
              { label: '开发团队', value: 'development' },
            ]}
          />
          <ProFormSelect
            control={form.control}
            name="owner"
            label="负责人"
            required
            options={teams[team]}
          />
        </ProFormGroup>
        <ProFormSwitch control={form.control} name="invoice" label="需要发票" />
        {invoice && (
          <ProFormInput
            control={form.control}
            name="invoiceTitle"
            label="发票抬头"
            required
            fieldProps={{ placeholder: '请输入公司或个人名称' }}
          />
        )}
      </ProForm>
    </ExampleCard>
  );
}
