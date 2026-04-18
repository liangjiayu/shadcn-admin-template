import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/blank-layout.tsx', [
    route('login', 'routes/login.tsx'),
  ]),
  layout('routes/basic-layout.tsx', [
    index('routes/home.tsx'),
    route('task-demo', 'routes/task-demo/index.tsx'),
    route('task', 'routes/task/index.tsx'),
    route('exception/403', 'routes/exception/403.tsx'),
    route('exception/404', 'routes/exception/404.tsx'),
    route('exception/500', 'routes/exception/500.tsx'),
    route('*', 'routes/exception/404.tsx', { id: 'catch-all-404' }),
  ]),
] satisfies RouteConfig;
