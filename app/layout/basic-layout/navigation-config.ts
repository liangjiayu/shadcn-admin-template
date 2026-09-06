import type { LucideIcon } from 'lucide-react';
import { House, LayoutList, ListTodo, ShieldAlert } from 'lucide-react';

export type NavigationItem = {
  path: string;
  name: string;
  icon?: LucideIcon;
  children?: NavigationItem[];
};

const navigationItems: NavigationItem[] = [
  { path: '/', name: '首页', icon: House },
  { path: '/task', name: '任务管理', icon: ListTodo },
  { path: '/task-cards', name: '任务卡片', icon: LayoutList },
  {
    path: '/exception',
    name: '异常页',
    icon: ShieldAlert,
    children: [
      { path: '/exception/403', name: '403' },
      { path: '/exception/404', name: '404' },
      { path: '/exception/500', name: '500' },
    ],
  },
];

export default navigationItems;
