import * as React from 'react';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

import { ExampleCard } from '../../components/example-card';

const itemsDemo = [
  { label: '选择水果', value: null },
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '蓝莓', value: 'blueberry' },
  { label: '葡萄', value: 'grapes' },
  { label: '菠萝', value: 'pineapple' },
];
function SelectDemoExample() {
  return (
    <Select items={itemsDemo}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          {itemsDemo.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const itemsAlignItemWithTrigger = [
  { label: '选择水果', value: null },
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '蓝莓', value: 'blueberry' },
  { label: '葡萄', value: 'grapes' },
  { label: '菠萝', value: 'pineapple' },
];
function SelectAlignItemWithTriggerExample() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true);
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="select-align-item-with-trigger-align-item">对齐选项</FieldLabel>
          <FieldDescription>切换后将选中项与触发器对齐。</FieldDescription>
        </FieldContent>
        <Switch
          id="select-align-item-with-trigger-align-item"
          checked={alignItemWithTrigger}
          onCheckedChange={setAlignItemWithTrigger}
        />
      </Field>
      <Field>
        <Select items={itemsAlignItemWithTrigger} defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
            <SelectGroup>
              {itemsAlignItemWithTrigger.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );
}

function SelectGroupsExample() {
  const fruits = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '蓝莓', value: 'blueberry' },
  ];
  const vegetables = [
    { label: '胡萝卜', value: 'carrot' },
    { label: '西兰花', value: 'broccoli' },
    { label: '菠菜', value: 'spinach' },
  ];
  const allItems = [{ label: '选择水果', value: null }, ...fruits, ...vegetables];
  return (
    <Select items={allItems}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>蔬菜</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const northAmericaScrollable = [
  { label: '东部标准时间', value: 'est' },
  { label: '中部标准时间', value: 'cst' },
  { label: '山地标准时间', value: 'mst' },
  { label: '太平洋标准时间', value: 'pst' },
  { label: '阿拉斯加标准时间', value: 'akst' },
  { label: '夏威夷标准时间', value: 'hst' },
];
const europeAfricaScrollable = [
  { label: '格林尼治标准时间', value: 'gmt' },
  { label: '中欧标准时间', value: 'cet' },
  { label: '东欧标准时间', value: 'eet' },
  { label: '西欧夏令时间', value: 'west' },
  { label: '中非时间', value: 'cat' },
  { label: '东非时间', value: 'eat' },
];
const asiaScrollable = [
  { label: '莫斯科时间', value: 'msk' },
  { label: '印度标准时间', value: 'ist' },
  { label: '中国标准时间', value: 'cst_china' },
  { label: '日本标准时间', value: 'jst' },
  { label: '韩国标准时间', value: 'kst' },
  { label: '印度尼西亚中部标准时间', value: 'ist_indonesia' },
];
const australiaPacificScrollable = [
  { label: '澳大利亚西部标准时间', value: 'awst' },
  { label: '澳大利亚中部标准时间', value: 'acst' },
  { label: '澳大利亚东部标准时间', value: 'aest' },
  { label: '新西兰标准时间', value: 'nzst' },
  { label: '斐济时间', value: 'fjt' },
];
const southAmericaScrollable = [
  { label: '阿根廷时间', value: 'art' },
  { label: '玻利维亚时间', value: 'bot' },
  { label: '巴西利亚时间', value: 'brt' },
  { label: '智利标准时间', value: 'clt' },
];
const itemsScrollable = [
  { label: '选择时区', value: null },
  ...northAmericaScrollable,
  ...europeAfricaScrollable,
  ...asiaScrollable,
  ...australiaPacificScrollable,
  ...southAmericaScrollable,
];
function SelectScrollableExample() {
  return (
    <Select items={itemsScrollable}>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>北美洲</SelectLabel>
          {northAmericaScrollable.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>欧洲与非洲</SelectLabel>
          {europeAfricaScrollable.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>亚洲</SelectLabel>
          {asiaScrollable.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>澳大利亚与太平洋地区</SelectLabel>
          {australiaPacificScrollable.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>南美洲</SelectLabel>
          {southAmericaScrollable.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function SelectDisabledExample() {
  const items = [
    { label: '选择水果', value: null },
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '蓝莓', value: 'blueberry' },
    { label: '葡萄', value: 'grapes', disabled: true },
    { label: '菠萝', value: 'pineapple' },
  ];
  return (
    <Select items={items} disabled>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const itemsInvalid = [
  { label: '选择水果', value: null },
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '蓝莓', value: 'blueberry' },
];
function SelectInvalidExample() {
  return (
    <Field data-invalid className="w-full max-w-48">
      <FieldLabel>水果</FieldLabel>
      <Select items={itemsInvalid}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {itemsInvalid.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>请选择一种水果。</FieldError>
    </Field>
  );
}

export default function SelectExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <SelectDemoExample />
      </ExampleCard>
      <ExampleCard id="align-item-with-trigger" title="选项对齐触发器">
        <SelectAlignItemWithTriggerExample />
      </ExampleCard>
      <ExampleCard id="groups" title="分组">
        <SelectGroupsExample />
      </ExampleCard>
      <ExampleCard id="scrollable" title="滚动列表">
        <SelectScrollableExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <SelectDisabledExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <SelectInvalidExample />
      </ExampleCard>
    </div>
  );
}
