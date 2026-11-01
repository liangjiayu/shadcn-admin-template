import { cn } from 'cn';
import { useEffect, useRef, type RefObject } from 'react';
import { Link, useLocation } from 'react-router';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { componentPath, libraries, type PlaygroundLibrary } from '../navigation';

export function ComponentDirectory({
  library,
  onLibraryChange,
  scrollPositions,
  onScrollPositionChange,
}: {
  library: PlaygroundLibrary;
  onLibraryChange: (library: PlaygroundLibrary) => void;
  scrollPositions: RefObject<Record<PlaygroundLibrary, number>>;
  onScrollPositionChange: (library: PlaygroundLibrary, position: number) => void;
}) {
  const groups = libraries[library].groups;
  const { pathname } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) navRef.current.scrollTop = scrollPositions.current[library];
  }, [library, scrollPositions]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      navRef.current
        ?.querySelector('[aria-current="page"]')
        ?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="flex h-full min-h-0 flex-col gap-2">
      <Tabs
        value={library}
        onValueChange={(value) => {
          if (value === 'ui' || value === 'pro-ui') onLibraryChange(value);
        }}
        className="shrink-0 px-2"
      >
        <TabsList aria-label="组件库" className="w-full">
          {(Object.keys(libraries) as PlaygroundLibrary[]).map((value) => (
            <TabsTrigger key={value} value={value}>
              {libraries[value].name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div
        key={library}
        ref={navRef}
        onScroll={(event) => {
          onScrollPositionChange(library, event.currentTarget.scrollTop);
        }}
        className="min-h-0 flex-1 scrollbar-thin overflow-y-auto overscroll-contain"
      >
        <div className="px-2">
          {groups.map((group) => (
            <div
              key={group.id}
              className="mb-2 border-b border-border pb-2 last:mb-0 last:border-b-0 last:pb-0"
            >
              <div className="px-3 pt-1 pb-2 text-xs font-medium text-muted-foreground">
                {group.name}
              </div>
              <div className="space-y-0.5">
                {group.components.map((component) => {
                  const active =
                    pathname.replace(/\/$/, '') === componentPath(library, component.slug);
                  return (
                    <Link
                      key={component.slug}
                      to={componentPath(library, component.slug)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex h-8 items-center rounded-lg px-3 text-sm text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
                        active && 'bg-muted font-medium',
                      )}
                    >
                      <span className="truncate" title={component.name}>
                        {component.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
