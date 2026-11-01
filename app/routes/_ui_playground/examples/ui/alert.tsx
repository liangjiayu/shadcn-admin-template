import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';

import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

import { ExampleCard } from '../../components/example-card';

function DemoExample() {
  return (
    <div className="w-full max-w-xl space-y-4">
      <Alert>
        <CheckCircle2 />
        <AlertTitle>支付成功</AlertTitle>
        <AlertDescription>
          您的 29.99 美元付款已处理成功，收据已发送至您的电子邮箱。
        </AlertDescription>
      </Alert>
      <Alert>
        <Info />
        <AlertTitle>新功能已上线</AlertTitle>
        <AlertDescription>现已支持深色模式，您可以在账户设置中启用。</AlertDescription>
      </Alert>
    </div>
  );
}

function BasicExample() {
  return (
    <Alert className="w-full max-w-xl">
      <CheckCircle2 />
      <AlertTitle>账户更新成功</AlertTitle>
      <AlertDescription>您的个人资料已保存，所有更改将立即生效。</AlertDescription>
    </Alert>
  );
}

function DestructiveExample() {
  return (
    <Alert variant="destructive" className="w-full max-w-xl">
      <AlertCircle />
      <AlertTitle>支付失败</AlertTitle>
      <AlertDescription>无法处理您的付款，请检查付款方式后重试。</AlertDescription>
    </Alert>
  );
}

function ActionExample() {
  return (
    <Alert className="w-full max-w-xl">
      <AlertTitle>深色模式现已可用</AlertTitle>
      <AlertDescription>前往个人资料设置即可启用。</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          启用
        </Button>
      </AlertAction>
    </Alert>
  );
}

function CustomColorsExample() {
  return (
    <Alert className="w-full max-w-xl border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100">
      <TriangleAlert />
      <AlertTitle>您的订阅将在 3 天后到期</AlertTitle>
      <AlertDescription className="text-amber-800 dark:text-amber-200">
        请及时续订以避免服务中断，或升级至付费套餐以继续使用服务。
      </AlertDescription>
    </Alert>
  );
}

export default function AlertExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览" description="使用图标、标题和描述展示需要关注的信息。">
        <DemoExample />
      </ExampleCard>
      <ExampleCard id="basic" title="基础提示" description="包含图标、标题和描述的基础提示。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="destructive"
        title="错误提示"
        description="使用 destructive 变体展示错误信息。"
      >
        <DestructiveExample />
      </ExampleCard>
      <ExampleCard
        id="action"
        title="操作按钮"
        description="通过 AlertAction 在提示右上角放置操作按钮。"
      >
        <ActionExample />
      </ExampleCard>
      <ExampleCard
        id="custom-colors"
        title="自定义颜色"
        description="通过自定义样式展示适配浅色和深色主题的警告提示。"
      >
        <CustomColorsExample />
      </ExampleCard>
    </div>
  );
}
