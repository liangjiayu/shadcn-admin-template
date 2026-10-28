import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export function BasicExample() {
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

export function ControlledExample() {
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
