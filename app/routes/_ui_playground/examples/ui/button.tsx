import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  CircleFadingArrowUpIcon,
  GitBranchIcon as IconGitBranch,
  GitForkIcon as IconGitFork,
} from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from '../../components/example-card';

function ButtonDemoExample() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2">
      <Button variant="outline">按钮</Button>
      <Button variant="outline" size="icon" aria-label="提交">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}

function ButtonSizeExample() {
  return (
    <div className="flex flex-row items-start gap-8">
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">
          超小
        </Button>
        <Button size="icon-xs" aria-label="提交" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          小
        </Button>
        <Button size="icon-sm" aria-label="提交" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">默认</Button>
        <Button size="icon" aria-label="提交" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          大
        </Button>
        <Button size="icon-lg" aria-label="提交" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  );
}

function ButtonDefaultExample() {
  return <Button>按钮</Button>;
}

function ButtonOutlineExample() {
  return <Button variant="outline">描边</Button>;
}

function ButtonSecondaryExample() {
  return <Button variant="secondary">次要</Button>;
}

function ButtonGhostExample() {
  return <Button variant="ghost">轻量</Button>;
}

function ButtonDestructiveExample() {
  return <Button variant="destructive">危险</Button>;
}

function ButtonLinkExample() {
  return <Button variant="link">链接</Button>;
}

function ButtonIconExample() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  );
}

function ButtonWithIconExample() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <IconGitBranch data-icon="inline-start" />
        新建分支
      </Button>
      <Button variant="outline">
        派生
        <IconGitFork data-icon="inline-end" />
      </Button>
    </div>
  );
}

function ButtonRoundedExample() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">开始使用</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}

function ButtonSpinnerExample() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        生成中
      </Button>
      <Button variant="secondary" disabled>
        下载中
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  );
}

function ButtonAsLinkExample() {
  return (
    <a href="#" className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
      登录
    </a>
  );
}

export default function ButtonExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <ButtonDemoExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <ButtonSizeExample />
      </ExampleCard>
      <ExampleCard id="default" title="默认样式">
        <ButtonDefaultExample />
      </ExampleCard>
      <ExampleCard id="outline" title="描边">
        <ButtonOutlineExample />
      </ExampleCard>
      <ExampleCard id="secondary" title="次要样式">
        <ButtonSecondaryExample />
      </ExampleCard>
      <ExampleCard id="ghost" title="轻量样式">
        <ButtonGhostExample />
      </ExampleCard>
      <ExampleCard id="destructive" title="危险样式">
        <ButtonDestructiveExample />
      </ExampleCard>
      <ExampleCard id="link" title="链接">
        <ButtonLinkExample />
      </ExampleCard>
      <ExampleCard id="icon" title="图标">
        <ButtonIconExample />
      </ExampleCard>
      <ExampleCard id="with-icon" title="图标">
        <ButtonWithIconExample />
      </ExampleCard>
      <ExampleCard id="rounded" title="圆角">
        <ButtonRoundedExample />
      </ExampleCard>
      <ExampleCard id="spinner" title="加载状态">
        <ButtonSpinnerExample />
      </ExampleCard>
      <ExampleCard id="as-link" title="渲染为链接">
        <ButtonAsLinkExample />
      </ExampleCard>
    </div>
  );
}
