import type * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

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
import type { Button } from '@/components/ui/button';

export type ProConfirmOptions = {
  title: React.ReactNode;
  content?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okVariant?: React.ComponentProps<typeof Button>['variant'];
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
};

const CLOSE_ANIMATION_MS = 200;

type ConfirmDialogProps = ProConfirmOptions & {
  onClose: (value: boolean) => void;
};

function ConfirmDialog({
  title,
  content,
  okText = '确认',
  cancelText = '取消',
  okVariant = 'default',
  onOk,
  onCancel,
  onClose,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const close = (value: boolean) => {
    setOpen(false);
    onClose(value);
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onOk?.();
      close(true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (next || loading) return;
    onCancel?.();
    close(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {content ? <AlertDialogDescription>{content}</AlertDialogDescription> : null}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            variant={okVariant}
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleConfirm();
            }}
          >
            {loading ? '处理中...' : okText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function proConfirm(options: ProConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const root = createRoot(host);

    const handleClose = (value: boolean) => {
      setTimeout(() => {
        root.unmount();
        host.remove();
        resolve(value);
      }, CLOSE_ANIMATION_MS);
    };

    root.render(<ConfirmDialog {...options} onClose={handleClose} />);
  });
}
