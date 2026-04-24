# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 技术栈

React 19 + React Router 7（SPA 模式，`ssr: false`）+ TypeScript + Tailwind CSS v4 + shadcn/ui。状态层：TanStack Query（服务端状态）+ Zustand（客户端状态）。表单：React Hook Form + Zod。工具链：Vite + Oxc（oxlint / oxfmt）。包管理：pnpm。

## 常用命令

```bash
pnpm dev                 # 启动开发服务器
pnpm build               # 生产构建
pnpm preview             # 预览生产构建
pnpm typecheck           # react-router typegen && tsc
pnpm lint                # oxlint 检查
pnpm lint:fix            # oxlint 自动修复
pnpm format              # oxfmt 格式化
pnpm openapi             # 根据 config/openapi.js 重新生成API
```

提交前 husky + lint-staged 会自动跑 `oxlint --fix` 与 `oxfmt`。

## 路径别名

- `@/*` → `app/*`
- `@config/*` → `config/*`

导入顺序由 oxfmt `sortImports` 接管，不要手动调整。

## 约束与规则

### 自动生成与第三方代码

- `app/services/**`：由 `pnpm openapi` 从 `https://fast-api-mock.netlify.app/doc` 生成。新增/修改接口请改 schema 并重跑脚本；手动编辑会被下一次生成覆盖。
- `app/components/ui/**`：shadcn 组件，应通过 `npx shadcn@latest add <name>` 添加或更新。

### 请求层

- 所有 HTTP 请求通过 `@/utils/request`，不要直接引入 axios。
- 拦截器已处理：其他错误统一 `toast.error`。业务层不需要再弹错误 toast，只处理成功路径即可。

### 样式

- 使用 Tailwind v4 + shadcn
- 合并类名用 `cn`（`@/utils` 或 `@/utils/index`），不要直接字符串拼接。
- oxfmt 的 `sortTailwindcss` 会排序类名，不要手动重排与它对抗。

### 注释规范

- 只写重要的、有意义的注释，避免显而易见的废话注释
- 辅助工具类函数建议都写注释说明其用途
