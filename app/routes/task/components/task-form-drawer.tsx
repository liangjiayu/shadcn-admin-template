import { useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { FastApiServices } from "@/services"
import { refreshQuery } from "@/utils/query-client"
import {
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  type TaskPriority,
  type TaskStatus,
} from "../constants"

const schema = z.object({
  name: z.string().min(1, "请输入任务名称"),
  status: z.enum(["todo", "progress", "done"]),
  priority: z.enum(["low", "medium", "high"]),
  assignee: z.string().min(1, "请输入负责人"),
  description: z.string(),
  deadline: z.string().min(1, "请选择截止时间"),
})

type FormValues = z.infer<typeof schema>

const defaultValues: FormValues = {
  name: "",
  status: "todo",
  priority: "medium",
  assignee: "",
  description: "",
  deadline: "",
}

export type TaskFormMode = "create" | "edit"

export function TaskFormDrawer({
  open,
  mode,
  record,
  onOpenChange,
}: {
  open: boolean
  mode: TaskFormMode
  record: FastAPI.Task | null
  onOpenChange: (open: boolean) => void
}) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  useEffect(() => {
    if (!open) return
    if (mode === "edit" && record) {
      reset({
        name: record.name,
        status: record.status,
        priority: record.priority,
        assignee: record.assignee,
        description: record.description ?? "",
        deadline: record.deadline,
      })
    } else {
      reset(defaultValues)
    }
  }, [open, mode, record, reset])

  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      if (mode === "edit" && record) {
        return FastApiServices.Task.updateTask({ id: record.id }, values)
      }
      return FastApiServices.Task.createTask(values)
    },
    onSuccess: () => {
      toast.success(mode === "edit" ? "更新成功" : "创建成功")
      refreshQuery(["task", "list"])
      onOpenChange(false)
    },
  })

  const onSubmit = handleSubmit((values) => mutation.mutate(values))

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{mode === "edit" ? "编辑任务" : "新建任务"}</SheetTitle>
        </SheetHeader>
        <form onSubmit={onSubmit} className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="task-name">名称</Label>
              <Input id="task-name" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label>状态</Label>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => field.onChange(v as TaskStatus)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-1.5">
              <Label>优先级</Label>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => field.onChange(v as TaskPriority)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITY_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="task-assignee">负责人</Label>
              <Input id="task-assignee" {...register("assignee")} />
              {errors.assignee && (
                <p className="text-xs text-destructive">
                  {errors.assignee.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="task-deadline">截止时间</Label>
              <Input
                id="task-deadline"
                type="date"
                {...register("deadline")}
              />
              {errors.deadline && (
                <p className="text-xs text-destructive">
                  {errors.deadline.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="task-description">描述</Label>
              <Textarea
                id="task-description"
                rows={4}
                {...register("description")}
              />
            </div>
          </div>
        </form>
        <SheetFooter className="flex-row justify-end gap-2 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            取消
          </Button>
          <Button onClick={onSubmit} disabled={mutation.isPending}>
            {mutation.isPending ? "提交中..." : "确定"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
