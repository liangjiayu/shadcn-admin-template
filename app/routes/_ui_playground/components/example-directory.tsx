import { cn } from 'cn';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

import { componentCategories, components } from '../registry';

const groups = [...new Set(components.map((component) => component.library))].map((library) => ({
  library,
  name: components.find((component) => component.library === library)!.libraryName,
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
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      navRef.current?.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'nearest' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <nav
        ref={navRef}
        aria-label="组件目录"
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin]"
      >
        {groups.length ? (
          groups.map((group) => (
            <section key={group.library} aria-label={group.name} className="mb-4 last:mb-0">
              {group.categories.map((category) => (
                <section
                  key={category.id}
                  aria-label={category.name}
                  className="mb-2 border-b border-border pb-2 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <h3 className="px-3 pt-1 pb-2 text-xs font-medium text-muted-foreground">
                    {category.name}
                  </h3>
                  <ul className="space-y-0.5">
                    {category.components.map((component) => {
                      const active = pathname.replace(/\/$/, '') === component.path;
                      return (
                        <li key={component.path}>
                          <Link
                            to={component.path}
                            aria-current={active ? 'page' : undefined}
                            onClick={onNavigate}
                            className={cn(
                              'flex h-8 items-center rounded-lg px-3 text-sm transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
                              active ? 'bg-muted font-medium text-foreground' : 'text-foreground',
                            )}
                          >
                            <span className="truncate" title={component.name}>
                              {component.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </section>
          ))
        ) : (
          <p role="status" className="px-2 py-6 text-center text-sm text-muted-foreground">
            没有匹配的组件
          </p>
        )}
      </nav>
    </div>
  );
}
