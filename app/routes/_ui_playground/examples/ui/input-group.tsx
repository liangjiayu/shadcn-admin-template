import {
  Search,
  SearchIcon,
  EyeOffIcon,
  CopyIcon,
  FileCodeIcon,
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  StarIcon,
  LoaderIcon,
  FileCodeIcon as IconBrandJavascript,
  CopyIcon as IconCopy,
  CornerDownLeftIcon as IconCornerDownLeft,
  RefreshCwIcon as IconRefresh,
} from 'lucide-react';

import { Field, FieldDescription, FieldLabel, FieldGroup } from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Kbd } from '@/components/ui/kbd';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from '../../components/example-card';

function InputGroupDemoExample() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="搜索…" />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 条结果</InputGroupAddon>
    </InputGroup>
  );
}

function InputGroupInlineStartExample() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="input-group-inline-start-inline-start-input">输入框</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-inline-start-inline-start-input" placeholder="搜索…" />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>图标位于行内起始位置。</FieldDescription>
    </Field>
  );
}

function InputGroupInlineEndExample() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="input-group-inline-end-inline-end-input">输入框</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="input-group-inline-end-inline-end-input"
          type="password"
          placeholder="输入密码"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>图标位于行内末尾位置。</FieldDescription>
    </Field>
  );
}

function InputGroupBlockStartExample() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-group-block-start-block-start-input">输入框</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="input-group-block-start-block-start-input" placeholder="输入姓名" />
          <InputGroupAddon align="block-start">
            <InputGroupText>姓名</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>附加内容位于输入框上方。</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-group-block-start-block-start-textarea">多行输入</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="input-group-block-start-block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
              <CopyIcon />
              <span className="sr-only">复制</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>附加内容位于多行输入上方。</FieldDescription>
      </Field>
    </FieldGroup>
  );
}

function InputGroupBlockEndExample() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-group-block-end-block-end-input">输入框</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="input-group-block-end-block-end-input" placeholder="输入金额" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>附加内容位于输入框下方。</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="input-group-block-end-block-end-textarea">多行输入</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="input-group-block-end-block-end-textarea"
            placeholder="输入评论…"
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ml-auto">
              发布
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>附加内容位于多行输入下方。</FieldDescription>
      </Field>
    </FieldGroup>
  );
}

function InputGroupIconExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="搜索…" />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="输入邮箱" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="卡号" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="卡号" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="pl-0.5!" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="输入用户名" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="输入消息" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs text-muted-foreground">
            还可输入 120 个字符
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function InputGroupKbdExample() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="搜索…" />
      <InputGroupAddon>
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  );
}

function InputGroupSpinnerExample() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="搜索中…" />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="处理中…" />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="正在保存更改…" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>保存中…</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="正在刷新数据…" />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">请稍候…</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="input-group-textarea-textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>第 1 行，第 1 列</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            运行
            <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default function InputGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <InputGroupDemoExample />
      </ExampleCard>
      <ExampleCard id="inline-start" title="行内起始位置">
        <InputGroupInlineStartExample />
      </ExampleCard>
      <ExampleCard id="inline-end" title="行内末尾位置">
        <InputGroupInlineEndExample />
      </ExampleCard>
      <ExampleCard id="block-start" title="上方位置">
        <InputGroupBlockStartExample />
      </ExampleCard>
      <ExampleCard id="block-end" title="下方位置">
        <InputGroupBlockEndExample />
      </ExampleCard>
      <ExampleCard id="icon" title="图标">
        <InputGroupIconExample />
      </ExampleCard>
      <ExampleCard id="text" title="文本">
        <InputGroupTextExample />
      </ExampleCard>
      <ExampleCard id="kbd" title="快捷键">
        <InputGroupKbdExample />
      </ExampleCard>
      <ExampleCard id="spinner" title="加载状态">
        <InputGroupSpinnerExample />
      </ExampleCard>
      <ExampleCard id="textarea" title="多行输入">
        <InputGroupTextareaExample />
      </ExampleCard>
    </div>
  );
}
