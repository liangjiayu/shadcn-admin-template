import { useState } from 'react';

import type { ExampleResultItem } from './example-card';

/** 保存提交快照，并在再次提交或重置时清除旧结果。 */
export function useExampleFeedback() {
  const [result, setResult] = useState<ExampleResultItem[]>();
  const clearResult = () => setResult(undefined);

  return {
    result,
    setResult,
    clearResult,
    formProps: { onSubmitCapture: clearResult, onResetCapture: clearResult },
  };
}

/** 展示空值时保留有效的零值，避免把数字 0 当作未填写。 */
export function displayValue(value: string | number | null | undefined) {
  return value === '' || value == null ? '未填写' : value;
}

/** 将选中值转换为可读的选项名称，兼容单选、多选与空选择。 */
export function displayOptions(
  value: string | number | (string | number)[] | null,
  options: { label: string; value: string | number }[],
) {
  const values = Array.isArray(value) ? value : value === null ? [] : [value];
  return values.length
    ? values
        .map((item) => options.find((option) => option.value === item)?.label ?? item)
        .join('、')
    : '未填写';
}
