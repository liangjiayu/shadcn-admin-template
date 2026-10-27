import type { ReactNode } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ExampleCard({
  component,
  title,
  description,
  children,
  wide = false,
}: {
  component: string;
  title: string;
  description: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <Card
      id={`example-${component}`}
      data-example={component}
      className={wide ? 'min-w-0 md:col-span-2' : 'min-w-0'}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}
