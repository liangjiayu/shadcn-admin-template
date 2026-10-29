import { Component, type ReactNode } from 'react';

type ExampleCardProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

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

export function ExampleCard({ id, title, description, children }: ExampleCardProps) {
  return (
    <div
      id={`example-${id}`}
      className="min-w-0 scroll-mt-6 space-y-4 rounded-2xl border border-border/70 bg-card p-4 text-sm sm:p-6"
    >
      <div>
        <div className="mb-0.5 text-base font-semibold">{title}</div>
        {description && (
          <div className="text-sm leading-6 text-muted-foreground">{description}</div>
        )}
      </div>
      <ExampleErrorBoundary>{children}</ExampleErrorBoundary>
    </div>
  );
}
