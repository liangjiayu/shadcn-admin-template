import { addDays } from 'date-fns';
import * as React from 'react';
import { type DateRange } from 'react-day-picker';
import { zhCN } from 'react-day-picker/locale';

import { Calendar, CalendarDayButton } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';

import { ExampleCard } from '../../components/example-card';

const calendarToday = new Date();

function CalendarDemoExample() {
  const [date, setDate] = React.useState<Date | undefined>(calendarToday);
  return (
    <Calendar
      locale={zhCN}
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
      captionLayout="dropdown"
    />
  );
}

function CalendarBasicExample() {
  return <Calendar locale={zhCN} mode="single" className="rounded-lg border" />;
}

function CalendarRangeCalendarExample() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(calendarToday.getFullYear(), 0, 12),
    to: addDays(new Date(calendarToday.getFullYear(), 0, 12), 30),
  });
  return (
    <Calendar
      locale={zhCN}
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  );
}

function CalendarMonthAndYearSelectorExample() {
  return (
    <Calendar locale={zhCN} mode="single" captionLayout="dropdown" className="rounded-lg border" />
  );
}

function CalendarBookedDatesExample() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(calendarToday.getFullYear(), 0, 6),
  );
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(calendarToday.getFullYear(), 0, 12 + i),
  );
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          locale={zhCN}
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          disabled={bookedDates}
          modifiers={{
            booked: bookedDates,
          }}
          modifiersClassNames={{
            booked: '[&>button]:line-through opacity-100',
          }}
        />
      </CardContent>
    </Card>
  );
}

function CalendarPriceDayButton({
  children,
  modifiers,
  day,
  ...props
}: React.ComponentProps<typeof CalendarDayButton>) {
  const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6;
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {!modifiers.outside && <span>{isWeekend ? '$120' : '$100'}</span>}
    </CalendarDayButton>
  );
}

function CalendarCustomCellSizeExample() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(calendarToday.getFullYear(), 11, 8),
    to: addDays(new Date(calendarToday.getFullYear(), 11, 8), 10),
  });
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          locale={zhCN}
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(12)]"
          formatters={{
            formatMonthDropdown: (date) => {
              return date.toLocaleString('zh-CN', { month: 'long' });
            },
          }}
          components={{
            DayButton: CalendarPriceDayButton,
          }}
        />
      </CardContent>
    </Card>
  );
}

function CalendarWeekNumbersExample() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(calendarToday.getFullYear(), 0, 12),
  );
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          locale={zhCN}
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  );
}

export default function CalendarExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <CalendarDemoExample />
      </ExampleCard>
      <ExampleCard id="basic" title="基础用法">
        <CalendarBasicExample />
      </ExampleCard>
      <ExampleCard id="range-calendar" title="日期范围">
        <CalendarRangeCalendarExample />
      </ExampleCard>
      <ExampleCard id="month-and-year-selector" title="月份与年份选择">
        <CalendarMonthAndYearSelectorExample />
      </ExampleCard>
      <ExampleCard id="booked-dates" title="已预订日期">
        <CalendarBookedDatesExample />
      </ExampleCard>
      <ExampleCard id="custom-cell-size" title="自定义单元格">
        <CalendarCustomCellSizeExample />
      </ExampleCard>
      <ExampleCard id="week-numbers" title="周数">
        <CalendarWeekNumbersExample />
      </ExampleCard>
    </div>
  );
}
