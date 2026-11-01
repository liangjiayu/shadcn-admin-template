import { Bold, Italic, Underline, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import * as React from 'react';

import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { ExampleCard } from '../../components/example-card';

function ToggleGroupDemoExample() {
  return (
    <ToggleGroup variant="outline" multiple>
      <ToggleGroupItem value="bold" aria-label="切换粗体">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="切换斜体">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="切换删除线">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupOutlineExample() {
  return (
    <ToggleGroup variant="outline" defaultValue={['all']}>
      <ToggleGroupItem value="all" aria-label="切换全部">
        全部
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="切换未接来电">
        未接来电
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupSizeExample() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup size="sm" defaultValue={['top']} variant="outline">
        <ToggleGroupItem value="top" aria-label="切换上方">
          顶部
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="切换下方">
          底部
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="切换左侧">
          左侧
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="切换右侧">
          右侧
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={['top']} variant="outline">
        <ToggleGroupItem value="top" aria-label="切换上方">
          顶部
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="切换下方">
          底部
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="切换左侧">
          左侧
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="切换右侧">
          右侧
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

function ToggleGroupSpacingExample() {
  return (
    <ToggleGroup size="sm" defaultValue={['top']} variant="outline" spacing={2}>
      <ToggleGroupItem value="top" aria-label="切换上方">
        顶部
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="切换下方">
        底部
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="切换左侧">
        左侧
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="切换右侧">
        右侧
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupVerticalExample() {
  return (
    <ToggleGroup multiple orientation="vertical" spacing={1} defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="切换粗体">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="切换斜体">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="切换下划线">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupDisabledExample() {
  return (
    <ToggleGroup disabled>
      <ToggleGroupItem value="bold" aria-label="切换粗体">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="切换斜体">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="切换删除线">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupCustomExample() {
  const [fontWeight, setFontWeight] = React.useState('normal');
  return (
    <Field>
      <FieldLabel>字重</FieldLabel>
      <ToggleGroup
        value={[fontWeight]}
        onValueChange={(value) => setFontWeight(value[0])}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="细体"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-muted-foreground">细体</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="常规"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-muted-foreground">常规</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="中等"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-muted-foreground">中等</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="粗体"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-muted-foreground">粗体</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        使用 <code className="rounded-md bg-muted px-1 py-0.5 font-mono">font-{fontWeight}</code>{' '}
        设置字重。
      </FieldDescription>
    </Field>
  );
}

export default function ToggleGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <ToggleGroupDemoExample />
      </ExampleCard>
      <ExampleCard id="outline" title="描边">
        <ToggleGroupOutlineExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <ToggleGroupSizeExample />
      </ExampleCard>
      <ExampleCard id="spacing" title="间距">
        <ToggleGroupSpacingExample />
      </ExampleCard>
      <ExampleCard id="vertical" title="垂直排列">
        <ToggleGroupVerticalExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <ToggleGroupDisabledExample />
      </ExampleCard>
      <ExampleCard id="custom" title="自定义样式">
        <ToggleGroupCustomExample />
      </ExampleCard>
    </div>
  );
}
