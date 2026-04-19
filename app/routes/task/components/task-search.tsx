import { useDebounceFn, useUpdateEffect } from 'ahooks';
import { useState } from 'react';

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

type Props = {
  onSubmit: (value: TaskSearchValue) => void;
};

export function TaskSearch({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<string>(ALL_VALUE);
  const [priority, setPriority] = useState<string>(ALL_VALUE);

  const submit = () => {
    onSubmit({
      name: name.trim() || undefined,
      status: status === ALL_VALUE ? undefined : (status as TaskStatus),
      priority: priority === ALL_VALUE ? undefined : (priority as TaskPriority),
    });
  };

  const { run: debouncedSubmit } = useDebounceFn(submit, { wait: 300 });

  useUpdateEffect(() => {
    debouncedSubmit();
  }, [name]);

  useUpdateEffect(() => {
    submit();
  }, [status, priority]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Input
        className="h-8 w-45 lg:w-65"
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
