import type { ColumnDef } from '@tanstack/react-table';
import { CircleCheck, CircleDashed, LoaderCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

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

export function getTaskColumns({ onEdit, onDelete }: Options): ColumnDef<TaskRow>[] {
  return [
    {
      accessorKey: 'name',
      header: '名称',
    },
    {
      accessorKey: 'status',
      header: '状态',
      cell: ({ row }) => {
        const status = row.original.status as TaskStatus;
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
      accessorKey: 'priority',
      header: '优先级',
      cell: ({ row }) => {
        const cfg = PRIORITY_MAP[row.original.priority as TaskPriority];
        return (
          <Badge variant="outline" className="px-2 py-0.5 font-normal">
            {cfg?.text}
          </Badge>
        );
      },
    },
    { accessorKey: 'assignee', header: '负责人' },
    {
      accessorKey: 'description',
      header: '描述',
      cell: ({ row }) => (
        <span
          className="block max-w-60 truncate text-muted-foreground"
          title={row.original.description}
        >
          {row.original.description || '-'}
        </span>
      ),
    },
    { accessorKey: 'createdAt', header: '创建时间' },
    { accessorKey: 'deadline', header: '截止时间' },
    {
      id: 'actions',
      header: '操作',
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => onEdit(row.original)}>
            编辑
          </button>
          <button type="button" className="text-destructive" onClick={() => onDelete(row.original)}>
            删除
          </button>
        </div>
      ),
    },
  ];
}
