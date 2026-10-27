import { Search } from 'lucide-react';
import { useState } from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { ExampleCard } from './example-card';

const frameworks = ['React', 'Vue', 'Svelte'];

export function FormExamples() {
  const [text, setText] = useState('示例项目');
  const [description, setDescription] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [plan, setPlan] = useState('basic');
  const [enabled, setEnabled] = useState(true);
  const [status, setStatus] = useState<string | null>('draft');
  const [region, setRegion] = useState('shanghai');
  const [framework, setFramework] = useState<string | null>('React');
  const [date, setDate] = useState<Date>();
  const [volume, setVolume] = useState<number[]>([40]);
  const [bold, setBold] = useState(false);
  const [formats, setFormats] = useState<string[]>(['italic']);
  const [query, setQuery] = useState('');
  const [username, setUsername] = useState('ab');
  const invalid = username.trim().length < 3;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard
        component="input"
        title="Input · 输入框"
        description="输入文本并实时读取当前值。"
      >
        <Label htmlFor="demo-input">项目名称</Label>
        <Input id="demo-input" value={text} onChange={(event) => setText(event.target.value)} />
        <p className="break-all">当前值：{text || '未填写'}</p>
      </ExampleCard>
      <ExampleCard
        component="textarea"
        title="Textarea · 多行输入"
        description="填写说明并显示字数。"
      >
        <Label htmlFor="demo-textarea">项目说明</Label>
        <Textarea
          id="demo-textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="请输入项目说明"
        />
        <p>已输入 {description.length} 字</p>
      </ExampleCard>
      <ExampleCard
        component="checkbox"
        title="Checkbox · 复选框"
        description="勾选或取消单个选项。"
      >
        <div className="flex items-center gap-2">
          <Checkbox id="demo-checkbox" checked={agreed} onCheckedChange={setAgreed} />
          <Label htmlFor="demo-checkbox">接收邮件通知</Label>
        </div>
        <p>当前状态：{agreed ? '已勾选' : '未勾选'}</p>
      </ExampleCard>
      <ExampleCard
        component="radio-group"
        title="RadioGroup · 单选组"
        description="从多个方案中选择一个。"
      >
        <RadioGroup value={plan} onValueChange={setPlan} aria-label="订阅方案">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="demo-plan-basic" value="basic" />
            <Label htmlFor="demo-plan-basic">基础版</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="demo-plan-pro" value="pro" />
            <Label htmlFor="demo-plan-pro">专业版</Label>
          </div>
        </RadioGroup>
        <p>当前方案：{plan === 'basic' ? '基础版' : '专业版'}</p>
      </ExampleCard>
      <ExampleCard component="switch" title="Switch · 开关" description="切换即时生效的设置。">
        <div className="flex items-center gap-2">
          <Switch id="demo-switch" checked={enabled} onCheckedChange={setEnabled} />
          <Label htmlFor="demo-switch">自动保存</Label>
        </div>
        <p>自动保存：{enabled ? '开启' : '关闭'}</p>
      </ExampleCard>
      <ExampleCard component="select" title="Select · 选择器" description="通过弹出列表选择状态。">
        <Label id="demo-select-label">发布状态</Label>
        <Select
          value={status}
          onValueChange={setStatus}
          items={[
            { value: 'draft', label: '草稿' },
            { value: 'published', label: '已发布' },
          ]}
        >
          <SelectTrigger aria-labelledby="demo-select-label">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">草稿</SelectItem>
            <SelectItem value="published">已发布</SelectItem>
          </SelectContent>
        </Select>
        <p>当前值：{status}</p>
      </ExampleCard>
      <ExampleCard
        component="native-select"
        title="NativeSelect · 原生选择器"
        description="使用浏览器原生下拉列表。"
      >
        <Label htmlFor="demo-native-select">所在城市</Label>
        <NativeSelect
          id="demo-native-select"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        >
          <NativeSelectOption value="shanghai">上海</NativeSelectOption>
          <NativeSelectOption value="beijing">北京</NativeSelectOption>
        </NativeSelect>
        <p>当前城市：{region === 'shanghai' ? '上海' : '北京'}</p>
      </ExampleCard>
      <ExampleCard
        component="combobox"
        title="Combobox · 搜索选择"
        description="输入名称筛选选项，支持清空和空结果。"
      >
        <Label htmlFor="demo-combobox">技术框架</Label>
        <Combobox items={frameworks} value={framework} onValueChange={setFramework}>
          <ComboboxInput id="demo-combobox" placeholder="搜索框架" showClear />
          <ComboboxContent>
            <ComboboxEmpty>没有匹配的框架</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <p>当前选择：{framework ?? '未选择'}</p>
      </ExampleCard>
      <ExampleCard
        component="calendar"
        title="Calendar · 日历"
        description="选择单个日期，可切换月份。"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-auto w-fit max-w-full"
        />
        <p>当前日期：{date ? date.toLocaleDateString('zh-CN') : '未选择'}</p>
      </ExampleCard>
      <ExampleCard
        component="slider"
        title="Slider · 滑块"
        description="拖动或使用方向键调整数值。"
      >
        <Label id="demo-slider-label">音量</Label>
        <Slider
          aria-labelledby="demo-slider-label"
          value={volume}
          onValueChange={(value) => setVolume(Array.isArray(value) ? value : [value])}
          min={0}
          max={100}
        />
        <p>当前音量：{volume[0]}%</p>
      </ExampleCard>
      <ExampleCard component="toggle" title="Toggle · 切换按钮" description="点击切换按下状态。">
        <Toggle pressed={bold} onPressedChange={setBold} aria-label="切换粗体" variant="outline">
          粗体
        </Toggle>
        <p className={bold ? 'font-bold' : ''}>这段文字展示当前粗体效果。</p>
      </ExampleCard>
      <ExampleCard
        component="toggle-group"
        title="ToggleGroup · 切换按钮组"
        description="同时启用多种文字格式。"
      >
        <ToggleGroup
          multiple
          value={formats}
          onValueChange={setFormats}
          variant="outline"
          aria-label="文字格式"
        >
          <ToggleGroupItem value="bold" aria-label="粗体">
            粗体
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="斜体">
            斜体
          </ToggleGroupItem>
        </ToggleGroup>
        <p
          style={{
            fontWeight: formats.includes('bold') ? 700 : 400,
            fontStyle: formats.includes('italic') ? 'italic' : 'normal',
          }}
        >
          文字格式预览
        </p>
      </ExampleCard>
      <ExampleCard
        component="input-group"
        title="InputGroup · 输入框组合"
        description="为输入框添加前缀图标。"
      >
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
        <p className="break-all">搜索词：{query || '未填写'}</p>
      </ExampleCard>
      <ExampleCard
        component="field"
        title="Field · 表单字段"
        description="组合标签、说明、输入及校验信息。"
      >
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
      </ExampleCard>
    </div>
  );
}
