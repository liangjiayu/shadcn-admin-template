import { ProFormTextarea } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormTextareaExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="输入多行文本并查看提交结果。">
        <FormExample defaultValues={{ description: '' }}>
          <ProFormTextarea name="description" label="说明" />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="rows"
        title="占位提示与行数"
        description="通过 fieldProps 配置原生文本域属性。"
      >
        <FormExample defaultValues={{ bio: '' }}>
          <ProFormTextarea
            name="bio"
            label="个人简介"
            fieldProps={{ placeholder: '介绍一下你的工作与兴趣', rows: 5 }}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
