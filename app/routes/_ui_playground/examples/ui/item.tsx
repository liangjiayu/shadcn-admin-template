import {
  BadgeCheckIcon,
  ChevronRightIcon,
  InboxIcon,
  ShieldAlertIcon,
  Plus,
  PlusIcon,
  ExternalLinkIcon,
} from 'lucide-react';
import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemGroup,
  ItemHeader,
} from '@/components/ui/item';

import { ExampleCard } from '../../components/example-card';

function ItemDemoExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>基础列表项</ItemTitle>
          <ItemDescription>包含标题和说明的简单列表项。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            操作
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" />}>
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>您的个人资料已通过验证。</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  );
}

function ItemVariantExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>默认样式</ItemTitle>
          <ItemDescription>透明背景，无边框。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>描边样式</ItemTitle>
          <ItemDescription>带有可见边框的描边样式。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>柔和样式</ItemTitle>
          <ItemDescription>使用柔和背景展示次要内容。</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}

function ItemSizeExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>默认尺寸</ItemTitle>
          <ItemDescription>适合大多数场景的标准尺寸。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>小尺寸</ItemTitle>
          <ItemDescription>适合紧凑布局的小尺寸。</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>超小尺寸</ItemTitle>
          <ItemDescription>最为紧凑的尺寸。</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}

function ItemIconExample() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>安全提醒</ItemTitle>
          <ItemDescription>检测到未知设备的新登录。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            查看
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

function ItemAvatarExample() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>最后活跃于 5 个月前</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon-sm" variant="outline" className="rounded-full" aria-label="邀请">
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="flex">
              <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>暂无团队成员</ItemTitle>
          <ItemDescription>邀请团队成员共同参与此项目。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            邀请
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

const musicImage = [
  {
    title: '午夜城市灯光',
    artist: 'Neon Dreams',
    album: 'Electric Nights',
    duration: '3:45',
  },
  {
    title: '咖啡馆对话',
    artist: 'The Morning Brew',
    album: 'Urban Stories',
    duration: '4:05',
  },
  {
    title: '数字雨',
    artist: 'Cyber Symphony',
    album: 'Binary Beats',
    duration: '3:30',
  },
];
function ItemImageExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {musicImage.map((song) => (
          <Item key={song.title} variant="outline" render={<a href="#" />} role="listitem">
            <ItemMedia variant="image">
              <img
                src={`https://avatar.vercel.sh/${song.title}`}
                alt={song.title}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {song.title} - <span className="text-muted-foreground">{song.album}</span>
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}

const peopleGroup = [
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 'shadcn@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
];
function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm">
      {peopleGroup.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
}

const modelsHeader = [
  {
    name: 'v0-1.5-sm',
    description: '日常任务与界面生成。',
    image:
      'https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop',
    credit: 'Valeria Reverdo on Unsplash',
  },
  {
    name: 'v0-1.5-lg',
    description: '高级思考与推理。',
    image:
      'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
    credit: 'Michael Oeser on Unsplash',
  },
  {
    name: 'v0-2.0-mini',
    description: '面向所有人的开源模型。',
    image:
      'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
];
function ItemHeaderExample() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {modelsHeader.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <img
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}

function ItemLinkExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item render={<a href="#" />}>
        <ItemContent>
          <ItemTitle>访问文档</ItemTitle>
          <ItemDescription>了解如何开始使用组件。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
      <Item variant="outline" render={<a href="#" target="_blank" rel="noopener noreferrer" />}>
        <ItemContent>
          <ItemTitle>外部资源</ItemTitle>
          <ItemDescription>在新标签页中打开，并设置安全属性。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  );
}

export default function ItemExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <ItemDemoExample />
      </ExampleCard>
      <ExampleCard id="variant" title="样式变体">
        <ItemVariantExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <ItemSizeExample />
      </ExampleCard>
      <ExampleCard id="icon" title="图标">
        <ItemIconExample />
      </ExampleCard>
      <ExampleCard id="avatar" title="头像">
        <ItemAvatarExample />
      </ExampleCard>
      <ExampleCard id="image" title="图片">
        <ItemImageExample />
      </ExampleCard>
      <ExampleCard id="group" title="分组">
        <ItemGroupExample />
      </ExampleCard>
      <ExampleCard id="header" title="头部">
        <ItemHeaderExample />
      </ExampleCard>
      <ExampleCard id="link" title="链接">
        <ItemLinkExample />
      </ExampleCard>
    </div>
  );
}
