import { Plus } from 'lucide-react';
import { useState } from 'react';

import { ProPagination, ProTable } from '@/components/pro-ui';
import { Button } from '@/components/ui/button';
import { ModalActionType } from '@/constants';
import { usePagination } from '@/hooks';
import { FastApiServices } from '@/services';

import { getTaskColumns } from './components/task-columns';
import { TaskDeleteDialog } from './components/task-delete-dialog';
import { useTaskFormDrawer } from './components/task-form-drawer';
import { TaskSearch, type TaskSearchValue } from './components/task-search';

export const handle = { name: '任务管理' };

export default function TaskPage() {
  const [search, setSearch] = useState<TaskSearchValue>({});

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletingRecord, setDeletingRecord] = useState<FastAPI.Task | null>(null);

  const { data, loading, pagination, refresh } = usePagination(
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

  const taskFormDrawer = useTaskFormDrawer({
    handleOnFinish: refresh,
  });

  const openCreate = () => {
    taskFormDrawer.setModalParams({
      open: true,
      modalActionType: ModalActionType.CREATE,
      initialValues: undefined,
    });
  };

  const openEdit = (row: FastAPI.Task) => {
    taskFormDrawer.setModalParams({
      open: true,
      modalActionType: ModalActionType.EDIT,
      initialValues: row,
    });
  };

  const openDelete = (row: FastAPI.Task) => {
    setDeletingRecord(row);
    setDeleteOpen(true);
  };

  const columns = getTaskColumns({ onEdit: openEdit, onDelete: openDelete });

  return (
    <div className="space-y-4 p-6">
      <div className="text-lg font-medium">任务列表</div>
      <div className="flex items-center justify-between gap-2">
        <TaskSearch onSubmit={setSearch} />
        <Button onClick={openCreate}>
          <Plus />
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

      {taskFormDrawer.element}

      <TaskDeleteDialog
        open={deleteOpen}
        record={deletingRecord}
        onOpenChange={setDeleteOpen}
        onSuccess={refresh}
      />
    </div>
  );
}
