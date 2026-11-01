import { BadgeCheck, BookmarkIcon, ArrowUpRightIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from '../../components/example-card';

function BadgeVariantsExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>默认</Badge>
      <Badge variant="secondary">次要</Badge>
      <Badge variant="destructive">危险</Badge>
      <Badge variant="outline">描边</Badge>
      <Badge variant="ghost">轻量</Badge>
    </div>
  );
}

function BadgeWithIconExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheck data-icon="inline-start" />
        已验证
      </Badge>
      <Badge variant="outline">
        收藏
        <BookmarkIcon data-icon="inline-end" />
      </Badge>
    </div>
  );
}

function BadgeWithSpinnerExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        删除中
      </Badge>
      <Badge variant="secondary">
        生成中
        <Spinner data-icon="inline-end" />
      </Badge>
    </div>
  );
}

function BadgeLinkExample() {
  return (
    <Badge render={<a href="#link" />}>
      Open a <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  );
}

function BadgeCustomColorsExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">蓝色</Badge>
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        绿色
      </Badge>
      <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">天蓝色</Badge>
      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
        紫色
      </Badge>
      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">红色</Badge>
    </div>
  );
}

export default function BadgeExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="variants" title="样式变体">
        <BadgeVariantsExample />
      </ExampleCard>
      <ExampleCard id="with-icon" title="图标">
        <BadgeWithIconExample />
      </ExampleCard>
      <ExampleCard id="with-spinner" title="加载图标">
        <BadgeWithSpinnerExample />
      </ExampleCard>
      <ExampleCard id="link" title="链接">
        <BadgeLinkExample />
      </ExampleCard>
      <ExampleCard id="custom-colors" title="自定义颜色">
        <BadgeCustomColorsExample />
      </ExampleCard>
    </div>
  );
}
