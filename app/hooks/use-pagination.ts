import { useQuery, type QueryKey } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

export type PaginationService<T, P extends object> = (
  params: { current: number; pageSize: number } & P,
) => Promise<{ total: number; list: T[] }>;

export type UsePaginationOptions<P extends object> = {
  defaultCurrent?: number;
  defaultPageSize?: number;
  params?: P;
  manual?: boolean;
};

export function usePagination<T, P extends object = object>(
  queryKey: QueryKey,
  service: PaginationService<T, P>,
  options: UsePaginationOptions<P> = {},
) {
  const { defaultCurrent = 1, defaultPageSize = 20, params, manual = false } = options;

  const [current, setCurrent] = useState(defaultCurrent);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const paramsKey = JSON.stringify(params ?? {});

  useEffect(() => {
    setCurrent(1);
  }, [paramsKey]);

  const query = useQuery({
    queryKey: [...queryKey, { current, pageSize, ...params }] as const,
    queryFn: ({ queryKey: qk }) => service(qk.at(-1) as { current: number; pageSize: number } & P),
    enabled: !manual,
  });

  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (query.data?.total !== undefined) setTotal(query.data.total);
  }, [query.data?.total]);

  const totalPage = useMemo(() => Math.max(1, Math.ceil(total / pageSize)), [total, pageSize]);

  const onChange = (page: number, size: number) => {
    if (size !== pageSize) {
      const nextTotalPage = Math.max(1, Math.ceil(total / size));
      setPageSize(size);
      setCurrent(page > nextTotalPage ? 1 : page);
    } else {
      setCurrent(page);
    }
  };

  return {
    data: query.data,
    loading: query.isFetching,
    error: query.error,
    refresh: query.refetch,
    pagination: {
      current,
      pageSize,
      total,
      totalPage,
      onChange,
      changeCurrent: setCurrent,
      changePageSize: (size: number) => onChange(current, size),
    },
  };
}
