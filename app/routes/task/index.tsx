import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FastApiServices } from '@/services';

import { TaskDeleteDialog } from './components/task-delete-dialog';
import { TaskFormDrawer, type TaskFormMode } from './components/task-form-drawer';
import { TaskSearch, type TaskSearchValue } from './components/task-search';
import { TaskTable } from './components/task-table';

export const handle = { name: '任务管理' };

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export default function TaskPage() {
  const [search, setSearch] = useState<TaskSearchValue>({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<TaskFormMode>('create');
  const [editingRecord, setEditingRecord] = useState<FastAPI.Task | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletingRecord, setDeletingRecord] = useState<FastAPI.Task | null>(null);

  const params = useMemo(() => ({ page, pageSize, ...search }), [page, pageSize, search]);

  const { data, isFetching } = useQuery({
    queryKey: ['task', 'list', params],
    queryFn: () => FastApiServices.Task.getTasks(params),
  });

  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const openCreate = () => {
    setDrawerMode('create');
    setEditingRecord(null);
    setDrawerOpen(true);
  };

  const openEdit = (row: FastAPI.Task) => {
    setDrawerMode('edit');
    setEditingRecord(row);
    setDrawerOpen(true);
  };

  const openDelete = (row: FastAPI.Task) => {
    setDeletingRecord(row);
    setDeleteOpen(true);
  };

  return (
    <div className="space-y-4 p-6">
      <TaskSearch
        onSubmit={(v) => {
          setSearch(v);
          setPage(1);
        }}
      />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium">任务列表</h2>
          <Button onClick={openCreate}>
            <Plus data-icon="inline-start" />
            新建任务
          </Button>
        </div>
        <TaskTable
          data={data?.data ?? []}
          loading={isFetching}
          onEdit={openEdit}
          onDelete={openDelete}
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div>共 {total} 条</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>每页行数</span>
              <Select
                value={String(pageSize)}
                onValueChange={(v) => {
                  setPageSize(Number(v));
                  setPage(1);
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
            <div className="text-foreground">
              第 {page} / {totalPages} 页
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                variant="outline"
                className="size-8"
                disabled={page <= 1}
                onClick={() => setPage(1)}
              >
                <ChevronsLeft className="size-4" />
                <span className="sr-only">首页</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="size-8"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="size-4" />
                <span className="sr-only">上一页</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="size-8"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                <ChevronRight className="size-4" />
                <span className="sr-only">下一页</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="size-8"
                disabled={page >= totalPages}
                onClick={() => setPage(totalPages)}
              >
                <ChevronsRight className="size-4" />
                <span className="sr-only">尾页</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <TaskFormDrawer
        open={drawerOpen}
        mode={drawerMode}
        record={editingRecord}
        onOpenChange={setDrawerOpen}
      />
      <TaskDeleteDialog open={deleteOpen} record={deletingRecord} onOpenChange={setDeleteOpen} />
    </div>
  );
}
