import { ChevronLeft, ChevronRight } from 'lucide-react';
import type React from 'react';

import { PaginationEllipsis, PaginationLink } from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/utils/index';

export type ProPaginationProps = {
  current: number;
  pageSize: number;
  total: number;
  pageSizeOptions?: number[];
  showSizeChanger?: boolean;
  showTotal?: ((total: number, range: [number, number]) => React.ReactNode) | false;
  hideOnSinglePage?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
};

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const defaultShowTotal = (total: number, [start, end]: [number, number]) =>
  `第 ${start}-${end} 条/总共 ${total} 条`;

type PageItem = number | 'prev-ellipsis' | 'next-ellipsis';

function buildPageItems(current: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, 'next-ellipsis', totalPages];
  }
  if (current >= totalPages - 3) {
    return [
      1,
      'prev-ellipsis',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }
  return [1, 'prev-ellipsis', current - 1, current, current + 1, 'next-ellipsis', totalPages];
}

export function ProPagination({
  current,
  pageSize,
  total,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  showSizeChanger = true,
  showTotal = defaultShowTotal,
  hideOnSinglePage = false,
  disabled = false,
  className,
  onChange,
  onShowSizeChange,
}: ProPaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(1, current), totalPages);

  if (hideOnSinglePage && totalPages <= 1) return null;

  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(total, page * pageSize);

  const goTo = (p: number) => {
    if (disabled) return;
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    onChange?.(next, pageSize);
  };

  const changeSize = (size: number) => {
    if (disabled || size === pageSize) return;
    const nextTotalPages = Math.max(1, Math.ceil(total / size));
    const nextPage = page > nextTotalPages ? 1 : page;
    onShowSizeChange?.(nextPage, size);
    onChange?.(nextPage, size);
  };

  const items = buildPageItems(page, totalPages);
  const prevDisabled = disabled || page <= 1;
  const nextDisabled = disabled || page >= totalPages;

  return (
    <div className={cn('flex items-center justify-end gap-4 text-sm', className)}>
      {showTotal !== false ? (
        <div className="text-muted-foreground">{showTotal(total, [start, end])}</div>
      ) : null}

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="上一页"
          disabled={prevDisabled}
          onClick={() => goTo(page - 1)}
          className={cn(
            'inline-flex size-8 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'disabled:pointer-events-none disabled:opacity-50',
          )}
        >
          <ChevronLeft className="size-4" />
        </button>

        {items.map((item, idx) => {
          if (item === 'prev-ellipsis' || item === 'next-ellipsis') {
            return <PaginationEllipsis key={`${item}-${idx}`} className="text-muted-foreground" />;
          }
          const isActive = item === page;
          return (
            <PaginationLink
              key={item}
              href="#"
              isActive={isActive}
              aria-disabled={disabled || undefined}
              onClick={(e) => {
                e.preventDefault();
                goTo(item);
              }}
              className={cn('size-8', disabled && 'pointer-events-none opacity-50')}
            >
              {item}
            </PaginationLink>
          );
        })}

        <button
          type="button"
          aria-label="下一页"
          disabled={nextDisabled}
          onClick={() => goTo(page + 1)}
          className={cn(
            'inline-flex size-8 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'disabled:pointer-events-none disabled:opacity-50',
          )}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {showSizeChanger ? (
        <Select
          value={String(pageSize)}
          disabled={disabled}
          onValueChange={(v) => changeSize(Number(v))}
        >
          <SelectTrigger size="sm" className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions.map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n} 条/页
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  );
}
