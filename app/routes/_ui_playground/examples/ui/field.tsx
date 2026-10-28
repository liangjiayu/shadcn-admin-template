import { useState } from 'react';

import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

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
