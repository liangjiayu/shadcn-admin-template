import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div id="example-collapsible" className="space-y-4">
      <Collapsible open={expanded} onOpenChange={setExpanded}>
        <CollapsibleTrigger render={<Button variant="outline" />}>
          {expanded ? '收起更新记录' : '展开更新记录'}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div>组件演示支持组件导航和交互体验。</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function ControlledExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger render={<Button variant="outline" />}>
          {open ? '收起' : '展开'}详情
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">这里是补充信息。</CollapsibleContent>
      </Collapsible>
      <Button variant="outline" onClick={() => setOpen(!open)}>
        外部切换
      </Button>
      <Collapsible disabled>
        <CollapsibleTrigger render={<Button variant="outline" />}>禁用折叠</CollapsibleTrigger>
        <CollapsibleContent>不可展开</CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default function CollapsibleExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="通过单个按钮控制补充内容的显示。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="controlled"
        title="受控折叠"
        description="使用状态控制展开，并展示禁用触发器。"
      >
        <ControlledExample />
      </ExampleCard>
    </div>
  );
}
