import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

export const handle = { name: '500' };

export default function ServerError() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-7xl font-bold tracking-tight">500</h1>
      <p className="text-lg text-muted-foreground">服务器开小差了，请稍后再试。</p>
      <Button asChild>
        <Link to="/">返回首页</Link>
      </Button>
    </main>
  );
}
