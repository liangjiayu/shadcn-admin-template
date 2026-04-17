import type { LucideIcon } from "lucide-react"
import { House, LayoutGrid, ListTodo } from "lucide-react"

export type SideMenuItem = {
  path: string
  name: string
  icon?: LucideIcon
  children?: SideMenuItem[]
}

const sideMenuConfig: SideMenuItem[] = [
  { path: "/", name: "首页", icon: House },
  { path: "/task-demo", name: "任务演示", icon: LayoutGrid },
  { path: "/task", name: "任务管理", icon: ListTodo },
]

export default sideMenuConfig
