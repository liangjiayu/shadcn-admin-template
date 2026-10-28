import { cn } from 'cn';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

import { componentCategories, components } from '../registry';

const groups = [...new Set(components.map((component) => component.library))].map((library) => ({
  library,
  categories: componentCategories
    .map((category) => ({
      ...category,
      components: components.filter(
        (component) => component.library === library && component.category === category.id,
      ),
    }))
    .filter((category) => category.components.length > 0),
}));

export function ExampleDirectory({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      navRef.current?.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'nearest' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <div
        ref={navRef}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin]"
      >
        {groups.length ? (
          groups.map((group) => (
            <div key={group.library} className="mb-4 last:mb-0">
              {group.categories.map((category) => (
                <div
                  key={category.id}
                  className="mb-2 border-b border-border pb-2 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <div className="px-3 pt-1 pb-2 text-xs font-medium text-muted-foreground">
                    {category.name}
                  </div>
                  <div className="space-y-0.5">
                    {category.components.map((component) => {
                      const active = pathname.replace(/\/$/, '') === component.path;
                      return (
                        <Link
                          key={component.path}
                          to={component.path}
                          aria-current={active ? 'page' : undefined}
                          onClick={onNavigate}
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
          ))
        ) : (
          <div role="status" className="px-2 py-6 text-center text-sm text-muted-foreground">
            没有匹配的组件
          </div>
        )}
      </div>
    </div>
  );
}
