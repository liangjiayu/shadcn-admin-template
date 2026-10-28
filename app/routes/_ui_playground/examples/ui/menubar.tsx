import { useState } from 'react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

export function BasicExample() {
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
