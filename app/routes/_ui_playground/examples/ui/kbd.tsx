import { Kbd, KbdGroup } from '@/components/ui/kbd';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-kbd" className="space-y-4">
      <div className="flex items-center gap-3">
        <span>搜索</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}

function CombinationExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span>保存</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>S</Kbd>
      </KbdGroup>
      <span>打开命令面板</span>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  );
}

export default function KbdExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="展示按键提示，不注册全局快捷键。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="combination" title="组合快捷键" description="使用按键组展示组合操作提示。">
        <CombinationExample />
      </ExampleCard>
    </div>
  );
}
