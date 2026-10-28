import { Inbox } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

export function BasicExample() {
  const [created, setCreated] = useState(false);
  return (
    <div id="example-empty" className="space-y-4">
      {created ? (
        <div className="space-y-4 rounded-lg border p-6">
          <p role="status">已创建“我的第一个项目”。</p>
          <Button variant="outline" onClick={() => setCreated(false)}>
            恢复空状态
          </Button>
        </div>
      ) : (
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Inbox />
            </EmptyMedia>
            <EmptyTitle>暂无项目</EmptyTitle>
            <EmptyDescription>创建一个项目，开始团队协作。</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => setCreated(true)}>创建项目</Button>
          </EmptyContent>
        </Empty>
      )}
    </div>
  );
}
