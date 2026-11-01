import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ExampleCard } from '../../components/example-card';

function PopoverBasicExample() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="w-fit" />}>
          打开气泡面板
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>尺寸</PopoverTitle>
            <PopoverDescription>设置图层的尺寸。</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  );
}

function PopoverAlignExample() {
  return (
    <>
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>起始</PopoverTrigger>
          <PopoverContent align="start" className="w-40">
            起始对齐
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>居中</PopoverTrigger>
          <PopoverContent align="center" className="w-40">
            居中对齐
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>末尾</PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            末尾对齐
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

function PopoverWithFormExample() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>打开气泡面板</PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>尺寸</PopoverTitle>
            <PopoverDescription>设置图层的尺寸。</PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="popover-with-form-width" className="w-1/2">
                宽度
              </FieldLabel>
              <Input id="popover-with-form-width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="popover-with-form-height" className="w-1/2">
                高度
              </FieldLabel>
              <Input id="popover-with-form-height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default function PopoverExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <PopoverBasicExample />
      </ExampleCard>
      <ExampleCard id="align" title="对齐">
        <PopoverAlignExample />
      </ExampleCard>
      <ExampleCard id="with-form" title="简单表单">
        <PopoverWithFormExample />
      </ExampleCard>
    </div>
  );
}
