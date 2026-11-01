import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from 'lucide-react';
import * as React from 'react';

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { ExampleCard } from '../../components/example-card';

function MenubarDemoExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              新建标签页<MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              新建窗口<MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>新建无痕窗口</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>共享</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>通过邮件发送链接</MenubarItem>
                  <MenubarItem>信息</MenubarItem>
                  <MenubarItem>备忘录</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              打印…<MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              撤销<MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              重做<MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>查找</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarGroup>
                  <MenubarItem>搜索网页</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>查找…</MenubarItem>
                  <MenubarItem>查找下一个</MenubarItem>
                  <MenubarItem>查找上一个</MenubarItem>
                </MenubarGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>剪切</MenubarItem>
            <MenubarItem>复制</MenubarItem>
            <MenubarItem>粘贴</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>视图</MenubarTrigger>
        <MenubarContent className="w-44">
          <MenubarGroup>
            <MenubarCheckboxItem>书签栏</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>完整网址</MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>
              重新加载<MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              强制重新加载<MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>切换全屏</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>隐藏侧栏</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>用户资料</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>编辑…</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>添加用户资料…</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function MenubarCheckboxExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>视图</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarCheckboxItem>始终显示书签栏</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>始终显示完整网址</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            重新加载<MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            强制重新加载<MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>格式</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>删除线</MenubarCheckboxItem>
          <MenubarCheckboxItem>代码</MenubarCheckboxItem>
          <MenubarCheckboxItem>上标</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function MenubarRadioExample() {
  const [user, setUser] = React.useState('benoit');
  const [theme, setTheme] = React.useState('system');
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>用户资料</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={user} onValueChange={setUser}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>编辑…</MenubarItem>
          <MenubarItem inset>添加用户资料…</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>主题</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">浅色</MenubarRadioItem>
            <MenubarRadioItem value="dark">深色</MenubarRadioItem>
            <MenubarRadioItem value="system">跟随系统</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function MenubarSubmenuExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>共享</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>通过邮件发送链接</MenubarItem>
              <MenubarItem>信息</MenubarItem>
              <MenubarItem>备忘录</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            打印…<MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            撤销<MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            重做<MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>查找</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>查找…</MenubarItem>
              <MenubarItem>查找下一个</MenubarItem>
              <MenubarItem>查找上一个</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>剪切</MenubarItem>
          <MenubarItem>复制</MenubarItem>
          <MenubarItem>粘贴</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function MenubarWithIconsExample() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileIcon />
            新建文件<MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <FolderIcon />
            打开文件夹
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon />
            保存<MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>更多</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <SettingsIcon />
              设置
            </MenubarItem>
            <MenubarItem>
              <HelpCircleIcon />
              帮助
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <TrashIcon />
              删除
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default function MenubarExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <MenubarDemoExample />
      </ExampleCard>
      <ExampleCard id="checkbox" title="复选框">
        <MenubarCheckboxExample />
      </ExampleCard>
      <ExampleCard id="radio" title="单选项">
        <MenubarRadioExample />
      </ExampleCard>
      <ExampleCard id="submenu" title="子菜单">
        <MenubarSubmenuExample />
      </ExampleCard>
      <ExampleCard id="with-icons" title="带图标">
        <MenubarWithIconsExample />
      </ExampleCard>
    </div>
  );
}
