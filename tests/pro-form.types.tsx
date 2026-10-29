import type { UseFormReturn } from 'react-hook-form';

import {
  ProForm,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormCombobox,
  ProFormDatePicker,
  ProFormField,
  ProFormInput,
  ProFormNumber,
  ProFormPassword,
  ProFormRadioGroup,
  ProFormSelect,
  ProFormSlider,
  ProFormSwitch,
  ProFormTextarea,
  type ProFormOption,
} from '@/components/pro-form';

type Input = {
  profile: { name: string };
  code: string;
  quantity: number | null;
  selected: number[];
  choice: 'a' | 'b' | null;
  enabled: boolean;
  range: number[];
  date?: string | null;
};
type Output = Omit<Input, 'code'> & { code: number };
declare const form: UseFormReturn<Input, unknown, Output>;
declare const multiple: boolean;

const options = [{ label: 'One', value: 1 }] as const satisfies readonly ProFormOption[];
const choices = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
] as const;

export const validFields = (
  <>
    <ProFormInput
      control={form.control}
      name="profile.name"
      defaultValue=""
      rules={{ required: true }}
      shouldUnregister
    />
    <ProFormPassword control={form.control} name="code" />
    <ProFormTextarea control={form.control} name="profile.name" />
    <ProFormNumber control={form.control} name="quantity" />
    <ProFormSelect control={form.control} name="selected" multiple options={options} />
    <ProFormSelect control={form.control} name="choice" options={choices} />
    <ProFormCombobox control={form.control} name="selected" multiple options={options} />
    <ProFormCombobox control={form.control} name="choice" options={choices} />
    <ProFormRadioGroup control={form.control} name="choice" options={choices} />
    <ProFormCheckboxGroup control={form.control} name="selected" options={options} />
    <ProFormCheckbox control={form.control} name="enabled" />
    <ProFormSwitch control={form.control} name="enabled" />
    <ProFormSlider control={form.control} name="range" />
    <ProFormDatePicker control={form.control} name="date" allowClear={false} />
    <ProFormField
      control={form.control}
      name="code"
      render={({ field }) => {
        return typeof field.value === 'string' ? field.value : null;
      }}
    />
  </>
);

export const contextFields = (
  <>
    <ProFormInput name="code" />
    <ProFormNumber name="quantity" />
    <ProFormSelect name="choice" options={choices} />
    <ProFormSelect name="selected" multiple={multiple} options={options} />
    <ProFormCombobox name="choice" options={choices} />
    <ProFormCombobox name="selected" multiple={multiple} options={options} />
    <ProFormInput<Input> name="profile.name" />
    <ProFormSelect<Input> name="choice" options={choices} />
    <ProFormCombobox<Input> name="selected" multiple options={options} />
    <ProFormSelect<Input> name="selected" multiple options={options} />
  </>
);

// @ts-expect-error 字段路径必须存在。
export const invalidPath = <ProFormInput control={form.control} name="profile.missing" />;
export const invalidComboboxLabel = (
  <ProFormCombobox
    control={form.control}
    name="choice"
    // @ts-expect-error 搜索标签必须是字符串。
    options={[{ label: <span>A</span>, value: 'a' }]}
  />
);

export const conflictingValue = (
  // @ts-expect-error 表单拥有受控值。
  <ProFormInput control={form.control} name="code" fieldProps={{ value: '123' }} />
);
export const conflictingHandler = (
  <ProFormSelect
    control={form.control}
    name="selected"
    multiple
    options={options}
    // @ts-expect-error 表单拥有变更事件。
    fieldProps={{ onChange: () => {} }}
  />
);
export const conflictingChildren = (
  // @ts-expect-error 控件结构由组件自身管理。
  <ProFormInput control={form.control} name="code" fieldProps={{ children: 'value' }} />
);
export const conflictingRef = (
  // @ts-expect-error 控件引用由表单管理。
  <ProFormInput control={form.control} name="code" fieldProps={{ ref: () => {} }} />
);
export const conflictingRequired = (
  // @ts-expect-error 必填标记在顶层声明，校验通过 rules 或 resolver 配置。
  <ProFormInput control={form.control} name="code" fieldProps={{ required: true }} />
);
export const conflictingClear = (
  <ProFormCombobox
    control={form.control}
    name="choice"
    options={choices}
    // @ts-expect-error 搜索清空行为通过顶层属性配置。
    fieldProps={{ showClear: true }}
  />
);

export const transformedForm = (
  <ProForm
    form={form}
    onSubmit={(values) => {
      const output: number = values.code;
      // @ts-expect-error 提交接收转换后的类型。
      const input: string = values.code;
      void input;
      void output;
    }}
    onInvalid={(errors) => {
      const message: string | undefined = errors.code?.message;
      void message;
    }}
    onReset={() => form.reset()}
  />
);
