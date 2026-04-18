import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type RowData,
  useReactTable,
} from '@tanstack/react-table';
import { CircleCheck, CircleDashed, LoaderCircle } from 'lucide-react';
import { useMemo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { PRIORITY_MAP, STATUS_MAP, type TaskPriority, type TaskStatus } from '../constants';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    headClassName?: string;
    cellClassName?: string;
  }
}

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

export function TaskTable({
  data,
  loading,
  onEdit,
  onDelete,
}: {
  data: TaskRow[];
  loading: boolean;
  onEdit: (row: TaskRow) => void;
  onDelete: (row: TaskRow) => void;
}) {
  const columns = useMemo<ColumnDef<TaskRow>[]>(
    () => [
      {
        accessorKey: 'name',
        header: '名称',
        cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
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
        meta: { headClassName: 'max-w-[240px]', cellClassName: 'max-w-[240px]' },
        cell: ({ row }) => (
          <span
            className="block max-w-[240px] truncate text-muted-foreground"
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
          <div className="flex items-center gap-1">
            <Button size="sm" variant="link" className="px-0" onClick={() => onEdit(row.original)}>
              编辑
            </Button>
            <Button
              size="sm"
              variant="link"
              className="px-0 text-destructive"
              onClick={() => onDelete(row.original)}
            >
              删除
            </Button>
          </div>
        ),
      },
    ],
    [onEdit, onDelete],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const colCount = columns.length;
  const rows = table.getRowModel().rows;

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-muted/50">
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id} className="hover:bg-transparent">
              {hg.headers.map((header) => (
                <TableHead key={header.id} className={header.column.columnDef.meta?.headClassName}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {loading && rows.length === 0 ? (
            Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={`sk-${i}`}>
                {Array.from({ length: colCount }).map((__, j) => (
                  <TableCell key={j}>
                    <Skeleton className="h-5 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={colCount} className="h-24 text-center text-muted-foreground">
                暂无数据
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={cell.column.columnDef.meta?.cellClassName}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
