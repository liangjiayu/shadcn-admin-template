import { useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export function BasicExample() {
  const [archived, setArchived] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  return (
    <div id="example-alert-dialog" className="space-y-4">
      <AlertDialog open={archiveOpen} onOpenChange={setArchiveOpen}>
        <AlertDialogTrigger render={<Button variant="outline" />}>归档示例项目</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>归档项目？</AlertDialogTitle>
            <AlertDialogDescription>确认后将标记当前示例项目为已归档。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setArchived(true);
                setArchiveOpen(false);
              }}
            >
              确认归档
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div role="status">项目状态：{archived ? '已归档' : '进行中'}</div>
      {archived && (
        <Button variant="ghost" onClick={() => setArchived(false)}>
          恢复项目
        </Button>
      )}
    </div>
  );
}

export function SimpleExample() {
  const [confirmed, setConfirmed] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="outline" />}>打开对话框</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>操作提示</AlertDialogTitle>
            <AlertDialogDescription>这是一个基础对话框示例。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setConfirmed(true);
                setOpen(false);
              }}
            >
              确认
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div role="status">{confirmed ? '已确认' : '等待确认'}</div>
    </div>
  );
}
