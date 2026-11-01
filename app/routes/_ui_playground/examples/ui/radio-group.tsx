import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { ExampleCard } from '../../components/example-card';

function RadioGroupDemoExample() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="radio-group-demo-r1" />
        <Label htmlFor="radio-group-demo-r1">默认</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="radio-group-demo-r2" />
        <Label htmlFor="radio-group-demo-r2">宽松</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="radio-group-demo-r3" />
        <Label htmlFor="radio-group-demo-r3">紧凑</Label>
      </div>
    </RadioGroup>
  );
}

function RadioGroupDescriptionExample() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="radio-group-description-desc-r1" />
        <FieldContent>
          <FieldLabel htmlFor="radio-group-description-desc-r1">默认</FieldLabel>
          <FieldDescription>适合大多数场景的标准间距。</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="radio-group-description-desc-r2" />
        <FieldContent>
          <FieldLabel htmlFor="radio-group-description-desc-r2">宽松</FieldLabel>
          <FieldDescription>元素之间留有更多空间。</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="radio-group-description-desc-r3" />
        <FieldContent>
          <FieldLabel htmlFor="radio-group-description-desc-r3">紧凑</FieldLabel>
          <FieldDescription>适合密集布局的最小间距。</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  );
}

function RadioGroupChoiceCardExample() {
  return (
    <RadioGroup defaultValue="plus" className="max-w-sm">
      <FieldLabel htmlFor="radio-group-choice-card-plus-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Plus</FieldTitle>
            <FieldDescription>适合个人和小型团队。</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="plus" id="radio-group-choice-card-plus-plan" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="radio-group-choice-card-pro-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Pro</FieldTitle>
            <FieldDescription>适合成长中的企业。</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="pro" id="radio-group-choice-card-pro-plan" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="radio-group-choice-card-enterprise-plan">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>企业版</FieldTitle>
            <FieldDescription>适合大型团队和企业。</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="enterprise" id="radio-group-choice-card-enterprise-plan" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  );
}

function RadioGroupFieldsetExample() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">订阅方案</FieldLegend>
      <FieldDescription>包年和终身方案可节省更多费用。</FieldDescription>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="radio-group-fieldset-plan-monthly" />
          <FieldLabel htmlFor="radio-group-fieldset-plan-monthly" className="font-normal">
            包月（9.99 美元/月）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="radio-group-fieldset-plan-yearly" />
          <FieldLabel htmlFor="radio-group-fieldset-plan-yearly" className="font-normal">
            包年（99.99 美元/年）
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="radio-group-fieldset-plan-lifetime" />
          <FieldLabel htmlFor="radio-group-fieldset-plan-lifetime" className="font-normal">
            终身（299.99 美元）
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
}

function RadioGroupDisabledExample() {
  return (
    <RadioGroup defaultValue="option2" className="w-fit">
      <Field orientation="horizontal" data-disabled>
        <RadioGroupItem value="option1" id="radio-group-disabled-disabled-1" disabled />
        <FieldLabel htmlFor="radio-group-disabled-disabled-1" className="font-normal">
          禁用
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option2" id="radio-group-disabled-disabled-2" />
        <FieldLabel htmlFor="radio-group-disabled-disabled-2" className="font-normal">
          选项 2
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option3" id="radio-group-disabled-disabled-3" />
        <FieldLabel htmlFor="radio-group-disabled-disabled-3" className="font-normal">
          选项 3
        </FieldLabel>
      </Field>
    </RadioGroup>
  );
}

function RadioGroupInvalidExample() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">通知偏好</FieldLegend>
      <FieldDescription>选择接收通知的方式。</FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="email" id="radio-group-invalid-invalid-email" aria-invalid />
          <FieldLabel htmlFor="radio-group-invalid-invalid-email" className="font-normal">
            仅邮件
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="sms" id="radio-group-invalid-invalid-sms" aria-invalid />
          <FieldLabel htmlFor="radio-group-invalid-invalid-sms" className="font-normal">
            仅短信
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="both" id="radio-group-invalid-invalid-both" aria-invalid />
          <FieldLabel htmlFor="radio-group-invalid-invalid-both" className="font-normal">
            邮件和短信
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
}

export default function RadioGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <RadioGroupDemoExample />
      </ExampleCard>
      <ExampleCard id="description" title="说明">
        <RadioGroupDescriptionExample />
      </ExampleCard>
      <ExampleCard id="choice-card" title="选项卡片">
        <RadioGroupChoiceCardExample />
      </ExampleCard>
      <ExampleCard id="fieldset" title="字段集">
        <RadioGroupFieldsetExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <RadioGroupDisabledExample />
      </ExampleCard>
      <ExampleCard id="invalid" title="无效状态">
        <RadioGroupInvalidExample />
      </ExampleCard>
    </div>
  );
}
