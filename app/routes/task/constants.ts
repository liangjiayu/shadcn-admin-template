import type { VariantProps } from "class-variance-authority"
import type { badgeVariants } from "@/components/ui/badge"

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>

export type TaskStatus = "todo" | "progress" | "done"
export type TaskPriority = "low" | "medium" | "high"

export const STATUS_MAP: Record<
  TaskStatus,
  { text: string; variant: BadgeVariant }
> = {
  todo: { text: "待办", variant: "secondary" },
  progress: { text: "进行中", variant: "default" },
  done: { text: "已完成", variant: "outline" },
}

export const PRIORITY_MAP: Record<
  TaskPriority,
  { text: string; variant: BadgeVariant }
> = {
  low: { text: "低", variant: "secondary" },
  medium: { text: "中", variant: "default" },
  high: { text: "高", variant: "destructive" },
}

export const STATUS_OPTIONS = (Object.keys(STATUS_MAP) as TaskStatus[]).map(
  (value) => ({ value, label: STATUS_MAP[value].text })
)

export const PRIORITY_OPTIONS = (
  Object.keys(PRIORITY_MAP) as TaskPriority[]
).map((value) => ({ value, label: PRIORITY_MAP[value].text }))
