import { useState } from 'react';

import { ProPagination } from '@/components/pro-ui';

export function BasicExample() {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto pb-2">
        <ProPagination
          {...pagination}
          total={85}
          onChange={(current, pageSize) => setPagination({ current, pageSize })}
          className="w-max min-w-full"
        />
      </div>
      <div role="status" className="text-muted-foreground">
        当前第 {pagination.current} 页，每页 {pagination.pageSize} 条
      </div>
    </div>
  );
}
