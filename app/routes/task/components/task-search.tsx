import { useEffect, useRef, useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { PRIORITY_OPTIONS, STATUS_OPTIONS, type TaskPriority, type TaskStatus } from '../constants';

export type TaskSearchValue = {
  name?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
};

const ALL_VALUE = '__all__';

export function TaskSearch({ onSubmit }: { onSubmit: (value: TaskSearchValue) => void }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<string>(ALL_VALUE);
  const [priority, setPriority] = useState<string>(ALL_VALUE);

  const onSubmitRef = useRef(onSubmit);
  onSubmitRef.current = onSubmit;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      onSubmitRef.current({
        name: name.trim() || undefined,
        status: status === ALL_VALUE ? undefined : (status as TaskStatus),
        priority: priority === ALL_VALUE ? undefined : (priority as TaskPriority),
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [name, status, priority]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Input
        className="h-8 w-[180px] lg:w-[260px]"
        placeholder="按名称筛选..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="状态" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL_VALUE}>全部状态</SelectItem>
          {STATUS_OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={priority} onValueChange={setPriority}>
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="优先级" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL_VALUE}>全部优先级</SelectItem>
          {PRIORITY_OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
