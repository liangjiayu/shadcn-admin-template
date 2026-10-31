import { ProFormSelect } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormSelectExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="单选默认支持清空，清空后提交 null。">
        <FormExample defaultValues={{ role: null as string | null }}>
          <ProFormSelect
            name="role"
            label="角色"
            options={[
              { label: '管理员', value: 'admin' },
              { label: '编辑者', value: 'editor' },
              { label: '查看者', value: 'viewer' },
            ]}
          />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="multiple"
        title="多选"
        description="使用 multiple 选择多个值；清空后提交空数组。"
      >
        <FormExample defaultValues={{ roles: ['viewer'] }}>
          <ProFormSelect
            name="roles"
            label="角色"
            multiple
            options={[
              { label: '管理员', value: 'admin' },
              { label: '编辑者', value: 'editor' },
              { label: '查看者', value: 'viewer' },
            ]}
          />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="numeric"
        title="数字选项与禁用选项"
        description="选项值保持数字类型；allowClear=false 隐藏清空按钮。"
      >
        <FormExample defaultValues={{ department: 1 }}>
          <ProFormSelect
            name="department"
            label="部门"
            allowClear={false}
            options={[
              { label: '研发部', value: 1 },
              { label: '设计部', value: 2 },
              { label: '已停用部门', value: 3, disabled: true },
            ]}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
