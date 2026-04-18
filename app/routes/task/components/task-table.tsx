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

type TaskRow = FastAPI.Task;

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
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>名称</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>优先级</TableHead>
          <TableHead>负责人</TableHead>
          <TableHead className="max-w-[240px]">描述</TableHead>
          <TableHead>创建时间</TableHead>
          <TableHead>截止时间</TableHead>
          <TableHead className="text-right">操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading && data.length === 0 ? (
          Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={`sk-${i}`}>
              {Array.from({ length: 8 }).map((__, j) => (
                <TableCell key={j}>
                  <Skeleton className="h-5 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : data.length === 0 ? (
          <TableRow>
            <TableCell colSpan={8} className="h-24 text-center text-muted-foreground">
              暂无数据
            </TableCell>
          </TableRow>
        ) : (
          data.map((row) => {
            const statusCfg = STATUS_MAP[row.status as TaskStatus];
            const priorityCfg = PRIORITY_MAP[row.priority as TaskPriority];
            return (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <Badge variant={statusCfg?.variant}>{statusCfg?.text}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={priorityCfg?.variant}>{priorityCfg?.text}</Badge>
                </TableCell>
                <TableCell>{row.assignee}</TableCell>
                <TableCell
                  className="max-w-[240px] truncate text-muted-foreground"
                  title={row.description}
                >
                  {row.description || '-'}
                </TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="link" onClick={() => onEdit(row)}>
                    编辑
                  </Button>
                  <Button
                    size="sm"
                    variant="link"
                    className="text-destructive"
                    onClick={() => onDelete(row)}
                  >
                    删除
                  </Button>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
}
