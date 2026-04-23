import { Outlet } from 'react-router';

import { useTitleUpdater } from '@/hooks';

export default function BlankLayout() {
  useTitleUpdater();

  return <Outlet />;
}
