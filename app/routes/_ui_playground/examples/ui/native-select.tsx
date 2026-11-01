import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select';

import { ExampleCard } from '../../components/example-card';

function NativeSelectDemoExample() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">选择状态</NativeSelectOption>
      <NativeSelectOption value="todo">待办</NativeSelectOption>
      <NativeSelectOption value="in-progress">进行中</NativeSelectOption>
      <NativeSelectOption value="done">已完成</NativeSelectOption>
      <NativeSelectOption value="cancelled">已取消</NativeSelectOption>
    </NativeSelect>
  );
}

function NativeSelectGroupsExample() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">选择部门</NativeSelectOption>
      <NativeSelectOptGroup label="研发">
        <NativeSelectOption value="frontend">前端</NativeSelectOption>
        <NativeSelectOption value="backend">后端</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="销售">
        <NativeSelectOption value="sales-rep">销售代表</NativeSelectOption>
        <NativeSelectOption value="account-manager">客户经理</NativeSelectOption>
        <NativeSelectOption value="sales-director">销售总监</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="运营">
        <NativeSelectOption value="support">客户支持</NativeSelectOption>
        <NativeSelectOption value="product-manager">产品经理</NativeSelectOption>
        <NativeSelectOption value="ops-manager">运营经理</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}

function NativeSelectDisabledExample() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">禁用</NativeSelectOption>
      <NativeSelectOption value="apple">苹果</NativeSelectOption>
      <NativeSelectOption value="banana">香蕉</NativeSelectOption>
      <NativeSelectOption value="blueberry">蓝莓</NativeSelectOption>
    </NativeSelect>
  );
}

function NativeSelectInvalidExample() {
  return (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">错误状态</NativeSelectOption>
      <NativeSelectOption value="apple">苹果</NativeSelectOption>
      <NativeSelectOption value="banana">香蕉</NativeSelectOption>
      <NativeSelectOption value="blueberry">蓝莓</NativeSelectOption>
    </NativeSelect>
  );
}

export default function NativeSelectExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <NativeSelectDemoExample />
      </ExampleCard>
      <ExampleCard id="groups" title="分组">
        <NativeSelectGroupsExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <NativeSelectDisabledExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <NativeSelectInvalidExample />
      </ExampleCard>
    </div>
  );
}
