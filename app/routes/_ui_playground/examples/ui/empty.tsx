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
import { Input } from '@/components/ui/input';

export function BasicExample() {
  const [created, setCreated] = useState(false);
  return (
    <div id="example-empty" className="space-y-4">
      {created ? (
        <div className="space-y-4 rounded-lg border p-6">
          <div role="status">已创建“我的第一个项目”。</div>
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

export function SearchExample() {
  const [query, setQuery] = useState('不存在的项目');
  return (
    <div className="space-y-4">
      <Input
        aria-label="搜索示例项目"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {'管理后台'.includes(query) ? (
        <div>管理后台</div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>没有匹配结果</EmptyTitle>
            <EmptyDescription>尝试其他关键词。</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" onClick={() => setQuery('')}>
              清空搜索
            </Button>
          </EmptyContent>
        </Empty>
      )}
    </div>
  );
}
