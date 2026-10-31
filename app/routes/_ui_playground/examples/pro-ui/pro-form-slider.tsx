import { ProFormSlider } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormSliderExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="拖动滑块调整数值，提交值为数值数组。">
        <FormExample defaultValues={{ progress: [40] }}>
          <ProFormSlider name="progress" label="完成度" fieldProps={{ min: 0, max: 100 }} />
        </FormExample>
      </ExampleCard>
      <ExampleCard id="range" title="区间与步长" description="使用两个滑块选择区间，每次调整 5。">
        <FormExample defaultValues={{ range: [20, 80] }}>
          <ProFormSlider name="range" label="范围" fieldProps={{ min: 0, max: 100, step: 5 }} />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="hidden-value"
        title="隐藏数值"
        description="showValue=false 隐藏控件下方数值，提交结果仍可查看当前值。"
      >
        <FormExample defaultValues={{ volume: [50] }}>
          <ProFormSlider
            name="volume"
            label="音量"
            showValue={false}
            fieldProps={{ min: 0, max: 100, step: 10 }}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
