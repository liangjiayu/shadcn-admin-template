import { cn } from 'cn';
import { LoaderIcon, ArrowUpIcon } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from '../../components/example-card';

function SpinnerDemoExample() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">正在处理付款…</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  );
}

function SpinnerCustomization({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="加载中"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  );
}
function SpinnerCustomizationExample() {
  return (
    <div className="flex items-center gap-4">
      <SpinnerCustomization />
    </div>
  );
}

function SpinnerSizeExample() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  );
}

function SpinnerButtonExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        加载中…
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        请稍候
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner data-icon="inline-start" />
        处理中
      </Button>
    </div>
  );
}

function SpinnerBadgeExample() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner data-icon="inline-start" />
        同步中
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        更新中
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        处理中
      </Badge>
    </div>
  );
}

function SpinnerInputGroupExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="发送消息…" disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="发送消息…" disabled />
        <InputGroupAddon align="block-end">
          <Spinner />
          校验中…
          <InputGroupButton className="ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">发送</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function SpinnerEmptyExample() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>正在处理您的请求</EmptyTitle>
        <EmptyDescription>请求处理中，请稍候，不要刷新页面。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          取消
        </Button>
      </EmptyContent>
    </Empty>
  );
}

export default function SpinnerExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <SpinnerDemoExample />
      </ExampleCard>
      <ExampleCard id="customization" title="自定义图标">
        <SpinnerCustomizationExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <SpinnerSizeExample />
      </ExampleCard>
      <ExampleCard id="button" title="按钮">
        <SpinnerButtonExample />
      </ExampleCard>
      <ExampleCard id="badge" title="徽章">
        <SpinnerBadgeExample />
      </ExampleCard>
      <ExampleCard id="input-group" title="输入框组合">
        <SpinnerInputGroupExample />
      </ExampleCard>
      <ExampleCard id="empty" title="空状态">
        <SpinnerEmptyExample />
      </ExampleCard>
    </div>
  );
}
