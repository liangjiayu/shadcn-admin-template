import { ChevronsUpDown, ChevronDownIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { ExampleCard } from '../../components/example-card';

function CollapsibleDemoExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-4">
        <div className="text-sm font-semibold">订单 #4189</div>
        <CollapsibleTrigger render={<Button variant="ghost" size="icon" className="size-8" />}>
          <ChevronsUpDown />
          <span className="sr-only">展开或收起详情</span>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">状态</span>
        <span className="font-medium">已发货</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <div className="font-medium">收货地址</div>
          <div className="text-muted-foreground">100 Market St, San Francisco</div>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <div className="font-medium">商品</div>
          <div className="text-muted-foreground">录音室耳机 × 2</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CollapsibleBasicExample() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <CollapsibleTrigger render={<Button variant="ghost" className="w-full" />}>
            商品详情
            <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>展开或收起此面板以查看补充内容。</div>
            <Button size="xs">了解更多</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

function CollapsibleSettingsPanelExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>圆角</CardTitle>
        <CardDescription>设置元素的圆角半径。</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex items-start gap-2">
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="collapsible-settings-panel-radius-x" className="sr-only">
                水平圆角
              </FieldLabel>
              <Input id="collapsible-settings-panel-radius-x" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="collapsible-settings-panel-radius-y" className="sr-only">
                垂直圆角
              </FieldLabel>
              <Input id="collapsible-settings-panel-radius-y" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel htmlFor="collapsible-settings-panel-radius-width" className="sr-only">
                  水平圆角
                </FieldLabel>
                <Input
                  id="collapsible-settings-panel-radius-width"
                  placeholder="0"
                  defaultValue={0}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="collapsible-settings-panel-radius-height" className="sr-only">
                  垂直圆角
                </FieldLabel>
                <Input
                  id="collapsible-settings-panel-radius-height"
                  placeholder="0"
                  defaultValue={0}
                />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                aria-label={isOpen ? '收起圆角设置' : '展开圆角设置'}
              />
            }
          >
            {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export default function CollapsibleExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <CollapsibleDemoExample />
      </ExampleCard>
      <ExampleCard id="basic" title="基础用法">
        <CollapsibleBasicExample />
      </ExampleCard>
      <ExampleCard id="settings-panel" title="设置面板">
        <CollapsibleSettingsPanelExample />
      </ExampleCard>
    </div>
  );
}
