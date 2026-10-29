import { Search } from 'lucide-react';
import { useState } from 'react';

import { InputGroupText, InputGroupButton, InputGroupTextarea } from '@/components/ui/input-group';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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

function AddonsExample() {
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

export default function InputGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="为输入框添加前缀图标。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="addons"
        title="前后缀与操作"
        description="输入框可组合文字前后缀、操作按钮与多行输入。"
      >
        <AddonsExample />
      </ExampleCard>
    </div>
  );
}
