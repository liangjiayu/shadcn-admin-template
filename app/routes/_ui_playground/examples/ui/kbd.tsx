import { SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

import { ExampleCard } from '../../components/example-card';

function KbdDemoExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  );
}

function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm text-muted-foreground">
        使用{' '}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{' '}
        打开命令面板
      </div>
    </div>
  );
}

function KbdButtonExample() {
  return (
    <Button variant="outline">
      接受{' '}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  );
}

function KbdInputGroupExample() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="搜索…" />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default function KbdExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <KbdDemoExample />
      </ExampleCard>
      <ExampleCard id="group" title="分组">
        <KbdGroupExample />
      </ExampleCard>
      <ExampleCard id="button" title="按钮">
        <KbdButtonExample />
      </ExampleCard>
      <ExampleCard id="input-group" title="输入框组合">
        <KbdInputGroupExample />
      </ExampleCard>
    </div>
  );
}
