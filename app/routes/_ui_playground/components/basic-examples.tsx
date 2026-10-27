import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import { ExampleCard } from './example-card';

export function BasicExamples() {
  const [clicks, setClicks] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard
        component="button"
        title="Button · 按钮"
        description="常用样式、禁用状态与点击反馈。"
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setClicks(clicks + 1)}>点击计数</Button>
          <Button variant="outline" onClick={() => setClicks(0)}>
            重置
          </Button>
          <Button variant="secondary" onClick={() => setClicks(clicks + 1)}>
            次要按钮
          </Button>
          <Button disabled>禁用按钮</Button>
        </div>
        <p role="status">已点击 {clicks} 次</p>
      </ExampleCard>
      <ExampleCard
        component="button-group"
        title="ButtonGroup · 按钮组"
        description="将相关操作组合在一起。"
      >
        <ButtonGroup aria-label="调整数量">
          <Button
            variant="outline"
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity - 1)}
            aria-label="减少数量"
          >
            −
          </Button>
          <ButtonGroupText aria-live="polite">{quantity}</ButtonGroupText>
          <Button variant="outline" onClick={() => setQuantity(quantity + 1)} aria-label="增加数量">
            +
          </Button>
        </ButtonGroup>
      </ExampleCard>
      <ExampleCard component="badge" title="Badge · 徽章" description="通过不同样式标识状态。">
        <div className="flex flex-wrap gap-2">
          <Badge>进行中</Badge>
          <Badge variant="secondary">草稿</Badge>
          <Badge variant="outline">已归档</Badge>
          <Badge variant="destructive">失败</Badge>
        </div>
      </ExampleCard>
      <ExampleCard
        component="avatar"
        title="Avatar · 头像"
        description="使用文字回退展示成员头像。"
      >
        <AvatarGroup aria-label="项目成员：张三、李四、王五">
          {['张', '李', '王'].map((name) => (
            <Avatar key={name}>
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </ExampleCard>
      <ExampleCard
        component="separator"
        title="Separator · 分隔线"
        description="分隔内容区域，支持水平和垂直方向。"
      >
        <p>项目概览</p>
        <Separator />
        <div className="flex h-5 items-center gap-3">
          <span>文档</span>
          <Separator orientation="vertical" />
          <span>设置</span>
        </div>
      </ExampleCard>
      <ExampleCard
        component="label"
        title="Label · 标签"
        description="点击标签可聚焦关联的输入框。"
      >
        <Label htmlFor="demo-label">项目名称</Label>
        <Input id="demo-label" placeholder="请输入项目名称" />
      </ExampleCard>
      <ExampleCard
        component="kbd"
        title="Kbd · 快捷键"
        description="展示按键提示，不注册全局快捷键。"
      >
        <div className="flex items-center gap-3">
          <span>搜索</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>
      </ExampleCard>
    </div>
  );
}
