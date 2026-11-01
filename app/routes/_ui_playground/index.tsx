import { replace } from 'react-router';

import { defaultComponentPath } from './navigation';

export function clientLoader() {
  return replace(defaultComponentPath);
}
