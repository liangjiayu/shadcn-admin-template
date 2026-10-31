import { ProFormPassword } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormPasswordExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="点击眼睛图标切换密码显隐。此处仅输入演示密码。"
      >
        <FormExample defaultValues={{ password: '' }}>
          <ProFormPassword
            name="password"
            label="密码"
            fieldProps={{ placeholder: '请输入演示密码', autoComplete: 'new-password' }}
          />
        </FormExample>
      </ExampleCard>
      <ExampleCard id="validation" title="长度校验" description="提交时检查必填和最小长度。">
        <FormExample defaultValues={{ password: '' }}>
          <ProFormPassword
            name="password"
            label="密码"
            required
            description="至少 8 个字符。"
            rules={{
              required: '请输入密码',
              minLength: { value: 8, message: '密码至少 8 个字符' },
            }}
            fieldProps={{ autoComplete: 'new-password' }}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
