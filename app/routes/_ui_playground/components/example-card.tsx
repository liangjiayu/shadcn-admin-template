import type { ReactNode } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type ExampleCardProps = {
  title: string;
  description: string;
  instructions: string;
  children: ReactNode;
  result?: ExampleResultItem[];
};

export type ExampleResultItem = { label: string; value: ReactNode };

export function ExampleCard({
  title,
  description,
  instructions,
  children,
  result,
}: ExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-lg bg-muted/50 p-3 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">试一试：</span>
          {instructions}
        </div>
        {children}
        <div role="status" aria-atomic="true">
          {result !== undefined && (
            <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">提交成功</p>
                <p className="text-xs text-muted-foreground">
                  以下为本次提交的内容，修改后可再次提交。
                </p>
              </div>
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                {result.map(({ label, value }) => (
                  <div key={label} className="min-w-0 space-y-1">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="wrap-anywhere whitespace-pre-wrap">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
