import { useState } from 'react';

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
      <p>当前日期：{date ? date.toLocaleDateString('zh-CN') : '未选择'}</p>
    </div>
  );
}
