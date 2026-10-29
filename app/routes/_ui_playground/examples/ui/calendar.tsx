import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar } from '@/components/ui/calendar';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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

function MultipleExample() {
  const [dates, setDates] = useState<Date[] | undefined>([]);
  return (
    <div className="space-y-3">
      <Calendar mode="multiple" selected={dates} onSelect={setDates} className="mx-auto w-fit" />
      <div role="status">已选 {dates?.length ?? 0} 天</div>
    </div>
  );
}

function RangeExample() {
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

export default function CalendarExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="选择单个日期，可切换月份。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="multiple" title="多日选择" description="选择多个独立日期，再次点击可取消。">
        <MultipleExample />
      </ExampleCard>
      <ExampleCard id="range" title="范围与禁用日期" description="选择起止日期，周末不可选。">
        <RangeExample />
      </ExampleCard>
    </div>
  );
}
