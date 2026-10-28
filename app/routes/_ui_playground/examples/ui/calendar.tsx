import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar } from '@/components/ui/calendar';

export function BasicExample() {
  const [date, setDate] = useState<Date>();
  return (
    <div id="example-calendar" className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mx-auto w-fit max-w-full"
      />
      <div>当前日期：{date ? date.toLocaleDateString('zh-CN') : '未选择'}</div>
    </div>
  );
}

export function MultipleExample() {
  const [dates, setDates] = useState<Date[] | undefined>([]);
  return (
    <div className="space-y-3">
      <Calendar mode="multiple" selected={dates} onSelect={setDates} className="mx-auto w-fit" />
      <div role="status">已选 {dates?.length ?? 0} 天</div>
    </div>
  );
}

export function RangeExample() {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <div className="space-y-3">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        disabled={{ dayOfWeek: [0, 6] }}
        excludeDisabled
        className="mx-auto w-fit"
      />
      <div role="status">
        {range?.from?.toLocaleDateString('zh-CN') ?? '未选择'} —{' '}
        {range?.to?.toLocaleDateString('zh-CN') ?? '请选择结束日期'}
      </div>
    </div>
  );
}
