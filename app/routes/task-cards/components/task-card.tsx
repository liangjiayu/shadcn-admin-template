import { CalendarDays } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { PRIORITY_MAP, STATUS_MAP, type TaskPriority, type TaskStatus } from '../../task/constants';

type Props = {
  task: FastAPI.Task;
};

export function TaskCard({ task }: Props) {
  const status = STATUS_MAP[task.status as TaskStatus];
  const priority = PRIORITY_MAP[task.priority as TaskPriority];
  const initial = task.assignee?.slice(0, 1).toUpperCase() || '?';

  return (
    <Card className="cursor-pointer transition-all hover:-translate-y-0.5 hover:ring-foreground/20">
      <CardHeader>
        <CardTitle className="truncate" title={task.name}>
          {task.name}
        </CardTitle>
        <CardAction>{status && <Badge variant={status.variant}>{status.text}</Badge>}</CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
          {task.description || '暂无描述'}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">优先级</span>
          {priority && <Badge variant={priority.variant}>{priority.text}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarFallback>{initial}</AvatarFallback>
          </Avatar>
          <span className="truncate">{task.assignee || '未分配'}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="size-3.5" />
          <span>{task.deadline}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
