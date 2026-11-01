# 依赖升级计划

日期：2026-11-01。本文保留历史计划，表中版本不代表当前状态。最新分类、版本和下载量见[依赖评估](./dependency-audit.md)。

当前已锁定 TypeScript 6.0.3、Oxfmt 0.75.0、Oxlint 1.90.0、Node 类型 24.19.2、lucide-react 1.66.0。本次仅更新文档，未重新执行应用检查。

## 历史升级目标

关联包一起更新，主版本升级单独处理。

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

评估时 Axios、ahooks、Query 新版发布不足一周，建议观察两周；安全修复优先。

## 历史迁移建议

| 依赖                    | 当前 → 目标     | 处理方式                                                |
| ----------------------- | --------------- | ------------------------------------------------------- |
| `@tanstack/react-table` | 8.21.3 → 9.3.1  | 修改 `pro-table.tsx` 及使用方，核对列类型、行模型和渲染 |
| `typescript`            | 5.9.3 → 7.0.2   | Router 已声明支持，仍需验证类型生成、构建和编辑器       |
| `oxfmt`                 | 0.45.0 → 0.75.0 | 固定版本，检查配置及格式差异                            |
| `oxlint`                | 1.60.0 → 1.90.0 | 固定版本，检查规则及诊断变化                            |

- Table v9 将 `useReactTable` 改为 `useTable`，按[迁移指南](https://tanstack.com/table/latest/docs/framework/react/guide/migrating)处理。
- TypeScript 可先通过 v6 排查过渡问题，参考[官方发布说明](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)。
- Oxfmt、Oxlint 目标版本仅发布数日，可先观察；替换 `latest`，格式改动与业务改动分开。

## 历史保留建议

| 依赖           | 保持版本 | 原因                                             |
| -------------- | -------- | ------------------------------------------------ |
| `cn`           | 0.4.0    | 0.5.1 刚发布，项目使用广泛，先观察并核对合并行为 |
| `lucide-react` | 1.66.0   | 声明为 `^1.8.0`，锁文件实际已解析到最新稳定版    |
| `lint-staged`  | 16.4.0   | v17 属于主版本升级，现有流程够用                 |
| pnpm           | 10.34.6  | v12 单独评估，不与业务依赖一起迁移               |

resolvers v6、v7 的主要破坏性变化涉及 Effect、TypeBox；项目使用 Zod，先升 v5 控制变更范围，参考[发布记录](https://github.com/react-hook-form/resolvers/releases)。

评估当日已是最新，保持即可：

- React Router 三个包 8.5.1、Vite 8.3.5、shadcn 4.23.0。
- date-fns 4.4.0、react-day-picker 10.0.2、class-variance-authority 0.7.1。
- nprogress 0.2.0、tw-animate-css 1.4.0、Husky 9.1.7、@umijs/openapi 1.14.1。

`shadcn`、`tw-animate-css` 按项目选择保留在生产依赖；升级 CLI 不会自动更新 `app/components/ui` 源码。

## 验收

每批升级前记录检查基线，升级后运行：

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm format:check
```

手动检查任务列表、表单、弹窗和主题。提交锁文件，CI 使用 `pnpm install --frozen-lockfile`。
