import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { STATUS_OPTIONS, type TaskStatus } from "../constants"

export type TaskSearchValue = {
  name?: string
  status?: TaskStatus
}

const ALL_VALUE = "__all__"

export function TaskSearch({
  onSubmit,
}: {
  onSubmit: (value: TaskSearchValue) => void
}) {
  const [name, setName] = useState("")
  const [status, setStatus] = useState<string>(ALL_VALUE)

  const handleSubmit = () => {
    onSubmit({
      name: name.trim() || undefined,
      status: status === ALL_VALUE ? undefined : (status as TaskStatus),
    })
  }

  const handleReset = () => {
    setName("")
    setStatus(ALL_VALUE)
    onSubmit({})
  }

  return (
    <Card>
      <CardContent className="flex flex-wrap items-end gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="task-search-name">名称</Label>
          <Input
            id="task-search-name"
            className="w-48"
            placeholder="请输入任务名称"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="task-search-status">状态</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="task-search-status" className="w-40">
              <SelectValue placeholder="全部" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_VALUE}>全部</SelectItem>
              {STATUS_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSubmit}>查询</Button>
          <Button variant="outline" onClick={handleReset}>
            重置
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
