import { Search } from 'lucide-react';
import { useState } from 'react';

import { InputGroupText, InputGroupButton, InputGroupTextarea } from '@/components/ui/input-group';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  const [query, setQuery] = useState('');
  return (
    <div id="example-input-group" className="space-y-4">
      <Label htmlFor="demo-input-group">搜索项目</Label>
      <InputGroup>
        <InputGroupAddon>
          <Search aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupInput
          id="demo-input-group"
          placeholder="输入关键词"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputGroup>
      <div className="break-all">搜索词：{query || '未填写'}</div>
    </div>
  );
}

export function AddonsExample() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  return (
    <div className="max-w-md space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="网站域名" placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          aria-label="搜索内容"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setResult(query)}>搜索</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <div role="status">搜索：{result || '未提交'}</div>
      <InputGroup>
        <InputGroupTextarea aria-label="补充说明" placeholder="填写补充说明" />
        <InputGroupAddon align="block-end">
          <InputGroupText>支持多行文本</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
