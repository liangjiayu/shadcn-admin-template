import * as React from 'react';

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxValue,
  useComboboxAnchor,
  ComboboxCollection,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxSeparator,
} from '@/components/ui/combobox';
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';

import { ExampleCard } from '../../components/example-card';

const frameworksBasic = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;
function ComboboxBasicExample() {
  return (
    <Combobox items={frameworksBasic}>
      <ComboboxInput placeholder="选择框架" />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配项。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const frameworksMultiple = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;
function ComboboxMultipleExample() {
  const anchor = useComboboxAnchor();
  return (
    <Combobox
      multiple
      autoHighlight
      items={frameworksMultiple}
      defaultValue={[frameworksMultiple[0]]}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>没有匹配项。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const frameworksClearButton = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;
function ComboboxClearButtonExample() {
  return (
    <Combobox items={frameworksClearButton} defaultValue={frameworksClearButton[0]}>
      <ComboboxInput placeholder="选择框架" showClear />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配项。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const timezonesGroups = [
  {
    value: 'Americas',
    items: [
      '(GMT-5) New York',
      '(GMT-8) Los Angeles',
      '(GMT-6) Chicago',
      '(GMT-5) Toronto',
      '(GMT-8) Vancouver',
      '(GMT-3) São Paulo',
    ],
  },
  {
    value: '欧洲',
    items: [
      '(GMT+0) London',
      '(GMT+1) Paris',
      '(GMT+1) Berlin',
      '(GMT+1) Rome',
      '(GMT+1) Madrid',
      '(GMT+1) Amsterdam',
    ],
  },
  {
    value: 'Asia/Pacific',
    items: [
      '(GMT+9) Tokyo',
      '(GMT+8) Shanghai',
      '(GMT+8) Singapore',
      '(GMT+4) Dubai',
      '(GMT+11) Sydney',
      '(GMT+9) Seoul',
    ],
  },
] as const;
function ComboboxGroupsExample() {
  return (
    <Combobox items={timezonesGroups}>
      <ComboboxInput placeholder="选择时区" />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配的时区。</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < timezonesGroups.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const countriesCustomItems = [
  { code: '', value: '', continent: '', label: '选择国家' },
  {
    code: 'ar',
    value: 'argentina',
    label: '阿根廷',
    continent: '南美洲',
  },
  { code: 'au', value: 'australia', label: '澳大利亚', continent: '大洋洲' },
  { code: 'br', value: 'brazil', label: '巴西', continent: '南美洲' },
  { code: 'ca', value: 'canada', label: '加拿大', continent: '北美洲' },
  { code: 'cn', value: 'china', label: '中国', continent: '亚洲' },
  {
    code: 'co',
    value: 'colombia',
    label: '哥伦比亚',
    continent: '南美洲',
  },
  { code: 'eg', value: 'egypt', label: '埃及', continent: '非洲' },
  { code: 'fr', value: 'france', label: '法国', continent: '欧洲' },
  { code: 'de', value: 'germany', label: '德国', continent: '欧洲' },
  { code: 'it', value: 'italy', label: '意大利', continent: '欧洲' },
  { code: 'jp', value: 'japan', label: '日本', continent: '亚洲' },
  { code: 'ke', value: 'kenya', label: '肯尼亚', continent: '非洲' },
  { code: 'mx', value: 'mexico', label: '墨西哥', continent: '北美洲' },
  {
    code: 'nz',
    value: 'new-zealand',
    label: '新西兰',
    continent: '大洋洲',
  },
  { code: 'ng', value: 'nigeria', label: '尼日利亚', continent: '非洲' },
  {
    code: 'za',
    value: 'south-africa',
    label: '南非',
    continent: '非洲',
  },
  { code: 'kr', value: 'south-korea', label: '韩国', continent: '亚洲' },
  {
    code: 'gb',
    value: 'united-kingdom',
    label: '英国',
    continent: '欧洲',
  },
  {
    code: 'us',
    value: 'united-states',
    label: '美国',
    continent: '北美洲',
  },
];
function ComboboxCustomItemsExample() {
  return (
    <Combobox
      items={countriesCustomItems.filter((country) => country.code !== '')}
      itemToStringValue={(country: (typeof countriesCustomItems)[number]) => country.label}
    >
      <ComboboxInput placeholder="搜索国家…" />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配的国家。</ComboboxEmpty>
        <ComboboxList>
          {(country) => (
            <ComboboxItem key={country.code} value={country}>
              <Item size="xs" className="p-0">
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap">{country.label}</ItemTitle>
                  <ItemDescription>
                    {country.continent} ({country.code})
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const frameworksInvalid = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;
function ComboboxInvalidExample() {
  return (
    <Combobox items={frameworksInvalid}>
      <ComboboxInput placeholder="选择框架" aria-invalid="true" />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配项。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const frameworksDisabled = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;
function ComboboxDisabledExample() {
  return (
    <Combobox items={frameworksDisabled}>
      <ComboboxInput placeholder="选择框架" disabled />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配项。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const frameworksAutoHighlight = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'] as const;
function ComboboxAutoHighlightExample() {
  return (
    <Combobox items={frameworksAutoHighlight} autoHighlight>
      <ComboboxInput placeholder="选择框架" />
      <ComboboxContent>
        <ComboboxEmpty>没有匹配项。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export default function ComboboxExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <ComboboxBasicExample />
      </ExampleCard>
      <ExampleCard id="multiple" title="多项选择">
        <ComboboxMultipleExample />
      </ExampleCard>
      <ExampleCard id="clear-button" title="清空按钮">
        <ComboboxClearButtonExample />
      </ExampleCard>
      <ExampleCard id="groups" title="分组">
        <ComboboxGroupsExample />
      </ExampleCard>
      <ExampleCard id="custom-items" title="自定义选项">
        <ComboboxCustomItemsExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <ComboboxInvalidExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <ComboboxDisabledExample />
      </ExampleCard>
      <ExampleCard id="auto-highlight" title="自动高亮">
        <ComboboxAutoHighlightExample />
      </ExampleCard>
    </div>
  );
}
