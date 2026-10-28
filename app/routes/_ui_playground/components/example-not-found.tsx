import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

import { defaultComponentPath } from '../registry';

export default function ExampleNotFound() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
      <div className="text-4xl font-semibold">404</div>
      <div className="text-muted-foreground">组件不存在，请从目录中选择其他组件。</div>
      <Button render={<Link to={defaultComponentPath} />} nativeButton={false}>
        返回默认组件
      </Button>
    </div>
  );
}
