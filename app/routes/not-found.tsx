import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-7xl font-bold tracking-tight">404</h1>
      <p className="text-lg text-muted-foreground">
        抱歉，您访问的页面不存在。
      </p>
      <Button asChild>
        <Link to="/">返回首页</Link>
      </Button>
    </main>
  )
}
