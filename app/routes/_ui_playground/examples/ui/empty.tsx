import {
  FolderCodeIcon as IconFolderCode,
  ArrowUpRightIcon,
  CloudIcon as IconCloud,
  BellIcon as IconBell,
  RefreshCcwIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Kbd } from '@/components/ui/kbd';

import { ExampleCard } from '../../components/example-card';

function EmptyDemoExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>暂无项目</EmptyTitle>
        <EmptyDescription>您尚未创建项目，创建第一个项目即可开始使用。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>创建项目</Button>
        <Button variant="outline">导入项目</Button>
      </EmptyContent>
      <Button
        variant="link"
        render={<a href="#" />}
        className="text-muted-foreground"
        size="sm"
        nativeButton={false}
      >
        了解更多
        <ArrowUpRightIcon />
      </Button>
    </Empty>
  );
}

function EmptyOutlineExample() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>云存储为空</EmptyTitle>
        <EmptyDescription>将文件上传到云存储，即可随时访问。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          上传文件
        </Button>
      </EmptyContent>
    </Empty>
  );
}

function EmptyBackgroundExample() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>暂无通知</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          已查看全部通知，新的通知会显示在这里。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcwIcon data-icon="inline-start" />
          刷新
        </Button>
      </EmptyContent>
    </Empty>
  );
}

function EmptyAvatarExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/shadcn.png" className="grayscale" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>用户离线</EmptyTitle>
        <EmptyDescription>此用户当前离线，可以留言通知对方，或稍后重试。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">留言</Button>
      </EmptyContent>
    </Empty>
  );
}

function EmptyAvatarGroupExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>暂无团队成员</EmptyTitle>
        <EmptyDescription>邀请团队成员共同参与此项目。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          邀请成员
        </Button>
      </EmptyContent>
    </Empty>
  );
}

function EmptyInputGroupExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - 页面不存在</EmptyTitle>
        <EmptyDescription>您查找的页面不存在，请在下方搜索所需内容。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="w-3/4">
          <InputGroupInput placeholder="搜索页面…" />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          需要帮助？<a href="#">联系支持</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}

export default function EmptyExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <EmptyDemoExample />
      </ExampleCard>
      <ExampleCard id="outline" title="描边">
        <EmptyOutlineExample />
      </ExampleCard>
      <ExampleCard id="background" title="背景">
        <EmptyBackgroundExample />
      </ExampleCard>
      <ExampleCard id="avatar" title="头像">
        <EmptyAvatarExample />
      </ExampleCard>
      <ExampleCard id="avatar-group" title="头像组">
        <EmptyAvatarGroupExample />
      </ExampleCard>
      <ExampleCard id="inputgroup" title="输入框组合">
        <EmptyInputGroupExample />
      </ExampleCard>
    </div>
  );
}
