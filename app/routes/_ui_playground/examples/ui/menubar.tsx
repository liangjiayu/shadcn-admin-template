import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  MenubarCheckboxItem,
  MenubarSeparator,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [menuAction, setMenuAction] = useState('尚未执行操作');
  return (
    <div id="example-menubar" className="space-y-4">
      <Menubar aria-label="文档操作">
        <MenubarMenu>
          <MenubarTrigger>文件</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setMenuAction('已新建示例文档')}>新建文档</MenubarItem>
            <MenubarItem onClick={() => setMenuAction('已保存示例文档')}>保存文档</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>编辑</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setMenuAction('已撤销示例操作')}>撤销</MenubarItem>
            <MenubarItem disabled>重做</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div role="status">{menuAction}</div>
    </div>
  );
}

function SelectionExample() {
  const [show, setShow] = useState(true);
  const [density, setDensity] = useState('comfortable');
  const [result, setResult] = useState('尚未执行操作');
  return (
    <div className="space-y-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger render={<Button variant="outline" />}>显示设置</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={show} onCheckedChange={setShow}>
              显示状态栏
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value={density} onValueChange={setDensity}>
              <MenubarRadioItem value="comfortable">宽松</MenubarRadioItem>
              <MenubarRadioItem value="compact">紧凑</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>更多操作</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={() => setResult('已导出')}>导出</MenubarItem>
                <MenubarItem disabled>打印（暂不可用）</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div role="status">
        状态栏：{show ? '显示' : '隐藏'}；密度：{density === 'compact' ? '紧凑' : '宽松'}；{result}
      </div>
    </div>
  );
}

export default function MenubarExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="打开菜单并选择操作，支持键盘导航。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="selection"
        title="勾选、单选与子菜单"
        description="菜单支持设置切换、互斥选项及分级操作。"
      >
        <SelectionExample />
      </ExampleCard>
    </div>
  );
}
