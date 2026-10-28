import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

import { defaultComponentPath } from '../registry';

export default function ExampleNotFound() {
  return (
    <section className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="text-muted-foreground">组件不存在，请从目录中选择其他组件。</p>
      <Button render={<Link to={defaultComponentPath} />} nativeButton={false}>
        返回默认组件
      </Button>
    </section>
  );
}
