import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { FastApiServices } from "@/services"
import { refreshQuery } from "@/utils/query-client"

export function TaskDeleteDialog({
  open,
  record,
  onOpenChange,
}: {
  open: boolean
  record: FastAPI.Task | null
  onOpenChange: (open: boolean) => void
}) {
  const mutation = useMutation({
    mutationFn: (id: number) => FastApiServices.Task.deleteTask({ id }),
    onSuccess: () => {
      toast.success("删除成功")
      refreshQuery(["task", "list"])
      onOpenChange(false)
    },
  })

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>删除任务</AlertDialogTitle>
          <AlertDialogDescription>
            确定要删除任务「{record?.name}」吗？该操作不可恢复。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={(e) => {
              e.preventDefault()
              if (record) mutation.mutate(record.id)
            }}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "删除中..." : "确认删除"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
