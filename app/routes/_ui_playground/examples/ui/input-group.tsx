import { Search } from 'lucide-react';
import { useState } from 'react';

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
