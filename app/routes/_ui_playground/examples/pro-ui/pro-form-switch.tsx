import { ProFormSwitch } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormSwitchExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="切换开关，提交布尔值。">
        <FormExample defaultValues={{ enabled: false }}>
          <ProFormSwitch name="enabled" label="启用通知" />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="defaults"
        title="默认开启与禁用"
        description="重置恢复开启状态；禁用开关仍保留提交值。"
      >
        <FormExample defaultValues={{ enabled: true, system: true }}>
          <ProFormSwitch name="enabled" label="项目通知" />
          <ProFormSwitch name="system" label="系统通知" disabled />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
