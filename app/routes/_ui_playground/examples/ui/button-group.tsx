import { MinusIcon, PlusIcon, AudioLinesIcon, SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { ExampleCard } from '../../components/example-card';

function ButtonGroupOrientationExample() {
  return (
    <ButtonGroup orientation="vertical" aria-label="媒体控制" className="h-fit">
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  );
}

function ButtonGroupSizeExample() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          小
        </Button>
        <Button variant="outline" size="sm">
          按钮
        </Button>
        <Button variant="outline" size="sm">
          分组
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">默认</Button>
        <Button variant="outline">按钮</Button>
        <Button variant="outline">分组</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          大
        </Button>
        <Button variant="outline" size="lg">
          按钮
        </Button>
        <Button variant="outline" size="lg">
          分组
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

function ButtonGroupNestedExample() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="发送消息…" />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <AudioLinesIcon />
            </TooltipTrigger>
            <TooltipContent>语音模式</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

function ButtonGroupSeparatorExample() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        复制
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        粘贴
      </Button>
    </ButtonGroup>
  );
}

function ButtonGroupInputExample() {
  return (
    <ButtonGroup>
      <Input placeholder="搜索…" />
      <Button variant="outline" aria-label="搜索">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}

function ButtonGroupButtonGroupTextExample() {
  return (
    <ButtonGroup>
      <ButtonGroupText render={<Label htmlFor="button-group-buttongrouptext-name" />}>
        文本
      </ButtonGroupText>
      <Input placeholder="在此输入内容…" id="button-group-buttongrouptext-name" />
    </ButtonGroup>
  );
}

export default function ButtonGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="orientation" title="方向">
        <ButtonGroupOrientationExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <ButtonGroupSizeExample />
      </ExampleCard>
      <ExampleCard id="nested" title="嵌套分组">
        <ButtonGroupNestedExample />
      </ExampleCard>
      <ExampleCard id="separator" title="分隔符">
        <ButtonGroupSeparatorExample />
      </ExampleCard>
      <ExampleCard id="input" title="输入框">
        <ButtonGroupInputExample />
      </ExampleCard>
      <ExampleCard id="buttongrouptext" title="文本">
        <ButtonGroupButtonGroupTextExample />
      </ExampleCard>
    </div>
  );
}
