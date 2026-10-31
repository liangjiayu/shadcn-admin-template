import { ProFormCheckbox } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormCheckboxExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="勾选状态提交为布尔值。">
        <FormExample defaultValues={{ subscribed: false }}>
          <ProFormCheckbox name="subscribed" label="订阅更新" />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="validation"
        title="必须勾选与禁用"
        description="通过 validate 要求勾选；禁用字段保留原值。"
      >
        <FormExample defaultValues={{ agreement: false, system: true }}>
          <ProFormCheckbox
            name="agreement"
            label="同意使用协议"
            required
            rules={{ validate: (value) => value === true || '请先同意使用协议' }}
          />
          <ProFormCheckbox name="system" label="接收系统通知" disabled />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
