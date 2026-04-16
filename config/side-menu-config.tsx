import type { LucideIcon } from "lucide-react"
import { House, LayoutGrid } from "lucide-react"

export type SideMenuItem = {
  path: string
  name: string
  icon?: LucideIcon
  children?: SideMenuItem[]
}

const sideMenuConfig: SideMenuItem[] = [
  { path: "/", name: "首页", icon: House },
  { path: "/task-demo", name: "任务演示", icon: LayoutGrid },
]

export default sideMenuConfig
