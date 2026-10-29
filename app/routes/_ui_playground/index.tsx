import { Navigate } from 'react-router';

import { defaultComponentPath } from './navigation';

export default function RedirectPage() {
  return <Navigate to={defaultComponentPath} replace />;
}
