import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import { ComponentDirectory } from './components/component-directory';
import { findComponent, libraryDefaults, type PlaygroundLibrary } from './navigation';

export const handle = { name: '组件演示' };

export default function UiPlayground() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const library: PlaygroundLibrary = pathname.split('/')[2] === 'pro-ui' ? 'pro-ui' : 'ui';
  const recentPaths = useRef({ ...libraryDefaults });
  const scrollPositions = useRef<Record<PlaygroundLibrary, number>>({ ui: 0, 'pro-ui': 0 });

  useEffect(() => {
    if (findComponent(pathname)) recentPaths.current[library] = pathname;
  }, [library, pathname]);

  const changeLibrary = (next: PlaygroundLibrary) => {
    if (next !== library) navigate(recentPaths.current[next]);
  };

  const directoryProps = {
    library,
    onLibraryChange: changeLibrary,
    scrollPositions,
    onScrollPositionChange: (targetLibrary: PlaygroundLibrary, position: number) => {
      scrollPositions.current[targetLibrary] = position;
    },
  };

  return (
    <div className="flex-1">
      <div className="flex min-h-dvh min-w-0 items-start">
        <div className="sticky top-0 flex h-dvh w-[232px] shrink-0 flex-col border-r border-border bg-background py-2">
          <ComponentDirectory {...directoryProps} />
        </div>
        <div className="max-w-[calc(64rem+3rem)] min-w-0 flex-1 space-y-6 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
