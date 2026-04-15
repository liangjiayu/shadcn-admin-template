import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
  layout("routes/basic-layout.tsx", [
    index("routes/home.tsx"),
  ]),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig
