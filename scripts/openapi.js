import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateService } from '@umijs/openapi';

const filename = fileURLToPath(import.meta.url);
const rootDir = resolve(filename, '../..');

/**
 * openapi 自动生成接口函数工具
 * @see https://github.com/chenshuai2144/openapi2typescript
 */
generateService({
  schemaPath: 'https://fast-api-mock.netlify.app/doc',
  requestLibPath: "import request from '@/utils/request'",
  projectName: 'fast-api',
  namespace: 'FastAPI',
  serversPath: join(rootDir, 'app/services'),
  isCamelCase: false,
});
