import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

type NavigationComponent = {
  slug: string;
  name: string;
  Content: LazyExoticComponent<ComponentType>;
};

type NavigationLibrary = {
  name: string;
  defaultComponent: string;
  groups: { id: string; name: string; components: NavigationComponent[] }[];
};

// 组件库、分类顺序和组件入口统一在此登记，用例内容由各演示页面维护。
export const libraries = {
  ui: {
    name: 'UI 组件',
    defaultComponent: 'button',
    groups: [
      {
        id: 'basic',
        name: '基础',
        components: [
          {
            slug: 'avatar',
            name: 'Avatar 头像',
            Content: lazy(() => import('./examples/ui/avatar')),
          },
          { slug: 'badge', name: 'Badge 徽章', Content: lazy(() => import('./examples/ui/badge')) },
          {
            slug: 'button',
            name: 'Button 按钮',
            Content: lazy(() => import('./examples/ui/button')),
          },
          {
            slug: 'button-group',
            name: 'ButtonGroup 按钮组',
            Content: lazy(() => import('./examples/ui/button-group')),
          },
          { slug: 'kbd', name: 'Kbd 快捷键', Content: lazy(() => import('./examples/ui/kbd')) },
          { slug: 'label', name: 'Label 标签', Content: lazy(() => import('./examples/ui/label')) },
          {
            slug: 'separator',
            name: 'Separator 分隔线',
            Content: lazy(() => import('./examples/ui/separator')),
          },
        ],
      },
      {
        id: 'navigation',
        name: '导航',
        components: [
          {
            slug: 'accordion',
            name: 'Accordion 手风琴',
            Content: lazy(() => import('./examples/ui/accordion')),
          },
          {
            slug: 'breadcrumb',
            name: 'Breadcrumb 面包屑',
            Content: lazy(() => import('./examples/ui/breadcrumb')),
          },
          {
            slug: 'collapsible',
            name: 'Collapsible 折叠内容',
            Content: lazy(() => import('./examples/ui/collapsible')),
          },
          {
            slug: 'context-menu',
            name: 'ContextMenu 右键菜单',
            Content: lazy(() => import('./examples/ui/context-menu')),
          },
          {
            slug: 'dropdown-menu',
            name: 'DropdownMenu 下拉菜单',
            Content: lazy(() => import('./examples/ui/dropdown-menu')),
          },
          {
            slug: 'menubar',
            name: 'Menubar 菜单栏',
            Content: lazy(() => import('./examples/ui/menubar')),
          },
          {
            slug: 'navigation-menu',
            name: 'NavigationMenu 导航菜单',
            Content: lazy(() => import('./examples/ui/navigation-menu')),
          },
          {
            slug: 'pagination',
            name: 'Pagination 分页',
            Content: lazy(() => import('./examples/ui/pagination')),
          },
          { slug: 'tabs', name: 'Tabs 页签', Content: lazy(() => import('./examples/ui/tabs')) },
        ],
      },
      {
        id: 'form',
        name: '数据录入',
        components: [
          {
            slug: 'calendar',
            name: 'Calendar 日历',
            Content: lazy(() => import('./examples/ui/calendar')),
          },
          {
            slug: 'checkbox',
            name: 'Checkbox 复选框',
            Content: lazy(() => import('./examples/ui/checkbox')),
          },
          {
            slug: 'combobox',
            name: 'Combobox 搜索选择',
            Content: lazy(() => import('./examples/ui/combobox')),
          },
          {
            slug: 'field',
            name: 'Field 表单字段',
            Content: lazy(() => import('./examples/ui/field')),
          },
          {
            slug: 'input',
            name: 'Input 输入框',
            Content: lazy(() => import('./examples/ui/input')),
          },
          {
            slug: 'input-group',
            name: 'InputGroup 输入框组合',
            Content: lazy(() => import('./examples/ui/input-group')),
          },
          {
            slug: 'native-select',
            name: 'NativeSelect 原生选择器',
            Content: lazy(() => import('./examples/ui/native-select')),
          },
          {
            slug: 'radio-group',
            name: 'RadioGroup 单选组',
            Content: lazy(() => import('./examples/ui/radio-group')),
          },
          {
            slug: 'select',
            name: 'Select 选择器',
            Content: lazy(() => import('./examples/ui/select')),
          },
          {
            slug: 'slider',
            name: 'Slider 滑块',
            Content: lazy(() => import('./examples/ui/slider')),
          },
          {
            slug: 'switch',
            name: 'Switch 开关',
            Content: lazy(() => import('./examples/ui/switch')),
          },
          {
            slug: 'textarea',
            name: 'Textarea 多行输入',
            Content: lazy(() => import('./examples/ui/textarea')),
          },
          {
            slug: 'toggle',
            name: 'Toggle 切换按钮',
            Content: lazy(() => import('./examples/ui/toggle')),
          },
          {
            slug: 'toggle-group',
            name: 'ToggleGroup 切换按钮组',
            Content: lazy(() => import('./examples/ui/toggle-group')),
          },
        ],
      },
      {
        id: 'display',
        name: '数据展示',
        components: [
          {
            slug: 'aspect-ratio',
            name: 'AspectRatio 固定比例',
            Content: lazy(() => import('./examples/ui/aspect-ratio')),
          },
          { slug: 'card', name: 'Card 卡片', Content: lazy(() => import('./examples/ui/card')) },
          { slug: 'item', name: 'Item 列表项', Content: lazy(() => import('./examples/ui/item')) },
          {
            slug: 'scroll-area',
            name: 'ScrollArea 滚动区域',
            Content: lazy(() => import('./examples/ui/scroll-area')),
          },
          { slug: 'table', name: 'Table 表格', Content: lazy(() => import('./examples/ui/table')) },
        ],
      },
      {
        id: 'feedback',
        name: '反馈',
        components: [
          {
            slug: 'alert',
            name: 'Alert 警告信息',
            Content: lazy(() => import('./examples/ui/alert')),
          },
          {
            slug: 'alert-dialog',
            name: 'AlertDialog 确认对话框',
            Content: lazy(() => import('./examples/ui/alert-dialog')),
          },
          {
            slug: 'dialog',
            name: 'Dialog 对话框',
            Content: lazy(() => import('./examples/ui/dialog')),
          },
          {
            slug: 'drawer',
            name: 'Drawer 抽屉',
            Content: lazy(() => import('./examples/ui/drawer')),
          },
          {
            slug: 'empty',
            name: 'Empty 空状态',
            Content: lazy(() => import('./examples/ui/empty')),
          },
          {
            slug: 'hover-card',
            name: 'HoverCard 悬浮卡片',
            Content: lazy(() => import('./examples/ui/hover-card')),
          },
          {
            slug: 'popover',
            name: 'Popover 气泡面板',
            Content: lazy(() => import('./examples/ui/popover')),
          },
          {
            slug: 'progress',
            name: 'Progress 进度条',
            Content: lazy(() => import('./examples/ui/progress')),
          },
          {
            slug: 'sheet',
            name: 'Sheet 侧边面板',
            Content: lazy(() => import('./examples/ui/sheet')),
          },
          {
            slug: 'skeleton',
            name: 'Skeleton 骨架屏',
            Content: lazy(() => import('./examples/ui/skeleton')),
          },
          {
            slug: 'spinner',
            name: 'Spinner 加载图标',
            Content: lazy(() => import('./examples/ui/spinner')),
          },
          {
            slug: 'toast',
            name: 'Toast 消息通知',
            Content: lazy(() => import('./examples/ui/toast')),
          },
          {
            slug: 'tooltip',
            name: 'Tooltip 文字提示',
            Content: lazy(() => import('./examples/ui/tooltip')),
          },
        ],
      },
    ],
  },
  'pro-ui': {
    name: 'Pro UI 组件',
    defaultComponent: 'pro-pagination',
    groups: [
      {
        id: 'basic',
        name: '基础',
        components: [
          {
            slug: 'pro-pagination',
            name: 'ProPagination 增强分页',
            Content: lazy(() => import('./examples/pro-ui/pro-pagination')),
          },
          {
            slug: 'pro-table',
            name: 'ProTable 增强表格',
            Content: lazy(() => import('./examples/pro-ui/pro-table')),
          },
          {
            slug: 'pro-confirm',
            name: 'ProConfirm 确认弹窗',
            Content: lazy(() => import('./examples/pro-ui/pro-confirm')),
          },
        ],
      },
    ],
  },
} satisfies Record<string, NavigationLibrary>;

export type PlaygroundLibrary = keyof typeof libraries;

/** 导航和路由使用相同的地址规则，避免分别维护组件链接。 */
export function componentPath(library: PlaygroundLibrary, slug: string) {
  return `/_ui_playground/${library}/${slug}`;
}

export const components = (Object.keys(libraries) as PlaygroundLibrary[]).flatMap((library) =>
  libraries[library].groups.flatMap((group) =>
    group.components.map((component) => ({
      ...component,
      library,
      path: componentPath(library, component.slug),
    })),
  ),
);

export const libraryDefaults = {
  ui: componentPath('ui', libraries.ui.defaultComponent),
  'pro-ui': componentPath('pro-ui', libraries['pro-ui'].defaultComponent),
};

export const defaultComponentPath = libraryDefaults.ui;

/** 仅允许访问已登记的组件，未知组件由路由展示 404。 */
export function findComponent(pathname: string) {
  return components.find((component) => component.path === pathname.replace(/\/$/, ''));
}
