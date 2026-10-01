# ProForm

React Hook Form 管理状态，Zod 负责校验，shadcn/Base UI 提供交互和样式。
组件从 `@/components/pro-form` 导入，完整示例位于 `/_ui_playground`。

```tsx
const schema = z.object({ name: z.string().min(1, '请输入名称') });
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { name: '' },
});

<ProForm form={form} onFinish={save}>
  <ProFormInput
    control={form.control}
    name="name"
    label="名称"
    required
    fieldProps={{ placeholder: '请输入名称' }}
  />
</ProForm>;
```

## 表单

- `form`、`onFinish` 必填。支持 `onFinishFailed`、`disabled`、`id` 和原生表单属性。
- `layout` 支持 `vertical`（默认）、`horizontal`、`inline`。
- 默认 `noValidate=true`，由 resolver 统一展示校验错误；可以显式开启原生校验。
- `submitter={false}` 隐藏操作区；配置支持 `submitText`、`resetText`、按钮属性和 `render(actions, buttons)`。
- `actions` 包含 `submit()`、`reset()`、`submitting`、`disabled`，自定义按钮应使用这些状态与方法。
- 提交期间禁用输入与重置，并阻止重复提交。成功保留值，重置恢复 RHF 默认值。
- 异步失败保留字段值，恢复交互并展示通用错误，不弹 toast。业务可先 `form.setError('root.submit', { message })` 再抛出异常，保留自定义错误。
- 表单与字段禁用只影响交互，不通过 RHF 的 `disabled` 注册选项删除提交值。

## 字段

共同支持 `name`、`control`、`label`、`description`、`required`、`disabled`、`className` 和 `fieldProps`。
传入 `control={form.control}` 可以推断并检查嵌套字段路径；省略时从 ProForm 上下文绑定，或显式指定字段组件泛型。
`required` 表示必填标记，实际规则写在 schema 中。必须提供相应默认值，不能使用 `undefined` 作为受控字段的初始值。
`fieldProps` 是底层控件属性，表单管理的值、事件、ref、ID 与禁用状态不允许被覆盖。

| 组件                                             | 值                                           |
| ------------------------------------------------ | -------------------------------------------- |
| ProFormInput / ProFormPassword / ProFormTextarea | string                                       |
| ProFormNumber                                    | number 或 null，清空为 null                  |
| ProFormSelect                                    | string / number 或 null；multiple 模式为数组 |
| ProFormCheckbox / ProFormSwitch                  | boolean                                      |
| ProFormCheckboxGroup                             | (string / number)[]                          |
| ProFormRadioGroup                                | string / number 或 null                      |
| ProFormDatePicker                                | yyyy-MM-dd 本地日期字符串或 null             |

选择类控件的 `options` 使用 `{ label, value, disabled? }[]`，同一控件内 value 必须唯一。
ProFormSelect 支持 `placeholder`、`multiple`、`allowClear`（默认 true）；枚举字段不允许空值时可关闭清空按钮。
ProFormDatePicker 支持 `placeholder`、`calendarProps`（日期范围、禁用日期等），日期清空为 null。

`ProFormGroup` 支持 `title`、`description` 和 `columns={1|2|3}`，小屏自动单列。
`ProFormField` 的 `render` 暴露 `field`、`fieldState`、`controlProps` 和 `labelId`，用于扩展自定义控件；自定义分组可设置 `labelMode="group"` 并使用 `aria-labelledby={labelId}`。
自定义控件应绑定 `field.ref`、`field.onBlur`、值与变更事件，并透传 `controlProps`。

## 联动与类型转换

使用 RHF `useWatch`、`setValue`、`reset` 和 `setError`。条件卸载字段默认保留值；校验 schema 需要根据条件决定是否必填。
编辑数据加载完成后显式调用 `form.reset(values)`，默认值变化不会自动覆盖用户输入。
输入与输出类型不同的 schema 使用 `useForm<z.input<typeof schema>, unknown, z.output<typeof schema>>`；`onFinish` 接收转换后的类型。

类型契约检查：`pnpm exec tsc -p tests/tsconfig.json`。
