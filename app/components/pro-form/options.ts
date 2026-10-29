import type { ReactNode } from 'react';

export type ProFormOption = { label: ReactNode; value: string | number; disabled?: boolean };

/** 区分数字与字符串选项，避免 1 和 '1' 在键值或字符串适配时冲突。 */
export function optionKey(option: Pick<ProFormOption, 'value'>): string {
  return `${typeof option.value}:${option.value}`;
}
