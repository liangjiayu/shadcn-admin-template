# Shadcn Admin Template

基于 **React Router 7+ shadcn/ui** 的开箱即用中后台模板，侧重工程化与极致的开发体验。

## ✨ 特性

- 🚀 **最新技术栈** — React 19 + React Router 7（SPA）+ TypeScript 5。
- 🏢 **中后台开箱即用** — 预置基础布局、空白布局，以及 403 / 404 / 500 异常页。
- 🎨 **主题切换** — 内置亮/暗模式，基于 Tailwind v4 可扩展自定义主题。
- 🔐 **权限管理** — 独立 `access-store`，支持按角色或资源粒度声明式控制。
- 🌐 **统一请求层** — axios 封装，拦截器统一处理错误提示与 401 重定向。
- 🤖 **接口一键生成** — 基于 OpenAPI / Swagger schema 自动生成类型化 service。
- ⚡️ **极速工具链** — Vite 7 + `oxlint` / `oxfmt`，取代 ESLint + Prettier。
- 📋 **提交即规范** — `husky` + `lint-staged` 提交前自动 lint 与 format。

## 🚀 快速开始

### 环境要求

- Node.js ≥ 20
- pnpm ≥ 10

### 安装与启动

```bash
# 1. 拉取模板
npx tiged liangjiayu/shadcn-admin-template shadcn-admin-template
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
