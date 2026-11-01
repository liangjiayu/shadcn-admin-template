import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';

import { ExampleCard } from '../../components/example-card';

function TextareaDemoExample() {
  return <Textarea placeholder="在此输入消息。" />;
}

function TextareaFieldExample() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-field-textarea-message">消息</FieldLabel>
      <FieldDescription>在下方输入消息。</FieldDescription>
      <Textarea id="textarea-field-textarea-message" placeholder="在此输入消息。" />
    </Field>
  );
}

function TextareaDisabledExample() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled-textarea-disabled">消息</FieldLabel>
      <Textarea id="textarea-disabled-textarea-disabled" placeholder="在此输入消息。" disabled />
    </Field>
  );
}

function TextareaInvalidExample() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="textarea-invalid-textarea-invalid">消息</FieldLabel>
      <Textarea id="textarea-invalid-textarea-invalid" placeholder="在此输入消息。" aria-invalid />
      <FieldDescription>请输入有效的消息内容。</FieldDescription>
    </Field>
  );
}

function TextareaButtonExample() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="在此输入消息。" />
      <Button>发送消息</Button>
    </div>
  );
}

export default function TextareaExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <TextareaDemoExample />
      </ExampleCard>
      <ExampleCard id="field" title="字段">
        <TextareaFieldExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <TextareaDisabledExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <TextareaInvalidExample />
      </ExampleCard>
      <ExampleCard id="button" title="按钮">
        <TextareaButtonExample />
      </ExampleCard>
    </div>
  );
}
