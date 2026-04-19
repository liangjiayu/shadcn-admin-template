import type React from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export type ProColumn<T> = {
  key?: string;
  title: React.ReactNode;
  dataIndex?: keyof T;
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
  width?: number | string;
  className?: string;
  headClassName?: string;
};

export type ProTableProps<T> = {
  columns: ProColumn<T>[];
  dataSource: T[];
  loading?: boolean;
  rowKey?: keyof T | ((record: T, index: number) => string | number);
  emptyText?: React.ReactNode;
  skeletonRows?: number;
};

function resolveRowKey<T>(
  record: T,
  index: number,
  rowKey: ProTableProps<T>['rowKey'],
): string | number {
  if (typeof rowKey === 'function') return rowKey(record, index);
  if (rowKey != null) {
    const v = record[rowKey];
    if (typeof v === 'string' || typeof v === 'number') return v;
  }
  return index;
}

function resolveColumnKey<T>(col: ProColumn<T>, index: number): string {
  return col.key ?? (col.dataIndex as string | undefined) ?? String(index);
}

export function ProTable<T>({
  columns,
  dataSource,
  loading = false,
  rowKey,
  emptyText = '暂无数据',
  skeletonRows = 5,
}: ProTableProps<T>) {
  const colCount = columns.length;
  const showSkeleton = loading && dataSource.length === 0;
  const showEmpty = !showSkeleton && dataSource.length === 0;

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow className="hover:bg-transparent">
            {columns.map((col, i) => (
              <TableHead
                key={resolveColumnKey(col, i)}
                className={col.headClassName}
                style={col.width != null ? { width: col.width } : undefined}
              >
                {col.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {showSkeleton ? (
            Array.from({ length: skeletonRows }).map((_, i) => (
              <TableRow key={`sk-${i}`}>
                {Array.from({ length: colCount }).map((__, j) => (
                  <TableCell key={j}>
                    <Skeleton className="h-5 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : showEmpty ? (
            <TableRow>
              <TableCell colSpan={colCount} className="h-24 text-center text-muted-foreground">
                {emptyText}
              </TableCell>
            </TableRow>
          ) : (
            dataSource.map((record, rowIndex) => (
              <TableRow key={resolveRowKey(record, rowIndex, rowKey)}>
                {columns.map((col, i) => {
                  const value =
                    col.dataIndex !== undefined ? (record[col.dataIndex] as unknown) : undefined;
                  const content = col.render
                    ? col.render(value, record, rowIndex)
                    : (value as React.ReactNode);
                  return (
                    <TableCell key={resolveColumnKey(col, i)} className={col.className}>
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
