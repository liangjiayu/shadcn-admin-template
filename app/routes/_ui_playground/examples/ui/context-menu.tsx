import { useState } from 'react';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function BasicExample() {
  const [contextAction, setContextAction] = useState('尚未选择操作');
  return (
    <div id="example-context-menu" className="space-y-4">
      <ContextMenu>
        <ContextMenuTrigger
          tabIndex={0}
          className="flex min-h-28 items-center justify-center rounded-lg border border-dashed p-4 text-muted-foreground"
        >
          在此处右键打开菜单
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={() => setContextAction('已打开文件')}>打开文件</ContextMenuItem>
          <ContextMenuItem onClick={() => setContextAction('已收藏文件')}>收藏文件</ContextMenuItem>
          <ContextMenuItem disabled>删除文件</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <p role="status">{contextAction}</p>
    </div>
  );
}
