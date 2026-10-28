import { useState } from 'react';
import type { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  const [profile, setProfile] = useState({ name: '张三', email: 'zhangsan@example.com' });
  const [draft, setDraft] = useState(profile);
  const [open, setOpen] = useState(false);
  function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProfile({ name: draft.name.trim(), email: draft.email.trim() });
    setOpen(false);
  }
  return (
    <div id="example-dialog" className="space-y-4">
      <dl className="grid gap-4 sm:grid-cols-2" aria-live="polite">
        <div className="space-y-1">
          <dt className="text-muted-foreground">姓名</dt>
          <dd className="font-medium break-words">{profile.name}</dd>
        </div>
        <div className="space-y-1">
          <dt className="text-muted-foreground">邮箱</dt>
          <dd className="font-medium break-words">{profile.email}</dd>
        </div>
      </dl>
      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          if (nextOpen) setDraft(profile);
          setOpen(nextOpen);
        }}
      >
        <DialogTrigger render={<Button />}>编辑资料</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>编辑资料</DialogTitle>
            <DialogDescription>填写姓名和有效邮箱，保存后更新页面中的资料。</DialogDescription>
          </DialogHeader>
          <form onSubmit={saveProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="playground-profile-name">姓名</Label>
              <Input
                id="playground-profile-name"
                name="name"
                autoComplete="name"
                value={draft.name}
                onChange={(event) => setDraft({ ...draft, name: event.target.value })}
                required
                pattern=".*\S.*"
                title="请输入姓名，不能仅包含空格"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="playground-profile-email">邮箱</Label>
              <Input
                id="playground-profile-email"
                name="email"
                type="email"
                autoComplete="email"
                value={draft.email}
                onChange={(event) => setDraft({ ...draft, email: event.target.value })}
                required
              />
            </div>
            <DialogFooter>
              <DialogClose render={<Button type="button" variant="outline" />}>取消</DialogClose>
              <Button type="submit">保存</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function SimpleExample() {
  return (
    <div className="space-y-3">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>打开对话框</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>操作提示</DialogTitle>
            <DialogDescription>这是一个基础对话框示例。</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button />}>关闭</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
