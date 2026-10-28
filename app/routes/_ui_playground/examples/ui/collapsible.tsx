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
