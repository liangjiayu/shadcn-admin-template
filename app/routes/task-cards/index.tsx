import { Inbox } from 'lucide-react';
import { useState } from 'react';

import { usePagination } from '@/hooks';
import { FastApiServices } from '@/services';

import { TaskSearch, type TaskSearchValue } from '../task/components/task-search';
import { TaskCard } from './components/task-card';
import { TaskCardSkeleton } from './components/task-card-skeleton';

export const handle = { name: '任务卡片' };

const PAGE_SIZE = 200;
const GRID_CLASS =
  'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5';

export default function TaskCardsPage() {
  const [search, setSearch] = useState<TaskSearchValue>({});

  const { data, loading } = usePagination(
    ['task', 'cards'],
    async ({ current, pageSize, ...rest }) => {
      const res = await FastApiServices.Task.getTasks({
        page: current,
        pageSize,
        ...rest,
      });
      return { total: res.total, list: res.data };
    },
    { params: search, defaultPageSize: PAGE_SIZE },
  );

  const list = data?.list ?? [];
  const isInitialLoading = loading && !data;
  const isEmpty = !loading && list.length === 0;

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium">任务卡片</div>
      <div className="flex items-center justify-between gap-2">
        <TaskSearch onSubmit={setSearch} />
      </div>

      {isInitialLoading ? (
        <div className={GRID_CLASS}>
          {Array.from({ length: 12 }).map((_, i) => (
            <TaskCardSkeleton key={i} />
          ))}
        </div>
      ) : isEmpty ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed py-16 text-muted-foreground">
          <Inbox className="size-10" />
          <span className="text-sm">暂无任务</span>
        </div>
      ) : (
        <div className={GRID_CLASS}>
          {list.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
