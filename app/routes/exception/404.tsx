import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

export const handle = { name: '404' };

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-7xl font-bold tracking-tight">404</h1>
      <p className="text-lg text-muted-foreground">抱歉，您访问的页面不存在。</p>
      <Button asChild>
        <Link to="/">返回首页</Link>
      </Button>
    </main>
  );
}
