import type { ReactNode } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ExampleCardProps = {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
  result?: unknown;
};

export function ExampleCard({ title, description, code, children, result }: ExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {children}
        {result !== undefined && (
          <div role="status" className="space-y-2">
            <p className="text-sm font-medium">提交结果</p>
            <pre className="max-h-72 overflow-auto rounded-lg bg-muted p-3 text-xs">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
        <details className="rounded-lg border p-3">
          <summary className="cursor-pointer text-sm font-medium">查看用法</summary>
          <pre className="mt-3 overflow-x-auto text-xs leading-relaxed">
            <code>{code}</code>
          </pre>
        </details>
      </CardContent>
    </Card>
  );
}
