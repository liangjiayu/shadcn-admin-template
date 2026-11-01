import { InfoIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Field, FieldDescription, FieldLabel, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';

import { ExampleCard } from '../../components/example-card';

function InputBasicExample() {
  return <Input placeholder="输入文本" />;
}

function InputFieldExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-input-field-username">用户名</FieldLabel>
      <Input id="input-field-input-field-username" type="text" placeholder="输入用户名" />
      <FieldDescription>为账户选择一个唯一的用户名。</FieldDescription>
    </Field>
  );
}

function InputFieldGroupExample() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="input-field-group-fieldgroup-name">姓名</FieldLabel>
        <Input id="input-field-group-fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-field-group-fieldgroup-email">邮箱</FieldLabel>
        <Input
          id="input-field-group-fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>我们将向此邮箱发送更新。</FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          重置
        </Button>
        <Button type="submit">提交</Button>
      </Field>
    </FieldGroup>
  );
}

function InputDisabledExample() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="input-disabled-input-demo-disabled">邮箱</FieldLabel>
      <Input id="input-disabled-input-demo-disabled" type="email" placeholder="邮箱" disabled />
      <FieldDescription>此字段当前不可用。</FieldDescription>
    </Field>
  );
}

function InputInvalidExample() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid-input-invalid">无效输入</FieldLabel>
      <Input id="input-invalid-input-invalid" placeholder="错误" aria-invalid />
      <FieldDescription>此字段存在校验错误。</FieldDescription>
    </Field>
  );
}

function InputFileExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-file-picture">图片</FieldLabel>
      <Input id="input-file-picture" type="file" />
      <FieldDescription>选择要上传的图片。</FieldDescription>
    </Field>
  );
}

function InputInlineExample() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="搜索…" />
      <Button>搜索</Button>
    </Field>
  );
}

function InputGridExample() {
  return (
    <FieldGroup className="grid max-w-sm grid-cols-2">
      <Field>
        <FieldLabel htmlFor="input-grid-first-name">名字</FieldLabel>
        <Input id="input-grid-first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <FieldLabel htmlFor="input-grid-last-name">姓氏</FieldLabel>
        <Input id="input-grid-last-name" placeholder="Lee" />
      </Field>
    </FieldGroup>
  );
}

function InputRequiredExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-required-input-required">
        必填字段<span className="text-destructive">*</span>
      </FieldLabel>
      <Input id="input-required-input-required" placeholder="此字段为必填项" required />
      <FieldDescription>请填写此字段。</FieldDescription>
    </Field>
  );
}

function InputBadgeExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge-input-badge">
        Webhook 地址{' '}
        <Badge variant="secondary" className="ml-auto">
          测试版
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge-input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  );
}

function InputInputGroupExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-input-group-input-group-url">网站地址</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-input-group-input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}

function InputButtonGroupExample() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group-input-button-group">搜索</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group-input-button-group" placeholder="输入以搜索…" />
        <Button variant="outline">搜索</Button>
      </ButtonGroup>
    </Field>
  );
}

export default function InputExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <InputBasicExample />
      </ExampleCard>
      <ExampleCard id="field" title="字段">
        <InputFieldExample />
      </ExampleCard>
      <ExampleCard id="field-group" title="字段分组">
        <InputFieldGroupExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <InputDisabledExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <InputInvalidExample />
      </ExampleCard>
      <ExampleCard id="file" title="文件">
        <InputFileExample />
      </ExampleCard>
      <ExampleCard id="inline" title="行内布局">
        <InputInlineExample />
      </ExampleCard>
      <ExampleCard id="grid" title="网格布局">
        <InputGridExample />
      </ExampleCard>
      <ExampleCard id="required" title="必填">
        <InputRequiredExample />
      </ExampleCard>
      <ExampleCard id="badge" title="徽章">
        <InputBadgeExample />
      </ExampleCard>
      <ExampleCard id="input-group" title="输入框组合">
        <InputInputGroupExample />
      </ExampleCard>
      <ExampleCard id="button-group" title="按钮组">
        <InputButtonGroupExample />
      </ExampleCard>
    </div>
  );
}
