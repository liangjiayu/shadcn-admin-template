import { FileText } from 'lucide-react';
import { useState } from 'react';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ExampleCard } from './example-card';

export function DisplayExamples() {
  const [joined, setJoined] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard
        component="card"
        title="Card · 卡片"
        description="将标题、说明、内容及底部操作组织在一起。"
      >
        <Card>
          <CardHeader>
            <CardTitle>设计协作</CardTitle>
            <CardDescription>统一管理团队的设计资源。</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{joined ? '你已加入项目，可以开始协作。' : '项目共有 8 位成员，欢迎加入。'}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setJoined(!joined)}>{joined ? '退出项目' : '加入项目'}</Button>
          </CardFooter>
        </Card>
      </ExampleCard>
      <ExampleCard component="item" title="Item · 列表项" description="组合图标、说明与行内操作。">
        <ItemGroup>
          {['需求文档', '设计规范'].map((name) => (
            <Item key={name} variant="outline" role="listitem">
              <ItemMedia variant="icon">
                <FileText />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{name}</ItemTitle>
                <ItemDescription>团队共享文件</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="outline" onClick={() => setSelected(name)}>
                  查看<span className="sr-only">{name}</span>
                </Button>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
        <p role="status">{selected ? `当前查看：${selected}` : '请选择一个文件'}</p>
      </ExampleCard>
      <ExampleCard
        component="table"
        title="Table · 表格"
        description="展示带表头、说明及多行内容的数据表格。"
        wide
      >
        <Table>
          <TableCaption>共 3 个示例项目</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>项目</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="text-right">成员数</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: '管理后台', status: '进行中', members: 8 },
              { name: '移动应用', status: '计划中', members: 4 },
              { name: '帮助中心', status: '已完成', members: 3 },
            ].map((project) => (
              <TableRow key={project.name}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell className="text-right">{project.members}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ExampleCard>
      <ExampleCard
        component="aspect-ratio"
        title="AspectRatio · 固定比例"
        description="容器宽度变化时保持 16:9 比例。"
      >
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 text-lg font-medium">
            16 : 9
          </div>
        </AspectRatio>
      </ExampleCard>
      <ExampleCard
        component="scroll-area"
        title="ScrollArea · 滚动区域"
        description="在固定高度内滚动长列表。"
      >
        <ScrollArea className="h-56 rounded-lg border" tabIndex={0} aria-label="版本记录">
          <div className="divide-y px-4">
            {Array.from({ length: 20 }, (_, index) => (
              <p key={index} className="py-3">
                版本 1.{20 - index}.0 · 更新记录
              </p>
            ))}
          </div>
        </ScrollArea>
      </ExampleCard>
    </div>
  );
}
