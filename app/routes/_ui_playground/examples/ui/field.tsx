import * as React from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
  FieldLegend,
  FieldContent,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

import { ExampleCard } from '../../components/example-card';

function FieldInputExample() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-input-username">用户名</FieldLabel>
          <Input id="field-input-username" type="text" placeholder="Max Leiter" />
          <FieldDescription>为账户选择一个唯一的用户名。</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-input-password">密码</FieldLabel>
          <FieldDescription>至少需要 8 个字符。</FieldDescription>
          <Input id="field-input-password" type="password" placeholder="••••••••" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

function FieldTextareaExample() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-textarea-feedback">反馈</FieldLabel>
          <Textarea id="field-textarea-feedback" placeholder="您的反馈帮助我们改进…" rows={4} />
          <FieldDescription>分享您对我们服务的看法。</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

const itemsSelect = [
  { label: '选择部门', value: null },
  { label: '研发', value: 'engineering' },
  { label: '设计', value: 'design' },
  { label: '市场', value: 'marketing' },
  { label: '销售', value: 'sales' },
  { label: '客户支持', value: 'support' },
  { label: '人力资源', value: 'hr' },
  { label: '财务', value: 'finance' },
  { label: '运营', value: 'operations' },
];
function FieldSelectExample() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>部门</FieldLabel>
      <Select items={itemsSelect}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {itemsSelect.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>选择您的部门或工作领域。</FieldDescription>
    </Field>
  );
}

function FieldSliderExample() {
  const [value, setValue] = React.useState([200, 800]);
  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>价格范围</FieldTitle>
      <FieldDescription>
        设置预算范围（美元）：<span className="font-medium tabular-nums">{value[0]}</span> -{' '}
        <span className="font-medium tabular-nums">{value[1]}</span>。
      </FieldDescription>
      <Slider
        value={value}
        onValueChange={(nextValue) => setValue(nextValue as [number, number])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="价格范围"
      />
    </Field>
  );
}

function FieldFieldsetExample() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>地址信息</FieldLegend>
      <FieldDescription>我们需要您的地址来配送订单。</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-fieldset-street">街道地址</FieldLabel>
          <Input id="field-fieldset-street" type="text" placeholder="123 Main St" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="field-fieldset-city">城市</FieldLabel>
            <Input id="field-fieldset-city" type="text" placeholder="New York" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-fieldset-zip">邮政编码</FieldLabel>
            <Input id="field-fieldset-zip" type="text" placeholder="90502" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}

function FieldCheckboxExample() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">在桌面上显示这些项目</FieldLegend>
        <FieldDescription>选择要在桌面显示的项目。</FieldDescription>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <Checkbox id="field-checkbox-finder-pref-9k2-hard-disks-ljj" />
            <FieldLabel
              htmlFor="field-checkbox-finder-pref-9k2-hard-disks-ljj"
              className="font-normal"
              defaultChecked
            >
              硬盘
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-checkbox-finder-pref-9k2-external-disks-1yg" />
            <FieldLabel
              htmlFor="field-checkbox-finder-pref-9k2-external-disks-1yg"
              className="font-normal"
            >
              外置磁盘
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-checkbox-finder-pref-9k2-cds-dvds-fzt" />
            <FieldLabel
              htmlFor="field-checkbox-finder-pref-9k2-cds-dvds-fzt"
              className="font-normal"
            >
              CD、DVD 和 iPod
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-checkbox-finder-pref-9k2-connected-servers-6l2" />
            <FieldLabel
              htmlFor="field-checkbox-finder-pref-9k2-connected-servers-6l2"
              className="font-normal"
            >
              已连接的服务器
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="field-checkbox-finder-pref-9k2-sync-folders-nep" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="field-checkbox-finder-pref-9k2-sync-folders-nep">
            同步桌面与文稿文件夹
          </FieldLabel>
          <FieldDescription>
            您的桌面与文稿文件夹正通过 iCloud 云盘同步，可从其他设备访问。
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}

function FieldRadioExample() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">订阅方案</FieldLegend>
      <FieldDescription>包年和终身方案可节省更多费用。</FieldDescription>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="field-radio-plan-monthly" />
          <FieldLabel htmlFor="field-radio-plan-monthly" className="font-normal">
            包月（9.99 美元/月）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="field-radio-plan-yearly" />
          <FieldLabel htmlFor="field-radio-plan-yearly" className="font-normal">
            包年（99.99 美元/年）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="field-radio-plan-lifetime" />
          <FieldLabel htmlFor="field-radio-plan-lifetime" className="font-normal">
            终身（299.99 美元）
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
}

function FieldSwitchExample() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="field-switch-2fa">多因素身份验证</FieldLabel>
      <Switch id="field-switch-2fa" />
    </Field>
  );
}

function FieldChoiceCardExample() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">计算环境</FieldLegend>
        <FieldDescription>选择集群的计算环境。</FieldDescription>
        <RadioGroup defaultValue="kubernetes">
          <FieldLabel htmlFor="field-choice-card-kubernetes-r2h">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kubernetes</FieldTitle>
                <FieldDescription>在 K8s 集群中运行 GPU 工作负载。</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="kubernetes" id="field-choice-card-kubernetes-r2h" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="field-choice-card-vm-z4k">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>虚拟机</FieldTitle>
                <FieldDescription>访问集群以运行 GPU 工作负载。</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="vm" id="field-choice-card-vm-z4k" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  );
}

function FieldFieldGroupExample() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLabel>回复</FieldLabel>
        <FieldDescription>当 ChatGPT 完成研究或图像生成等耗时请求时接收通知。</FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="field-field-group-push" defaultChecked disabled />
            <FieldLabel htmlFor="field-field-group-push" className="font-normal">
              推送通知
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>任务</FieldLabel>
        <FieldDescription>
          您创建的任务有更新时接收通知。 <a href="#">管理任务</a>
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="field-field-group-push-tasks" />
            <FieldLabel htmlFor="field-field-group-push-tasks" className="font-normal">
              推送通知
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="field-field-group-email-tasks" />
            <FieldLabel htmlFor="field-field-group-email-tasks" className="font-normal">
              邮件通知
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  );
}

export default function FieldExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="input" title="输入框">
        <FieldInputExample />
      </ExampleCard>
      <ExampleCard id="textarea" title="多行输入">
        <FieldTextareaExample />
      </ExampleCard>
      <ExampleCard id="select" title="选择器">
        <FieldSelectExample />
      </ExampleCard>
      <ExampleCard id="slider" title="滑块">
        <FieldSliderExample />
      </ExampleCard>
      <ExampleCard id="fieldset" title="字段集">
        <FieldFieldsetExample />
      </ExampleCard>
      <ExampleCard id="checkbox" title="复选框">
        <FieldCheckboxExample />
      </ExampleCard>
      <ExampleCard id="radio" title="单选项">
        <FieldRadioExample />
      </ExampleCard>
      <ExampleCard id="switch" title="开关">
        <FieldSwitchExample />
      </ExampleCard>
      <ExampleCard id="choice-card" title="选项卡片">
        <FieldChoiceCardExample />
      </ExampleCard>
      <ExampleCard id="field-group" title="字段分组">
        <FieldFieldGroupExample />
      </ExampleCard>
    </div>
  );
}
