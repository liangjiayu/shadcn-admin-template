import { AvatarGroupCount } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Avatar, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <Avatar aria-label="张三">
      <AvatarFallback>张</AvatarFallback>
    </Avatar>
  );
}

function SizesExample() {
  return (
    <div className="flex items-center gap-4">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage
            src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27%3E%3Crect width=%2780%27 height=%2780%27 fill=%27%236366f1%27/%3E%3Ccircle cx=%2740%27 cy=%2730%27 r=%2714%27 fill=%27white%27/%3E%3Cellipse cx=%2740%27 cy=%2770%27 rx=%2728%27 ry=%2720%27 fill=%27white%27/%3E%3C/svg%3E"
            alt="示例成员头像"
          />
          <AvatarFallback>张</AvatarFallback>
        </Avatar>
      ))}
      <Avatar>
        <AvatarImage src="data:image/png;base64,invalid" alt="图片加载失败示例" />
        <AvatarFallback>李</AvatarFallback>
      </Avatar>
    </div>
  );
}

function GroupExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>张</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>李</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}

export default function AvatarExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="使用文字回退展示单个成员头像。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="sizes"
        title="图片、回退与尺寸"
        description="图片不可用时显示文字；比较三种尺寸。"
      >
        <SizesExample />
      </ExampleCard>
      <ExampleCard id="group" title="头像组与人数" description="使用人数提示表示未展开的成员。">
        <GroupExample />
      </ExampleCard>
    </div>
  );
}
