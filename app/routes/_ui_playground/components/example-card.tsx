import type { ReactNode } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ExampleCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  result?: unknown;
};

export function ExampleCard({ title, description, children, result }: ExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {children}
        <div role="status" aria-atomic="true">
          {result !== undefined && (
            <div className="min-w-0 space-y-3 rounded-lg border bg-muted/30 p-4">
              <p className="text-sm font-medium">提交结果</p>
              <pre className="overflow-x-auto text-xs leading-relaxed">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
