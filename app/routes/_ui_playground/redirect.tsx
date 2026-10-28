import { Navigate } from 'react-router';

import { defaultComponentPath } from './registry';

export default function RedirectPage() {
  return <Navigate to={defaultComponentPath} replace />;
}
