import { createContext, useContext } from 'react';

import type { ProFormLayout } from './types';

export const ProFormContext = createContext<{ layout: ProFormLayout; disabled: boolean }>({
  layout: 'vertical',
  disabled: false,
});

/** 交互禁用状态独立于 RHF 注册状态，避免禁用时丢失提交值。 */
export function useProFormContext() {
  return useContext(ProFormContext);
}
