import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { ExampleCard } from '../../components/example-card';

const itemsBasic = [
  {
    value: 'item-1',
    trigger: '如何重置密码？',
    content:
      '在登录页点击“忘记密码”并输入邮箱，我们会向您发送密码重置链接，链接将在 24 小时后失效。',
  },
  {
    value: 'item-2',
    trigger: '可以更改订阅方案吗？',
    content: '可以随时在账户设置中升级或降级方案，更改将在下一个账单周期生效。',
  },
  {
    value: 'item-3',
    trigger: '支持哪些付款方式？',
    content: '支持主流信用卡、PayPal 和银行转账，所有付款均由合作支付平台安全处理。',
  },
];
function AccordionBasicExample() {
  return (
    <Accordion defaultValue={['item-1']} className="max-w-lg">
      {itemsBasic.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const itemsMultiple = [
  {
    value: 'notifications',
    trigger: '通知设置',
    content: '管理通知接收方式，可以开启邮件更新提醒或移动设备推送通知。',
  },
  {
    value: 'privacy',
    trigger: '隐私与安全',
    content:
      '管理隐私与安全偏好，包括双重验证、已连接设备、活跃会话和数据共享。也可以下载数据或删除账户。',
  },
  {
    value: 'billing',
    trigger: '账单与订阅',
    content: '查看当前方案、付款历史和待付款账单，更新付款方式、更改订阅等级或取消订阅。',
  },
];
function AccordionMultipleExample() {
  return (
    <Accordion multiple className="max-w-lg" defaultValue={['notifications']}>
      {itemsMultiple.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function AccordionDisabledExample() {
  return (
    <Accordion className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>可以查看账户历史记录吗？</AccordionTrigger>
        <AccordionContent>
          可以在控制台的账户历史记录中查看所有交易、方案变更和支持工单。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>高级功能说明</AccordionTrigger>
        <AccordionContent>此处包含高级功能信息，升级方案后即可查看。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>如何更新邮箱地址？</AccordionTrigger>
        <AccordionContent>
          可以在账户设置中更新邮箱。新邮箱将收到一封验证邮件，用于确认此更改。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

const itemsBorders = [
  {
    value: 'billing',
    trigger: '如何计费？',
    content:
      '提供包月和包年方案，在每个周期开始时收费，可随时取消。所有方案均包含自动备份、全天候支持和不限数量的团队成员。',
  },
  {
    value: 'security',
    trigger: '数据是否安全？',
    content:
      '我们使用端到端加密，符合 SOC 2 Type II 标准，并定期接受第三方安全审计。数据存储和传输均采用行业标准协议加密。',
  },
  {
    value: 'integration',
    trigger: '支持哪些集成？',
    content:
      '支持 Slack、Zapier、Salesforce、HubSpot 等 500 多种工具，也可通过 REST API 和 Webhook 创建自定义集成。',
  },
];
function AccordionBordersExample() {
  return (
    <Accordion className="max-w-lg rounded-lg border" defaultValue={['billing']}>
      {itemsBorders.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const itemsCard = [
  {
    value: 'plans',
    trigger: '有哪些订阅方案？',
    content:
      '提供入门版（9 美元/月）、专业版（29 美元/月）和企业版（99 美元/月）。不同方案提供相应的存储空间、API 访问、优先支持和团队协作功能。',
  },
  {
    value: 'billing',
    trigger: '如何计费？',
    content:
      '在账单周期开始时自动扣款，支持主流信用卡和 PayPal，企业客户还可使用 ACH 转账。每次付款后会通过邮件发送发票。',
  },
  {
    value: 'cancel',
    trigger: '如何取消订阅？',
    content: '可以随时在账户设置中取消订阅，无取消费用或违约金。当前账单周期结束前仍可继续使用。',
  },
];
function AccordionCardExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>订阅与账单</CardTitle>
        <CardDescription>关于账户、方案、付款和取消订阅的常见问题。</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={['plans']}>
          {itemsCard.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default function AccordionExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <AccordionBasicExample />
      </ExampleCard>
      <ExampleCard id="multiple" title="同时展开多项">
        <AccordionMultipleExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <AccordionDisabledExample />
      </ExampleCard>
      <ExampleCard id="borders" title="边框">
        <AccordionBordersExample />
      </ExampleCard>
      <ExampleCard id="card" title="卡片">
        <AccordionCardExample />
      </ExampleCard>
    </div>
  );
}
