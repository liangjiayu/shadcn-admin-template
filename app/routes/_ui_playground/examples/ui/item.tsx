import { FileText } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ItemSeparator } from '@/components/ui/item';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';

export function BasicExample() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div id="example-item" className="space-y-4">
      <ItemGroup>
        {['需求文档', '设计规范'].map((name) => (
          <Item key={name} variant="outline" role="listitem">
            <ItemMedia variant="icon">
              <FileText />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{name}</ItemTitle>
              <ItemDescription>团队共享文件</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline" onClick={() => setSelected(name)}>
                查看<span className="sr-only">{name}</span>
              </Button>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>
      <div role="status">{selected ? `当前查看：${selected}` : '请选择一个文件'}</div>
    </div>
  );
}

export function VariantsExample() {
  return (
    <ItemGroup>
      {(['default', 'outline', 'muted'] as const).map((variant, index) => (
        <div key={variant}>
          {index > 0 && <ItemSeparator />}
          <Item variant={variant} size="sm">
            <ItemContent>
              <ItemTitle>{variant} 列表项</ItemTitle>
              <ItemDescription>简洁的辅助说明</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      ))}
    </ItemGroup>
  );
}
