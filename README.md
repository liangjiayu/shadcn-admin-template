# shadcn-admin-template

基于 **React Router 7（SPA 模式）+ shadcn/ui** 的开箱即用中后台模板，侧重工程化与极致的开发体验。

## ✨ 特性

- ⚛️ **React 19 + React Router 7** — 以 SPA 模式（`ssr: false`）运行，支持文件式路由与类型化 loader。
- 🎨 **shadcn/ui + Tailwind CSS v4** — 组件随取随用，主题与样式完全可控。
- 🧰 **TypeScript 全量覆盖** — 路由、请求、表单端到端类型安全。
- 🔁 **TanStack Query + Zustand** — 服务端状态与客户端状态分层清晰。
- 📝 **React Hook Form + Zod** — 表单与 schema 校验一体化。
- 🌐 **统一请求层** — 基于 axios 封装 `@/utils/request`，拦截器统一处理错误提示（`toast.error`）和 401 重定向。
- 🤖 **OpenAPI 自动生成** — 一条命令从 schema 生成类型化 service，告别手写接口。
- ⚡ **Oxc 工具链** — 使用 `oxlint` / `oxfmt` 取代 ESLint + Prettier，速度提升数十倍。
- 🧱 **预置布局与路由** — 内置 `basic-layout`（侧边栏 + 面包屑）、`blank-layout`（登录等）以及 403 / 404 / 500 异常页。
- 🪝 **提交即规范** — `husky` + `lint-staged` 在提交前自动执行 `oxlint --fix` 和 `oxfmt`。

## 🛠 技术栈

| 分类       | 方案                                               |
| ---------- | -------------------------------------------------- |
| 框架       | React 19、React Router 7                           |
| 语言       | TypeScript 5                                       |
| UI         | shadcn/ui、Tailwind CSS v4、Radix UI、lucide-react |
| 状态管理   | TanStack Query、Zustand                            |
| 表单与校验 | React Hook Form、Zod                               |
| 请求       | axios（通过 `@/utils/request` 调用）               |
| 工具库     | ahooks、tailwind-merge、sonner                     |
| 构建       | Vite 7                                             |
| 质量工具   | oxlint、oxfmt、husky、lint-staged                  |
| 包管理     | pnpm 10                                            |

## 🚀 快速开始

### 环境要求

- Node.js ≥ 20
- pnpm ≥ 10（仓库已通过 `packageManager` 锁定）

### 安装与启动

```bash
# 1. 克隆仓库
git clone https://github.com/<your-name>/shadcn-admin-template.git
cd shadcn-admin-template

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev
```

默认访问 <http://localhost:5173>。

### 常用命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 生产构建
pnpm preview      # 本地预览构建产物
pnpm typecheck    # 生成路由类型并运行 tsc
pnpm lint         # oxlint 检查
pnpm lint:fix     # oxlint 自动修复
pnpm format       # oxfmt 格式化
pnpm openapi      # 依据 config/openapi.js 重新生成接口层
```

## 📁 目录结构

```
app/
├── assets/          # 静态资源
├── components/      # 业务组件 & shadcn/ui 组件（components/ui）
├── constants/       # 常量
├── hooks/           # 自定义 hooks
├── layout/          # basic-layout / blank-layout
├── routes/          # 路由页面（与 app/routes.ts 对应）
├── services/        # 由 pnpm openapi 自动生成的接口层（勿手改）
├── store/           # Zustand store
├── styles/          # 全局样式
├── types/           # 全局类型
├── utils/           # request、query-client 等工具
├── root.tsx         # 应用入口
└── routes.ts        # 路由声明
config/
├── openapi.js       # OpenAPI 生成配置
└── side-menu-config.tsx  # 侧边菜单配置
```

## 🔧 常见配置

### 添加 shadcn 组件

```bash
npx shadcn@latest add button
```

组件会被放到 `app/components/ui/` 下，通过 `@/components/ui/button` 导入。

### 添加路由

在 `app/routes.ts` 中声明新的路由节点，并在 `config/side-menu-config.tsx` 中补充菜单项。

### 修改接口 schema

编辑 `config/openapi.js` 中的 `schemaPath`，然后运行：

```bash
pnpm openapi
```

### 路径别名

- `@/*` → `app/*`
- `@config/*` → `config/*`

## 📄 License

MIT
