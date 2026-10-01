import type { ReactNode } from 'react';

export type ProFormOption = { label: ReactNode; value: string | number; disabled?: boolean };

/** Preserve the option's original string/number type when adapting radio values to strings. */
export function optionKey(option: ProFormOption): string {
  return `${typeof option.value}:${option.value}`;
}
