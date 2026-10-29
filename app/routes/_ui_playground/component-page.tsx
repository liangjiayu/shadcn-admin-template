import { Suspense, useEffect } from 'react';
import { isRouteErrorResponse, useLoaderData, useLocation, useRouteError } from 'react-router';

import { Spinner } from '@/components/ui/spinner';

import type { Route } from './+types/component-page';
import ComponentNotFound from './components/component-not-found';
import { findComponent } from './navigation';

export const handle = { name: '组件演示' };

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const component = findComponent(`/_ui_playground/${params.library}/${params.component}`);
  if (!component) throw new Response('组件不存在', { status: 404 });
  return { path: component.path };
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) return <ComponentNotFound />;
  return (
    <div className="space-y-4" role="alert">
      <div className="text-xl font-semibold tracking-tight">组件加载失败</div>
      <div className="text-sm text-muted-foreground">请刷新页面重试。</div>
      <a href="" className="text-sm underline underline-offset-4">
        重新加载
      </a>
    </div>
  );
}

// 放在 Suspense 内，确保首次定位时懒加载页面的锚点已经挂载。
function AnchorScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        return;
      }
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default function ComponentPage() {
  const { path } = useLoaderData<typeof clientLoader>();
  const component = findComponent(path)!;
  const Content = component.Content;

  return (
    <div key={path} className="space-y-6">
      <div className="text-xl font-semibold tracking-tight">{component.name}</div>
      <Suspense
        fallback={
          <div role="status" className="flex items-center gap-2 py-6">
            <Spinner />
            正在加载用例…
          </div>
        }
      >
        <Content />
        <AnchorScroll />
      </Suspense>
    </div>
  );
}
