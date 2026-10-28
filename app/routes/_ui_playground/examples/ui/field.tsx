import { useState } from 'react';

import { FieldSet, FieldLegend, FieldGroup, FieldContent } from '@/components/ui/field';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export function BasicExample() {
  const [username, setUsername] = useState('ab');
  const invalid = username.trim().length < 3;
  return (
    <div id="example-field" className="space-y-4">
      <Field data-invalid={invalid}>
        <FieldLabel htmlFor="demo-field">用户名</FieldLabel>
        <Input
          id="demo-field"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          aria-invalid={invalid}
          aria-describedby={
            invalid ? 'demo-field-description demo-field-error' : 'demo-field-description'
          }
        />
        <FieldDescription id="demo-field-description">请输入至少 3 个字符。</FieldDescription>
        {invalid && <FieldError id="demo-field-error">用户名不能少于 3 个字符。</FieldError>}
      </Field>
    </div>
  );
}

export function GroupExample() {
  return (
    <FieldSet className="max-w-md">
      <FieldLegend>通知设置</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-group-email">接收邮箱</FieldLabel>
          <Input id="field-group-email" type="email" placeholder="name@example.com" />
          <FieldDescription>用于接收项目通知。</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Switch id="field-group-enabled" />
          <FieldContent>
            <FieldLabel htmlFor="field-group-enabled">启用通知</FieldLabel>
            <FieldDescription>开启后接收进度更新。</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
