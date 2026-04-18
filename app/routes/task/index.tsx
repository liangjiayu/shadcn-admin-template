import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { FastApiServices } from '@/services';

import { TaskDeleteDialog } from './components/task-delete-dialog';
import { TaskFormDrawer, type TaskFormMode } from './components/task-form-drawer';
import { TaskPagination } from './components/task-pagination';
import { TaskSearch, type TaskSearchValue } from './components/task-search';
import { TaskTable } from './components/task-table';

export const handle = { name: '任务管理' };

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
      <div className="text-lg font-medium">任务列表</div>
      <div className="flex items-center justify-between gap-2">
        <TaskSearch
          onSubmit={(v) => {
            setSearch(v);
            setPage(1);
          }}
        />
        <Button onClick={openCreate}>
          <Plus data-icon="inline-start" />
          新建任务
        </Button>
      </div>
      <div className="space-y-4">
        <TaskTable
          data={data?.data ?? []}
          loading={isFetching}
          onEdit={openEdit}
          onDelete={openDelete}
        />
        <TaskPagination
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setPage(1);
          }}
        />
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
