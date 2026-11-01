# 依赖升级计划

评估日期：2026-11-01。目标：兼顾稳定性与技术先进性。

执行状态：已升级下表全部 17 个依赖并更新锁文件；单独迁移和暂时保持项未变更。类型检查、Lint、构建和格式检查通过。浏览器服务不可用，页面交互待回归。

版本来自 npm 官方 registry；「当前 → 目标」记录升级前后的版本。后续升级需重新核对更新日志与兼容要求。

## 建议升级

关联包一起更新，按“React 与组件 → 请求与表单 → 工具 → 主版本迁移”分批处理。

| 依赖                                                      | 当前 → 目标        | 重点                             |
| --------------------------------------------------------- | ------------------ | -------------------------------- |
| `react`、`react-dom`                                      | 19.2.9 → 19.3.1    | 同步升级，检查渲染和交互         |
| `@types/react`                                            | 19.2.14 → 19.3.0   | 配合 React 更新                  |
| `@types/react-dom`                                        | 19.2.3 → 19.3.0    | 配合 React DOM 更新              |
| `@base-ui/react`                                          | 1.6.0 → 1.9.0      | 检查弹窗、菜单、选择器和键盘操作 |
| `tailwindcss`、`@tailwindcss/vite`                        | 4.2.2 → 4.3.3      | 同步升级，检查主题和样式         |
| `@tanstack/react-query`、`@tanstack/react-query-devtools` | 5.99.0 → 5.105.0   | 同步升级，检查请求和缓存         |
| `react-hook-form`                                         | 7.72.1 → 7.91.0    | 检查表单重置、校验和提交         |
| `zod`                                                     | 4.0.17 → 4.6.7     | 与表单依赖一起验证               |
| `@hookform/resolvers`                                     | 5.2.2 → 5.9.2      | 先保持 v5，暂不追刚发布的 v7     |
| `axios`                                                   | 1.15.0 → 1.21.0    | 检查请求封装和错误处理           |
| `ahooks`                                                  | 3.9.7 → 3.11.0     | 回归项目使用的 hooks             |
| `zustand`                                                 | 5.0.12 → 5.0.16    | 检查状态更新                     |
| `isbot`                                                   | 5.1.38 → 5.2.2     | 检查服务端识别行为               |
| `@types/node`                                             | 22.19.17 → 22.20.5 | 保留 Node 22 类型支持            |

Axios、ahooks、Query 的目标版本截至评估日发布不足一周，非紧急情况建议观察满两周再合入；安全修复优先。

## 单独迁移

| 依赖                    | 当前 → 目标     | 处理方式                                                |
| ----------------------- | --------------- | ------------------------------------------------------- |
| `@tanstack/react-table` | 8.21.3 → 9.3.1  | 修改 `pro-table.tsx` 及使用方，核对列类型、行模型和渲染 |
| `typescript`            | 5.9.3 → 7.0.2   | Router 已声明支持，仍需验证类型生成、构建和编辑器       |
| `oxfmt`                 | 0.45.0 → 0.75.0 | 固定版本，检查配置及格式差异                            |
| `oxlint`                | 1.60.0 → 1.90.0 | 固定版本，检查规则及诊断变化                            |

- Table v9 将 `useReactTable` 改为 `useTable`，按[迁移指南](https://tanstack.com/table/latest/docs/framework/react/guide/migrating)处理。
- TypeScript 可先通过 v6 排查过渡问题，参考[官方发布说明](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)。
- Oxfmt、Oxlint 目标版本仅发布数日，可先观察；替换 `latest`，格式改动与业务改动分开。

## 暂时保持

| 依赖           | 保持版本 | 原因                                             |
| -------------- | -------- | ------------------------------------------------ |
| `cn`           | 0.4.0    | 0.5.1 刚发布，项目使用广泛，先观察并核对合并行为 |
| `lucide-react` | 1.8.0    | 1.66.0 刚发布，没有新图标需求时优先级较低        |
| `lint-staged`  | 16.4.0   | v17 属于主版本升级，现有流程够用                 |
| pnpm           | 10.34.6  | v12 单独评估，不与业务依赖一起迁移               |

resolvers v6、v7 的主要破坏性变化涉及 Effect、TypeBox；项目使用 Zod，先升 v5 控制变更范围，参考[发布记录](https://github.com/react-hook-form/resolvers/releases)。

评估当日已是最新，保持即可：

- React Router 三个包 8.5.1、Vite 8.3.5、shadcn 4.23.0。
- date-fns 4.4.0、react-day-picker 10.0.2、class-variance-authority 0.7.1。
- nprogress 0.2.0、tw-animate-css 1.4.0、Husky 9.1.7、@umijs/openapi 1.14.1。

`shadcn` 可移入 `devDependencies`；升级 CLI 不会自动更新 `app/components/ui` 源码。

## 验收

每批升级前记录检查基线，升级后运行：

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm format:check
```

手动检查相关页面，重点覆盖任务列表、新建与编辑表单、弹窗和主题样式。保留 `package.json`、`pnpm-lock.yaml` 与必要源码差异，CI 使用 `pnpm install --frozen-lockfile`。
