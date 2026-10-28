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
