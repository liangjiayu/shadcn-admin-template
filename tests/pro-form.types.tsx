import type { UseFormReturn } from 'react-hook-form';

import {
  ProForm,
  ProFormField,
  ProFormInput,
  ProFormNumber,
  ProFormSelect,
} from '@/components/pro-form';

type Input = {
  profile: { name: string };
  code: string;
  quantity: number | null;
  selected: number[];
};
type Output = Omit<Input, 'code'> & { code: number };
declare const form: UseFormReturn<Input, unknown, Output>;

export const validFields = (
  <>
    <ProFormInput control={form.control} name="profile.name" />
    <ProFormNumber control={form.control} name="quantity" />
    <ProFormSelect
      control={form.control}
      name="selected"
      multiple
      options={[{ label: 'One', value: 1 }]}
    />
    <ProFormField
      control={form.control}
      name="code"
      render={({ field }) => {
        const input: string = field.value;
        return input;
      }}
    />
  </>
);

// @ts-expect-error Field paths must exist in the control's input model.
export const invalidPath = <ProFormInput control={form.control} name="profile.missing" />;
export const conflictingValue = (
  // @ts-expect-error The form owns controlled values.
  <ProFormInput control={form.control} name="code" fieldProps={{ value: '123' }} />
);
export const conflictingHandler = (
  <ProFormSelect
    control={form.control}
    name="selected"
    options={[]}
    // @ts-expect-error The form owns change handlers.
    fieldProps={{ onChange: () => {} }}
  />
);

export const transformedForm = (
  <ProForm
    form={form}
    onFinish={(values) => {
      const output: number = values.code;
      // @ts-expect-error Submit callbacks receive resolver output, not raw input.
      const input: string = values.code;
      void input;
      void output;
    }}
  />
);
