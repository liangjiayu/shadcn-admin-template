import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/blank-layout.tsx', [route('login', 'routes/login.tsx')]),
  layout('routes/basic-layout.tsx', [
    index('routes/home.tsx'),
    route('task', 'routes/task/index.tsx'),
    route('task-cards', 'routes/task-cards/index.tsx'),
    route('_ui_playground', 'routes/_ui_playground/layout.tsx', [
      index('routes/_ui_playground/index.tsx'),
      route(':library/:component', 'routes/_ui_playground/component-page.tsx'),
      route('*', 'routes/_ui_playground/not-found.tsx'),
    ]),
    route('exception/403', 'routes/exception/403.tsx'),
    route('exception/404', 'routes/exception/404.tsx'),
    route('exception/500', 'routes/exception/500.tsx'),
    route('*', 'routes/exception/404.tsx', { id: 'catch-all-404' }),
  ]),
] satisfies RouteConfig;
