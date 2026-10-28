import { useEffect } from 'react';
import { useMatches } from 'react-router';

import { SITE_APP_TITLE } from '@/constants';

/** 优先使用路由数据中的用例标题，普通页面回退到 handle.name */
export function useTitleUpdater() {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const title =
    (currentMatch?.data as { title?: string } | undefined)?.title ??
    (currentMatch?.handle as { name?: string } | undefined)?.name;

  useEffect(() => {
    document.title = title ? `${title} - ${SITE_APP_TITLE}` : SITE_APP_TITLE;
  }, [title]);
}
