import { Copy, Eye, FileText, MoreHorizontal, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/toast';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [showDetails, setShowDetails] = useState(false);
  const [lastAction, setLastAction] = useState('尚未执行操作');
  const fileName = '项目说明.pdf';
  async function copyName() {
    try {
      await navigator.clipboard.writeText(fileName);
      setLastAction('已复制文件名称');
      toast.add({ title: '复制成功', description: fileName, type: 'success' });
    } catch {
      setLastAction('复制失败，请重试');
      toast.add({
        title: '复制失败',
        description: '未能访问剪贴板，请检查浏览器权限。',
        type: 'error',
      });
    }
  }
  return (
    <div id="example-dropdown-menu" className="space-y-4">
      <div className="flex items-center gap-3 rounded-lg border p-4">
        <FileText className="size-5 shrink-0 text-muted-foreground" />
        <div className="min-w-0 flex-1">
          <div className="truncate font-medium">{fileName}</div>
          <div className="text-xs text-muted-foreground">PDF 文档 · 2.4 MB</div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" size="icon" aria-label="打开文件操作菜单" />}
          >
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-40">
            <DropdownMenuGroup>
              <DropdownMenuLabel>文件操作</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  setShowDetails(true);
                  setLastAction('已查看文件详情');
                }}
              >
                <Eye />
                查看详情
              </DropdownMenuItem>
              <DropdownMenuItem onClick={copyName}>
                <Copy />
                复制名称
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled variant="destructive">
              <Trash2 />
              删除
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {showDetails && (
        <dl className="grid gap-3 rounded-lg bg-muted/50 p-4 sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">文件名称</dt>
            <dd>{fileName}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">文件类型</dt>
            <dd>PDF 文档</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">文件大小</dt>
            <dd>2.4 MB</dd>
          </div>
        </dl>
      )}
      <div role="status" className="text-sm text-muted-foreground">
        最近操作：{lastAction}
      </div>
    </div>
  );
}

function SelectionExample() {
  const [show, setShow] = useState(true);
  const [density, setDensity] = useState('comfortable');
  const [result, setResult] = useState('尚未执行操作');
  return (
    <div className="space-y-4">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>显示设置</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={show} onCheckedChange={setShow}>
            显示状态栏
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
            <DropdownMenuRadioItem value="comfortable">宽松</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="compact">紧凑</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>更多操作</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setResult('已导出')}>导出</DropdownMenuItem>
              <DropdownMenuItem disabled>打印（暂不可用）</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
      <div role="status">
        状态栏：{show ? '显示' : '隐藏'}；密度：{density === 'compact' ? '紧凑' : '宽松'}；{result}
      </div>
    </div>
  );
}

export default function DropdownMenuExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="文件操作菜单"
        description="打开菜单查看文件详情或复制名称，删除选项为禁用状态。"
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
