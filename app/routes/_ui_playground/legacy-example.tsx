import { redirect } from 'react-router';

import type { Route } from './+types/legacy-example';
import { findExample } from './registry';

export { ErrorBoundary } from './example';

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const example = findExample(
    `/_ui_playground/${params.library}/${params.component}/${params.example}`,
  );
  if (!example) throw new Response('用例不存在', { status: 404 });
  return redirect(
    `/_ui_playground/${example.library}/${example.component}#example-${example.slug}`,
  );
}

export default function LegacyExamplePage() {
  return null;
}
