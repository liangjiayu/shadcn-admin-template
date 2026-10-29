import { useState } from 'react';

import {
  ContextMenuCheckboxItem,
  ContextMenuSeparator,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '@/components/ui/context-menu';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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
      <div role="status">{contextAction}</div>
    </div>
  );
}

function SelectionExample() {
  const [show, setShow] = useState(true);
  const [density, setDensity] = useState('comfortable');
  const [result, setResult] = useState('尚未执行操作');
  return (
    <div className="space-y-4">
      <ContextMenu>
        <ContextMenuTrigger tabIndex={0} className="rounded-lg border border-dashed p-8">
          右键打开显示设置
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuCheckboxItem checked={show} onCheckedChange={setShow}>
            显示状态栏
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={density} onValueChange={setDensity}>
            <ContextMenuRadioItem value="comfortable">宽松</ContextMenuRadioItem>
            <ContextMenuRadioItem value="compact">紧凑</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>更多操作</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem onClick={() => setResult('已导出')}>导出</ContextMenuItem>
              <ContextMenuItem disabled>打印（暂不可用）</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
      <div role="status">
        状态栏：{show ? '显示' : '隐藏'}；密度：{density === 'compact' ? '紧凑' : '宽松'}；{result}
      </div>
    </div>
  );
}

export default function ContextMenuExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="在虚线区域内右键，或聚焦后使用菜单键打开。"
      >
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="selection"
        title="勾选、单选与子菜单"
        description="菜单支持设置切换、互斥选项及分级操作。"
      >
        <SelectionExample />
      </ExampleCard>
    </div>
  );
}
