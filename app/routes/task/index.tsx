import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FastApiServices } from "@/services"
import { TaskSearch, type TaskSearchValue } from "./components/task-search"
import { TaskTable } from "./components/task-table"
import {
  TaskFormDrawer,
  type TaskFormMode,
} from "./components/task-form-drawer"
import { TaskDeleteDialog } from "./components/task-delete-dialog"

export const handle = { name: "任务管理" }

const PAGE_SIZE_OPTIONS = [10, 20, 50]

export default function TaskPage() {
  const [search, setSearch] = useState<TaskSearchValue>({})
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerMode, setDrawerMode] = useState<TaskFormMode>("create")
  const [editingRecord, setEditingRecord] = useState<FastAPI.Task | null>(null)

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deletingRecord, setDeletingRecord] = useState<FastAPI.Task | null>(
    null
  )

  const params = useMemo(
    () => ({ page, pageSize, ...search }),
    [page, pageSize, search]
  )

  const { data, isFetching } = useQuery({
    queryKey: ["task", "list", params],
    queryFn: () => FastApiServices.Task.getTasks(params),
  })

  const total = data?.total ?? 0
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  const openCreate = () => {
    setDrawerMode("create")
    setEditingRecord(null)
    setDrawerOpen(true)
  }

  const openEdit = (row: FastAPI.Task) => {
    setDrawerMode("edit")
    setEditingRecord(row)
    setDrawerOpen(true)
  }

  const openDelete = (row: FastAPI.Task) => {
    setDeletingRecord(row)
    setDeleteOpen(true)
  }

  return (
    <div className="space-y-4 p-6">
      <TaskSearch
        onSubmit={(v) => {
          setSearch(v)
          setPage(1)
        }}
      />
      <Card>
        <CardHeader>
          <CardTitle>任务列表</CardTitle>
          <CardAction>
            <Button onClick={openCreate}>
              <Plus data-icon="inline-start" />
              新建任务
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <TaskTable
            data={data?.data ?? []}
            loading={isFetching}
            onEdit={openEdit}
            onDelete={openDelete}
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>共 {total} 条</div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span>每页</span>
                <Select
                  value={String(pageSize)}
                  onValueChange={(v) => {
                    setPageSize(Number(v))
                    setPage(1)
                  }}
                >
                  <SelectTrigger size="sm" className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PAGE_SIZE_OPTIONS.map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  上一页
                </Button>
                <span className="text-foreground">
                  {page} / {totalPages}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  下一页
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <TaskFormDrawer
        open={drawerOpen}
        mode={drawerMode}
        record={editingRecord}
        onOpenChange={setDrawerOpen}
      />
      <TaskDeleteDialog
        open={deleteOpen}
        record={deletingRecord}
        onOpenChange={setDeleteOpen}
      />
    </div>
  )
}
