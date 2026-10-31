import { ProFormInput } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormInputExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="填写文本并提交，重置后恢复初始值。">
        <FormExample defaultValues={{ name: '' }}>
          <ProFormInput name="name" label="姓名" fieldProps={{ placeholder: '请输入姓名' }} />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="validation"
        title="必填校验与禁用"
        description="必填标记与校验规则分别配置；禁用字段仍保留提交值。"
      >
        <FormExample defaultValues={{ username: '', account: 'demo-account' }}>
          <ProFormInput
            name="username"
            label="用户名"
            required
            rules={{ required: '请输入用户名' }}
          />
          <ProFormInput name="account" label="账号" disabled />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
