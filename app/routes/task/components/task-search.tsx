import { useDebounceFn, useUpdateEffect } from 'ahooks';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
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

const STATUS_FILTER_OPTIONS = [{ value: ALL_VALUE, label: '全部状态' }, ...STATUS_OPTIONS];

const PRIORITY_FILTER_OPTIONS = [{ value: ALL_VALUE, label: '全部优先级' }, ...PRIORITY_OPTIONS];

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
      <Select
        items={STATUS_FILTER_OPTIONS}
        value={status}
        onValueChange={(value) => setStatus(value ?? ALL_VALUE)}
      >
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="状态" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {STATUS_FILTER_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        items={PRIORITY_FILTER_OPTIONS}
        value={priority}
        onValueChange={(value) => setPriority(value ?? ALL_VALUE)}
      >
        <SelectTrigger size="sm" className="w-32">
          <SelectValue placeholder="优先级" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {PRIORITY_FILTER_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
