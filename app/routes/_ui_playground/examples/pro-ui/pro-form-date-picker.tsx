import { ProFormDatePicker } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormDatePickerExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="选择日期后提交 yyyy-MM-dd 字符串；支持清空，清空后为 null。"
      >
        <FormExample defaultValues={{ date: null as string | null }}>
          <ProFormDatePicker name="date" label="生效日期" />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="required"
        title="禁止清空"
        description="allowClear=false 隐藏清空按钮，并禁止再次点击选中日期取消选择。"
      >
        <FormExample defaultValues={{ date: '2026-10-31' }}>
          <ProFormDatePicker name="date" label="生效日期" allowClear={false} />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="restricted"
        title="限制可选日期"
        description="仅允许选择 2026 年 11 月的工作日，通过 calendarProps 配置日历。"
      >
        <FormExample defaultValues={{ date: null as string | null }}>
          <ProFormDatePicker
            name="date"
            label="预约日期"
            calendarProps={{
              defaultMonth: new Date(2026, 10, 1),
              disabled: [
                { before: new Date(2026, 10, 1) },
                { after: new Date(2026, 10, 30) },
                { dayOfWeek: [0, 6] },
              ],
            }}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
