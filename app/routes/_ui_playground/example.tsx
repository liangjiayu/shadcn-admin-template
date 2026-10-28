import { Component, Suspense, useEffect, type ReactNode } from 'react';
import { isRouteErrorResponse, useLoaderData, useLocation, useRouteError } from 'react-router';

import { Spinner } from '@/components/ui/spinner';

import type { Route } from './+types/example';
import ExampleNotFound from './components/example-not-found';
import { findComponent, findExample } from './registry';

export const handle = { name: '组件演示' };

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const component = findComponent(`/_ui_playground/${params.library}/${params.component}`);
  if (!component) throw new Response('组件不存在', { status: 404 });
  return { path: component.path };
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) return <ExampleNotFound />;
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

class ExampleErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div role="alert" className="text-sm text-muted-foreground">
          此用例加载失败，请刷新页面重试。
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ExamplePage() {
  const { path } = useLoaderData<typeof clientLoader>();
  const { hash } = useLocation();
  const component = findComponent(path)!;

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      const id = hash.slice(1);
      const example = id.startsWith('example-')
        ? findExample(`${path}/${id.slice('example-'.length)}`)
        : undefined;
      document
        .getElementById(example ? `example-${example.slug}` : id)
        ?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [path, hash]);

  return (
    <div key={path} className="space-y-6">
      <div className="text-xl font-semibold tracking-tight">{component.name}</div>
      {component.examples.map((example) => {
        const Content = example.Content;
        return (
          <div
            key={example.path}
            id={`example-${example.slug}`}
            className="min-w-0 scroll-mt-6 space-y-4 rounded-2xl border border-border/70 bg-card p-4 text-sm sm:p-6"
          >
            <div>
              <div className="mb-0.5 text-base font-semibold">{example.name}</div>
              <div className="text-sm leading-6 text-muted-foreground">{example.description}</div>
            </div>
            <ExampleErrorBoundary>
              <Suspense
                fallback={
                  <div role="status" className="flex items-center gap-2 py-6">
                    <Spinner />
                    正在加载用例…
                  </div>
                }
              >
                <Content />
              </Suspense>
            </ExampleErrorBoundary>
          </div>
        );
      })}
    </div>
  );
}
