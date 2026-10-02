import { useState } from 'react';

/** 保存提交结果，在再次提交或重置时清除旧结果。 */
export function useExampleFeedback() {
  const [result, setResult] = useState<unknown>();
  const clearResult = () => setResult(undefined);

  return {
    result,
    setResult,
    clearResult,
    formProps: { onSubmitCapture: clearResult, onResetCapture: clearResult },
  };
}
