import { useState } from 'react';

import { PaginationEllipsis } from '@/components/ui/pagination';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export function BasicExample() {
  const [page, setPage] = useState(1);
  return (
    <div id="example-pagination" className="space-y-4">
      <div className="space-y-2">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="rounded-md bg-muted/50 p-2">
            示例记录 {(page - 1) * 3 + index + 1}
          </div>
        ))}
      </div>
      <Pagination aria-label="示例记录分页">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#example-pagination"
              text="上一页"
              aria-label="上一页"
              aria-disabled={page === 1}
              tabIndex={page === 1 ? -1 : undefined}
              onClick={(event) => {
                event.preventDefault();
                setPage(Math.max(1, page - 1));
              }}
            />
          </PaginationItem>
          {[1, 2, 3].map((value) => (
            <PaginationItem key={value}>
              <PaginationLink
                href="#example-pagination"
                aria-label={`第 ${value} 页`}
                isActive={page === value}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(value);
                }}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#example-pagination"
              text="下一页"
              aria-label="下一页"
              aria-disabled={page === 3}
              tabIndex={page === 3 ? -1 : undefined}
              onClick={(event) => {
                event.preventDefault();
                setPage(Math.min(3, page + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div role="status">第 {page} 页，共 3 页</div>
    </div>
  );
}

export function EllipsisExample() {
  const [page, setPage] = useState(1);
  return (
    <div className="space-y-3">
      <Pagination aria-label="长列表示例分页">
        <PaginationContent>
          {[1, 2, 3].map((value) => (
            <PaginationItem key={value}>
              <PaginationLink
                href="#example-ellipsis"
                isActive={page === value}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(value);
                }}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#example-ellipsis"
              isActive={page === 20}
              onClick={(event) => {
                event.preventDefault();
                setPage(20);
              }}
            >
              20
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div role="status">第 {page} 页，共 20 页</div>
    </div>
  );
}
