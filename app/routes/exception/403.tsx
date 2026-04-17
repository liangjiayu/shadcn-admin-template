import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

export default function Forbidden() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-7xl font-bold tracking-tight">403</h1>
      <p className="text-muted-foreground text-lg">抱歉，您无权访问该页面。</p>
      <Button asChild>
        <Link to="/">返回首页</Link>
      </Button>
    </main>
  );
}
