import { Plus } from 'lucide-react';
import { useState } from 'react';

import { ProPagination } from '@/components/pro-ui/pro-pagination';
import { ProTable } from '@/components/pro-ui/pro-table';
import { Button } from '@/components/ui/button';
import { usePagination } from '@/hooks';
import { FastApiServices } from '@/services';

import { TaskDeleteDialog } from './components/task-delete-dialog';
import { TaskFormDrawer, type TaskFormMode } from './components/task-form-drawer';
import { TaskSearch, type TaskSearchValue } from './components/task-search';
import { useTaskColumns } from './components/task-table-columns';

export const handle = { name: '任务管理' };

export default function TaskPage() {
  const [search, setSearch] = useState<TaskSearchValue>({});

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<TaskFormMode>('create');
  const [editingRecord, setEditingRecord] = useState<FastAPI.Task | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletingRecord, setDeletingRecord] = useState<FastAPI.Task | null>(null);

  const { data, loading, pagination } = usePagination(
    ['task', 'list'],
    async ({ current, pageSize, ...rest }) => {
      const res = await FastApiServices.Task.getTasks({
        page: current,
        pageSize,
        ...rest,
      });
      return { total: res.total, list: res.data };
    },
    { params: search },
  );

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

  const columns = useTaskColumns({ onEdit: openEdit, onDelete: openDelete });

  return (
    <div className="space-y-4 p-6">
      <div className="text-lg font-medium">任务列表</div>
      <div className="flex items-center justify-between gap-2">
        <TaskSearch onSubmit={setSearch} />
        <Button onClick={openCreate}>
          <Plus data-icon="inline-start" />
          新建任务
        </Button>
      </div>
      <ProTable columns={columns} dataSource={data?.list ?? []} loading={loading} rowKey="id" />
      <ProPagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={pagination.total}
        onChange={pagination.onChange}
      />

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
