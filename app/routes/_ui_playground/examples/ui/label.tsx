import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { ExampleCard } from '../../components/example-card';

function LabelDemoExample() {
  return (
    <div className="flex gap-2">
      <Checkbox id="label-demo-terms" />
      <Label htmlFor="label-demo-terms">接受条款和条件</Label>
    </div>
  );
}

export default function LabelExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="基础用法">
        <LabelDemoExample />
      </ExampleCard>
    </div>
  );
}
