import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash2 } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { ProForm, ProFormGroup, ProFormInput, ProFormNumber } from '@/components/pro-form';
import { Button } from '@/components/ui/button';

import { ExampleCard } from './example-card';
import { useExampleFeedback } from './use-example-feedback';

const schema = z.object({
  items: z
    .array(
      z.object({
        name: z.string().trim().min(1, '请输入项目名称'),
        quantity: z
          .number('请输入数量')
          .int('数量必须为整数')
          .min(1, '数量至少为 1')
          .nullable()
          .refine((value) => value !== null, '请输入数量'),
      }),
    )
    .min(1),
});
type Values = z.infer<typeof schema>;

export function DynamicFieldsExample() {
  const feedback = useExampleFeedback();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { items: [{ name: '设计稿', quantity: 1 }] },
  });
  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'items' });

  return (
    <ExampleCard
      title="动态字段列表"
      description="添加和删除重复字段，每行独立校验，至少保留一项。提交得到数组，重置恢复初始列表。"
      result={feedback.result}
    >
      <ProForm
        {...feedback.formProps}
        form={form}
        onFinish={(values) => feedback.setResult(values)}
      >
        {fields.map((item, index) => (
          <div key={item.id} className="flex items-start gap-3 rounded-lg border p-4">
            <ProFormGroup title={`项目 ${index + 1}`} columns={2} className="min-w-0 flex-1">
              <ProFormInput
                control={form.control}
                name={`items.${index}.name`}
                label="名称"
                required
                fieldProps={{ placeholder: '请输入项目名称' }}
              />
              <ProFormNumber
                control={form.control}
                name={`items.${index}.quantity`}
                label="数量"
                required
              />
            </ProFormGroup>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`删除项目 ${index + 1}`}
              disabled={fields.length === 1 || form.formState.isSubmitting}
              onClick={() => remove(index)}
            >
              <Trash2 />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="self-start"
          disabled={form.formState.isSubmitting}
          onClick={() => append({ name: '', quantity: 1 })}
        >
          <Plus />
          添加项目
        </Button>
      </ProForm>
    </ExampleCard>
  );
}
