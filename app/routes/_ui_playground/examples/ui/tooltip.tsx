import { SaveIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { ExampleCard } from '../../components/example-card';

function TooltipDemoExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>悬停</TooltipTrigger>
      <TooltipContent>
        <div>添加到资源库</div>
      </TooltipContent>
    </Tooltip>
  );
}

function TooltipSideExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {(['left', 'top', 'bottom', 'right'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" className="w-fit capitalize" />}>
            {side}
          </TooltipTrigger>
          <TooltipContent side={side}>
            <div>添加到资源库</div>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

function TooltipWithKeyboardShortcutExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon-sm" />}>
        <SaveIcon />
      </TooltipTrigger>
      <TooltipContent>
        保存更改<Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}

function TooltipDisabledButtonExample() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<span className="inline-block w-fit" />}>
          <Button variant="outline" disabled>
            禁用
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div>此功能当前不可用</div>
        </TooltipContent>
      </Tooltip>
    </>
  );
}

export default function TooltipExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <TooltipDemoExample />
      </ExampleCard>
      <ExampleCard id="side" title="方向">
        <TooltipSideExample />
      </ExampleCard>
      <ExampleCard id="with-keyboard-shortcut" title="快捷键">
        <TooltipWithKeyboardShortcutExample />
      </ExampleCard>
      <ExampleCard id="disabled-button" title="禁用按钮">
        <TooltipDisabledButtonExample />
      </ExampleCard>
    </div>
  );
}
