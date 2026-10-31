import { ProFormCombobox } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormComboboxExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="输入城市名称搜索；输入不存在的城市可查看空状态，选择后支持清空。"
      >
        <FormExample defaultValues={{ city: null as string | null }}>
          <ProFormCombobox
            name="city"
            label="城市"
            placeholder="搜索城市"
            emptyText="没有匹配的城市"
            options={[
              { label: '北京', value: 'beijing' },
              { label: '上海', value: 'shanghai' },
              { label: '杭州', value: 'hangzhou' },
            ]}
          />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="multiple"
        title="搜索多选"
        description="选中项以标签展示，可逐个移除或全部清空。"
      >
        <FormExample defaultValues={{ skills: ['react'] }}>
          <ProFormCombobox
            name="skills"
            label="技能"
            multiple
            placeholder="搜索技能"
            options={[
              { label: 'React', value: 'react' },
              { label: 'TypeScript', value: 'typescript' },
              { label: 'Vue', value: 'vue' },
              { label: 'Angular（停用）', value: 'angular', disabled: true },
            ]}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
