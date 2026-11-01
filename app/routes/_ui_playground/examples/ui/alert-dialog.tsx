import { CircleFadingPlusIcon, BluetoothIcon, Trash2Icon } from 'lucide-react';

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
  AlertDialogMedia,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import { ExampleCard } from '../../components/example-card';

function AlertDialogBasicExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">显示对话框</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确定要继续吗？</AlertDialogTitle>
          <AlertDialogDescription>
            此操作无法撤销，将永久删除您的账户，并从服务器中移除相关数据。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>继续</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertDialogSmallExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">显示对话框</Button>} />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>允许配件连接吗？</AlertDialogTitle>
          <AlertDialogDescription>是否允许此 USB 配件连接到当前设备？</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>不允许</AlertDialogCancel>
          <AlertDialogAction>允许</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertDialogMediaExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">共享项目</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingPlusIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>共享此项目吗？</AlertDialogTitle>
          <AlertDialogDescription>拥有链接的任何人都可以查看和编辑此项目。</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>共享</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertDialogSmallWithMediaExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">显示对话框</Button>} />

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <BluetoothIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>允许配件连接吗？</AlertDialogTitle>
          <AlertDialogDescription>是否允许此 USB 配件连接到当前设备？</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>不允许</AlertDialogCancel>
          <AlertDialogAction>允许</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AlertDialogDestructiveExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive">删除对话</Button>} />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>删除此对话吗？</AlertDialogTitle>
          <AlertDialogDescription>
            这将永久删除此对话。前往 <a href="#">设置</a>删除对话中保存的记忆。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">取消</AlertDialogCancel>
          <AlertDialogAction variant="destructive">删除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function AlertDialogExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <AlertDialogBasicExample />
      </ExampleCard>
      <ExampleCard id="small" title="小尺寸">
        <AlertDialogSmallExample />
      </ExampleCard>
      <ExampleCard id="media" title="图标">
        <AlertDialogMediaExample />
      </ExampleCard>
      <ExampleCard id="small-with-media" title="小尺寸图标">
        <AlertDialogSmallWithMediaExample />
      </ExampleCard>
      <ExampleCard id="destructive" title="危险样式">
        <AlertDialogDestructiveExample />
      </ExampleCard>
    </div>
  );
}
