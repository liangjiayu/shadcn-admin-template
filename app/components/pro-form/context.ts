import { createContext, useContext } from 'react';

export type ProFormLayout = 'vertical' | 'horizontal' | 'inline';

export const ProFormContext = createContext<{ layout: ProFormLayout; disabled: boolean }>({
  layout: 'vertical',
  disabled: false,
});

/** Read presentation state separately from RHF so disabling controls preserves submitted values. */
export function useProFormContext() {
  return useContext(ProFormContext);
}
