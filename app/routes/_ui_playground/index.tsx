import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { BasicExamples } from './components/basic-examples';
import { DisplayExamples } from './components/display-examples';
import { FeedbackExamples } from './components/feedback-examples';
import { FormExamples } from './components/form-examples';
import { NavigationExamples } from './components/navigation-examples';
import { OverlayExamples } from './components/overlay-examples';

export const handle = { name: '组件演示' };

const categories = [
  {
    value: 'basic',
    name: '基础',
    components: ['button', 'button-group', 'badge', 'avatar', 'separator', 'label', 'kbd'],
    render: BasicExamples,
  },
  {
    value: 'form',
    name: '表单',
    components: [
      'input',
      'textarea',
      'checkbox',
      'radio-group',
      'switch',
      'select',
      'native-select',
      'combobox',
      'calendar',
      'slider',
      'toggle',
      'toggle-group',
      'input-group',
      'field',
    ],
    render: FormExamples,
  },
  {
    value: 'display',
    name: '数据展示',
    components: ['card', 'table', 'item', 'aspect-ratio', 'scroll-area'],
    render: DisplayExamples,
  },
  {
    value: 'feedback',
    name: '反馈',
    components: ['alert', 'empty', 'progress', 'skeleton', 'spinner', 'toast'],
    render: FeedbackExamples,
  },
  {
    value: 'overlay',
    name: '浮层',
    components: [
      'dialog',
      'alert-dialog',
      'drawer',
      'sheet',
      'popover',
      'tooltip',
      'hover-card',
      'context-menu',
      'dropdown-menu',
    ],
    render: OverlayExamples,
  },
  {
    value: 'navigation',
    name: '导航',
    components: [
      'accordion',
      'collapsible',
      'breadcrumb',
      'menubar',
      'navigation-menu',
      'pagination',
      'tabs',
    ],
    render: NavigationExamples,
  },
];

export default function UiPlayground() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="space-y-2">
        <h1 id="playground-title" className="text-xl font-semibold">
          UI 组件演示
        </h1>
        <p className="text-sm text-muted-foreground">
          共 {categories.reduce((total, category) => total + category.components.length, 0)}{' '}
          个组件，按分类查看基础用法并体验交互效果。演示数据仅在本次访问中保留。
        </p>
      </div>
      <Tabs defaultValue="basic" className="gap-6">
        <div className="min-w-0 overflow-x-auto pb-1">
          <TabsList aria-label="组件分类">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="gap-2 px-3">
                {category.name}
                <span className="text-xs text-muted-foreground">{category.components.length}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories.map(({ value, render: Examples }) => (
          <TabsContent key={value} value={value} keepMounted>
            <Examples />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
