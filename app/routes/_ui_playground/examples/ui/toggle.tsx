import { BookmarkIcon, BoldIcon, ItalicIcon } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

import { ExampleCard } from '../../components/example-card';

function ToggleDemoExample() {
  return (
    <Toggle aria-label="切换收藏" size="sm" variant="outline">
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      收藏
    </Toggle>
  );
}

function ToggleOutlineExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="切换斜体">
        <ItalicIcon />
        斜体
      </Toggle>
      <Toggle variant="outline" aria-label="切换粗体">
        <BoldIcon />
        粗体
      </Toggle>
    </div>
  );
}

function ToggleWithTextExample() {
  return (
    <Toggle aria-label="切换斜体">
      <ItalicIcon />
      斜体
    </Toggle>
  );
}

function ToggleSizeExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="小尺寸切换" size="sm">
        小
      </Toggle>
      <Toggle variant="outline" aria-label="默认尺寸切换" size="default">
        默认
      </Toggle>
      <Toggle variant="outline" aria-label="大尺寸切换" size="lg">
        大
      </Toggle>
    </div>
  );
}

function ToggleDisabledExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="禁用切换" disabled>
        禁用
      </Toggle>
      <Toggle variant="outline" aria-label="禁用描边切换" disabled>
        禁用
      </Toggle>
    </div>
  );
}

export default function ToggleExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <ToggleDemoExample />
      </ExampleCard>
      <ExampleCard id="outline" title="描边">
        <ToggleOutlineExample />
      </ExampleCard>
      <ExampleCard id="with-text" title="带文字">
        <ToggleWithTextExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <ToggleSizeExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <ToggleDisabledExample />
      </ExampleCard>
    </div>
  );
}
