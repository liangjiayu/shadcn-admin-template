import { ChevronRightIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { ExampleCard } from '../../components/example-card';

function CardDemoExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>登录账户</CardTitle>
        <CardDescription>在下方输入邮箱以登录账户。</CardDescription>
        <CardAction>
          <Button variant="link">注册</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="card-demo-email">邮箱</Label>
              <Input id="card-demo-email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="card-demo-password">密码</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  忘记密码？
                </a>
              </div>
              <Input id="card-demo-password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          登录
        </Button>
        <Button variant="outline" className="w-full">
          通过 Google 登录
        </Button>
      </CardFooter>
    </Card>
  );
}

function CardSizeExample() {
  const featureName = '定期报告';
  return (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>{featureName}</CardTitle>
        <CardDescription>每周快照，无需手动导出。</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>选择每天或每周的执行时间。</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>发送至频道或指定团队成员。</span>
          </li>
          <li className="flex gap-2">
            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>包含图表、表格和关键指标。</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button size="sm" className="w-full">
          设置定期报告
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          查看新功能
        </Button>
      </CardFooter>
    </Card>
  );
}

function CardSpacingExample() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>服务条款</CardTitle>
        <CardDescription>接受协议前请先阅读条款。</CardDescription>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
          <div>这些条款适用于工作区的使用，包括访问共享文档、项目文件和协作工具。</div>
          <div>您应对上传的内容负责，并确保团队具有查看或编辑内容的相应权限。</div>
          <div>
            我们可能随服务发展调整功能或限制。如果更改明显影响您的工作流程，我们会通知工作区管理员。
          </div>
          <div>继续即表示您同意妥善保管账户凭据，并遵守组织的使用规范。</div>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">拒绝</Button>
        <Button>接受</Button>
      </CardFooter>
    </Card>
  );
}

function CardImageExample() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="活动封面"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">精选</Badge>
        </CardAction>
        <CardTitle>设计系统交流会</CardTitle>
        <CardDescription>关于组件接口、无障碍设计和提高交付效率的实践分享。</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">查看活动</Button>
      </CardFooter>
    </Card>
  );
}

export default function CardExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <CardDemoExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <CardSizeExample />
      </ExampleCard>
      <ExampleCard id="spacing" title="间距">
        <CardSpacingExample />
      </ExampleCard>
      <ExampleCard id="image" title="图片">
        <CardImageExample />
      </ExampleCard>
    </div>
  );
}
