import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';

import { ExampleCard } from '../../components/example-card';

function CheckboxBasicExample() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-basic-terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="checkbox-basic-terms-checkbox-basic">接受条款和条件</FieldLabel>
      </Field>
    </FieldGroup>
  );
}

function CheckboxDescriptionExample() {
  return (
    <FieldGroup className="mx-auto w-72">
      <Field orientation="horizontal">
        <Checkbox
          id="checkbox-description-terms-checkbox-desc"
          name="terms-checkbox-desc"
          defaultChecked
        />
        <FieldContent>
          <FieldLabel htmlFor="checkbox-description-terms-checkbox-desc">接受条款和条件</FieldLabel>
          <FieldDescription>勾选此项即表示您同意条款和条件。</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}

function CheckboxDisabledExample() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="checkbox-disabled-toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          disabled
        />
        <FieldLabel htmlFor="checkbox-disabled-toggle-checkbox-disabled">启用通知</FieldLabel>
      </Field>
    </FieldGroup>
  );
}

function CheckboxGroupExample() {
  return (
    <FieldSet>
      <FieldLegend variant="label">在桌面上显示这些项目：</FieldLegend>
      <FieldDescription>选择要在桌面显示的项目。</FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="checkbox-group-finder-pref-9k2-hard-disks-ljj-checkbox"
            name="finder-pref-9k2-hard-disks-ljj-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="checkbox-group-finder-pref-9k2-hard-disks-ljj-checkbox"
            className="font-normal"
          >
            硬盘
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="checkbox-group-finder-pref-9k2-external-disks-1yg-checkbox"
            name="finder-pref-9k2-external-disks-1yg-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="checkbox-group-finder-pref-9k2-external-disks-1yg-checkbox"
            className="font-normal"
          >
            外置磁盘
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="checkbox-group-finder-pref-9k2-cds-dvds-fzt-checkbox"
            name="finder-pref-9k2-cds-dvds-fzt-checkbox"
          />
          <FieldLabel
            htmlFor="checkbox-group-finder-pref-9k2-cds-dvds-fzt-checkbox"
            className="font-normal"
          >
            CD、DVD 和 iPod
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="checkbox-group-finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="checkbox-group-finder-pref-9k2-connected-servers-6l2-checkbox"
            className="font-normal"
          >
            已连接的服务器
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

function CheckboxInvalidStateExample() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-invalid>
        <Checkbox
          id="checkbox-invalid-state-terms-checkbox-invalid"
          name="terms-checkbox-invalid"
          aria-invalid
        />
        <FieldLabel htmlFor="checkbox-invalid-state-terms-checkbox-invalid">
          接受条款和条件
        </FieldLabel>
      </Field>
    </FieldGroup>
  );
}

export default function CheckboxExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <CheckboxBasicExample />
      </ExampleCard>
      <ExampleCard id="description" title="说明">
        <CheckboxDescriptionExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <CheckboxDisabledExample />
      </ExampleCard>
      <ExampleCard id="group" title="分组">
        <CheckboxGroupExample />
      </ExampleCard>
      <ExampleCard id="invalid-state" title="无效状态">
        <CheckboxInvalidStateExample />
      </ExampleCard>
    </div>
  );
}
