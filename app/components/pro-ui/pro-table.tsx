import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
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

export type ProTableProps<T> = {
  columns: ColumnDef<T, unknown>[];
  data: T[];
  loading?: boolean;
  getRowId?: (row: T, index: number) => string;
  emptyText?: React.ReactNode;
  skeletonRows?: number;
};

export function ProTable<T>({
  columns,
  data,
  loading = false,
  getRowId,
  emptyText = '暂无数据',
  skeletonRows = 5,
}: ProTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId,
  });

  const colCount = columns.length;
  const rows = table.getRowModel().rows;
  const showSkeleton = loading && rows.length === 0;
  const showEmpty = !showSkeleton && rows.length === 0;

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader className="bg-muted/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                const size = header.column.columnDef.size;
                return (
                  <TableHead key={header.id} style={size != null ? { width: size } : undefined}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
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
            rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export type { ColumnDef } from '@tanstack/react-table';
