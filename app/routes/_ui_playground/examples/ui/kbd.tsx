import { Kbd, KbdGroup } from '@/components/ui/kbd';

export function BasicExample() {
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

export function CombinationExample() {
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
