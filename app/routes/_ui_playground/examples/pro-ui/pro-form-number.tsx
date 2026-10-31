import { ProFormNumber } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormNumberExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="提交值为 number；清空输入后为 null。">
        <FormExample defaultValues={{ quantity: 2 as number | null }}>
          <ProFormNumber name="quantity" label="数量" />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="range"
        title="范围校验"
        description="通过 rules 校验数值范围；fieldProps 控制输入框范围与步长。"
      >
        <FormExample defaultValues={{ quantity: null as number | null }}>
          <ProFormNumber
            name="quantity"
            label="数量"
            required
            rules={{
              required: '请输入数量',
              min: { value: 1, message: '数量不能小于 1' },
              max: { value: 20, message: '数量不能大于 20' },
            }}
            fieldProps={{ min: 1, max: 20, step: 1, placeholder: '请输入 1–20' }}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
