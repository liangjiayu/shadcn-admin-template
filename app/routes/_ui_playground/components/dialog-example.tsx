import { useState } from 'react';
import type { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

export function DialogExample() {
  const [profile, setProfile] = useState({ name: '张三', email: 'zhangsan@example.com' });
  const [draft, setDraft] = useState(profile);
  const [open, setOpen] = useState(false);

  function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProfile({ name: draft.name.trim(), email: draft.email.trim() });
    setOpen(false);
  }

  return (
    <Card id="example-dialog" data-example="dialog" className="min-w-0">
      <CardHeader>
        <CardTitle>Dialog · 弹窗编辑资料</CardTitle>
        <CardDescription>
          在弹窗中修改资料并保存；取消、关闭或按 Escape 将放弃本次修改。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
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
      </CardContent>
    </Card>
  );
}
