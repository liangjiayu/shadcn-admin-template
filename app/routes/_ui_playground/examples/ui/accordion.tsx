import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function BasicExample() {
  return (
    <div id="example-accordion" className="space-y-4">
      <Accordion defaultValue={['usage']}>
        <AccordionItem value="usage">
          <AccordionTrigger>如何使用演示页？</AccordionTrigger>
          <AccordionContent>通过目录选择组件，在组件页面中查看并体验各个用例。</AccordionContent>
        </AccordionItem>
        <AccordionItem value="storage">
          <AccordionTrigger>数据会被保存吗？</AccordionTrigger>
          <AccordionContent>演示仅使用本地状态，刷新页面后恢复初始值。</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function MultipleExample() {
  return (
    <Accordion multiple defaultValue={['one', 'two']}>
      <AccordionItem value="one">
        <AccordionTrigger>安装方式</AccordionTrigger>
        <AccordionContent>使用项目已有的包管理器安装依赖。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>使用方式</AccordionTrigger>
        <AccordionContent>按需导入组件。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="three" disabled>
        <AccordionTrigger>暂不可用</AccordionTrigger>
        <AccordionContent>补充内容</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
