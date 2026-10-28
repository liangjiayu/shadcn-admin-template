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
          <AccordionContent>通过用例目录选择组件，每个用例都有独立的页面和地址。</AccordionContent>
        </AccordionItem>
        <AccordionItem value="storage">
          <AccordionTrigger>数据会被保存吗？</AccordionTrigger>
          <AccordionContent>演示仅使用本地状态，刷新页面后恢复初始值。</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
