import { CircleCheck, CircleDashed, LoaderCircle } from 'lucide-react';
import { useMemo } from 'react';

import type { ProColumn } from '@/components/pro-ui/pro-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { PRIORITY_MAP, STATUS_MAP, type TaskPriority, type TaskStatus } from '../constants';

type TaskRow = FastAPI.Task;

const STATUS_ICON: Record<TaskStatus, React.ComponentType<{ className?: string }>> = {
  todo: CircleDashed,
  progress: LoaderCircle,
  done: CircleCheck,
};

const STATUS_ICON_CLASS: Record<TaskStatus, string> = {
  todo: 'text-muted-foreground',
  progress: 'text-muted-foreground',
  done: 'text-emerald-500',
};

type Options = {
  onEdit: (row: TaskRow) => void;
  onDelete: (row: TaskRow) => void;
};

export function useTaskColumns({ onEdit, onDelete }: Options): ProColumn<TaskRow>[] {
  return useMemo(
    () => [
      {
        dataIndex: 'name',
        title: '名称',
        render: (_, row) => <span className="font-medium">{row.name}</span>,
      },
      {
        dataIndex: 'status',
        title: '状态',
        render: (_, row) => {
          const status = row.status as TaskStatus;
          const cfg = STATUS_MAP[status];
          const Icon = STATUS_ICON[status];
          return (
            <Badge variant="outline" className="gap-1 px-2 py-0.5 font-normal">
              {Icon && <Icon className={`size-3.5 ${STATUS_ICON_CLASS[status]}`} />}
              {cfg?.text}
            </Badge>
          );
        },
      },
      {
        dataIndex: 'priority',
        title: '优先级',
        render: (_, row) => {
          const cfg = PRIORITY_MAP[row.priority as TaskPriority];
          return (
            <Badge variant="outline" className="px-2 py-0.5 font-normal">
              {cfg?.text}
            </Badge>
          );
        },
      },
      { dataIndex: 'assignee', title: '负责人' },
      {
        dataIndex: 'description',
        title: '描述',
        headClassName: 'max-w-[240px]',
        className: 'max-w-[240px]',
        render: (_, row) => (
          <span
            className="block max-w-[240px] truncate text-muted-foreground"
            title={row.description}
          >
            {row.description || '-'}
          </span>
        ),
      },
      { dataIndex: 'createdAt', title: '创建时间' },
      { dataIndex: 'deadline', title: '截止时间' },
      {
        key: 'actions',
        title: '操作',
        render: (_, row) => (
          <div className="flex items-center gap-1">
            <Button size="sm" variant="link" className="px-0" onClick={() => onEdit(row)}>
              编辑
            </Button>
            <Button
              size="sm"
              variant="link"
              className="px-0 text-destructive"
              onClick={() => onDelete(row)}
            >
              删除
            </Button>
          </div>
        ),
      },
    ],
    [onEdit, onDelete],
  );
}
