import { useState } from 'react';
import { toast } from 'sonner';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { FastApiServices } from '@/services';

type Props = {
  open: boolean;
  record: FastAPI.Task | null;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
};

export function TaskDeleteDialog({ open, record, onOpenChange, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    if (!record) return;
    setLoading(true);
    try {
      await FastApiServices.Task.deleteTask({ id: record.id });
      toast.success('删除成功');
      onOpenChange(false);
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>删除任务</AlertDialogTitle>
          <AlertDialogDescription>
            确定要删除任务「{record?.name}」吗？该操作不可恢复。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={(e) => {
              e.preventDefault();
              onConfirm();
            }}
            disabled={loading}
          >
            {loading ? '删除中...' : '确认删除'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
