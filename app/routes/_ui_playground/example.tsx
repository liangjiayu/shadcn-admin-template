import { Component, Suspense, useEffect, type ReactNode } from 'react';
import { isRouteErrorResponse, useLoaderData, useLocation, useRouteError } from 'react-router';

import { Spinner } from '@/components/ui/spinner';

import type { Route } from './+types/example';
import ExampleNotFound from './components/example-not-found';
import { findComponent } from './registry';

export const handle = { name: '组件演示' };

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const component = findComponent(`/_ui_playground/${params.library}/${params.component}`);
  if (!component) throw new Response('组件不存在', { status: 404 });
  return { path: component.path, title: component.name };
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) return <ExampleNotFound />;
  return (
    <section className="space-y-4" role="alert">
      <h1 className="text-xl font-semibold tracking-tight">组件加载失败</h1>
      <p className="text-sm text-muted-foreground">请刷新页面重试。</p>
      <a href="" className="text-sm underline underline-offset-4">
        重新加载
      </a>
    </section>
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
        <p role="alert" className="text-sm text-muted-foreground">
          此用例加载失败，请刷新页面重试。
        </p>
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
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [path, hash]);

  return (
    <section key={path} className="space-y-6" aria-labelledby="component-title">
      <header>
        <h1 id="component-title" className="text-xl font-semibold tracking-tight">
          {component.name}
        </h1>
      </header>
      {component.examples.map((example) => {
        const Content = example.Content;
        return (
          <section
            key={example.path}
            id={`example-${example.slug}`}
            aria-labelledby={`title-${example.slug}`}
            className="min-w-0 scroll-mt-6 space-y-4 rounded-2xl border border-border/70 bg-card p-4 text-sm sm:p-6"
          >
            <header className="space-y-1.5">
              <h2 id={`title-${example.slug}`} className="text-sm font-semibold">
                {example.name}
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">{example.description}</p>
            </header>
            <div className="min-w-0">
              <ExampleErrorBoundary>
                <Suspense
                  fallback={
                    <div role="status" className="flex items-center gap-2 py-6">
                      <Spinner />
                      正在加载用例…
                    </div>
                  }
                >
                  <div className="w-full max-w-2xl">
                    <Content />
                  </div>
                </Suspense>
              </ExampleErrorBoundary>
            </div>
          </section>
        );
      })}
      <p className="text-xs leading-5 text-muted-foreground/70">
        各用例的演示数据相互独立，切换组件或刷新后恢复初始值。
      </p>
    </section>
  );
}
