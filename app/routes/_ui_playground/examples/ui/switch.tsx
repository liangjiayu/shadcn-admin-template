import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldGroup,
  FieldTitle,
} from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import { ExampleCard } from '../../components/example-card';

function SwitchDemoExample() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch-demo-airplane-mode" />
      <Label htmlFor="switch-demo-airplane-mode">飞行模式</Label>
    </div>
  );
}

function SwitchDescriptionExample() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-description-switch-focus-mode">跨设备共享</FieldLabel>
        <FieldDescription>在不同设备之间共享专注模式，离开应用后关闭。</FieldDescription>
      </FieldContent>
      <Switch id="switch-description-switch-focus-mode" />
    </Field>
  );
}

function SwitchChoiceCardExample() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <FieldLabel htmlFor="switch-choice-card-switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>跨设备共享</FieldTitle>
            <FieldDescription>在不同设备之间共享专注模式，离开应用后关闭。</FieldDescription>
          </FieldContent>
          <Switch id="switch-choice-card-switch-share" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="switch-choice-card-switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>启用通知</FieldTitle>
            <FieldDescription>启用或关闭专注模式时接收通知。</FieldDescription>
          </FieldContent>
          <Switch id="switch-choice-card-switch-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  );
}

function SwitchDisabledExample() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-switch-disabled-unchecked">禁用</FieldLabel>
    </Field>
  );
}

function SwitchInvalidExample() {
  return (
    <Field orientation="horizontal" className="max-w-sm" data-invalid>
      <FieldContent>
        <FieldLabel htmlFor="switch-invalid-switch-terms">接受条款和条件</FieldLabel>
        <FieldDescription>接受条款和条件后才能继续。</FieldDescription>
      </FieldContent>
      <Switch id="switch-invalid-switch-terms" aria-invalid />
    </Field>
  );
}

function SwitchSizeExample() {
  return (
    <FieldGroup className="w-full max-w-[10rem]">
      <Field orientation="horizontal">
        <Switch id="switch-size-switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-switch-size-sm">小</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-switch-size-default" size="default" />
        <FieldLabel htmlFor="switch-size-switch-size-default">默认</FieldLabel>
      </Field>
    </FieldGroup>
  );
}

export default function SwitchExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <SwitchDemoExample />
      </ExampleCard>
      <ExampleCard id="description" title="说明">
        <SwitchDescriptionExample />
      </ExampleCard>
      <ExampleCard id="choice-card" title="选项卡片">
        <SwitchChoiceCardExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <SwitchDisabledExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <SwitchInvalidExample />
      </ExampleCard>
      <ExampleCard id="size" title="尺寸">
        <SwitchSizeExample />
      </ExampleCard>
    </div>
  );
}
