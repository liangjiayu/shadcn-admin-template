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

export function TaskSearch({ onSubmit }: { onSubmit: (value: TaskSearchValue) => void }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<TaskPriority | ''>('');

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
        status: status || undefined,
        priority: priority || undefined,
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
      <Select value={status} onValueChange={(v) => setStatus(v as TaskStatus)}>
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="状态" />
        </SelectTrigger>
        <SelectContent>
          {STATUS_OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={priority} onValueChange={(v) => setPriority(v as TaskPriority)}>
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="优先级" />
        </SelectTrigger>
        <SelectContent>
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
