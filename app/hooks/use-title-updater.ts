import { useEffect } from 'react';
import { useMatches } from 'react-router';

import { SITE_APP_TITLE } from '@/constants';

/** 根据当前路由 handle.name 动态更新页面标题 */
export function useTitleUpdater() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const title = (currentMatch?.handle as { name?: string } | undefined)?.name;

  useEffect(() => {
    document.title = title ? `${title} - ${SITE_APP_TITLE}` : SITE_APP_TITLE;
  }, [title]);
}
