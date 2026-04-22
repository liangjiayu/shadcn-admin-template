import {
  ActivityIcon,
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  CreditCardIcon,
  DollarSignIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Trend = 'up' | 'down';

const stats: {
  title: string;
  value: string;
  change: string;
  trend: Trend;
  icon: typeof DollarSignIcon;
  spark: number[];
}[] = [
  {
    title: '总收入',
    value: '¥45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSignIcon,
    spark: [12, 18, 14, 22, 19, 28, 26, 32, 30, 38, 34, 42],
  },
  {
    title: '订阅数',
    value: '+2,350',
    change: '+180.1%',
    trend: 'up',
    icon: UsersIcon,
    spark: [8, 10, 9, 14, 18, 16, 22, 20, 26, 24, 30, 34],
  },
  {
    title: '销量',
    value: '+12,234',
    change: '+19%',
    trend: 'up',
    icon: CreditCardIcon,
    spark: [20, 22, 18, 24, 21, 26, 23, 28, 25, 30, 27, 32],
  },
  {
    title: '活跃用户',
    value: '+573',
    change: '-4.3%',
    trend: 'down',
    icon: ActivityIcon,
    spark: [30, 28, 32, 26, 29, 24, 27, 22, 25, 20, 23, 18],
  },
];

const overviewData = [
  { month: '1月', value: 1890 },
  { month: '2月', value: 2390 },
  { month: '3月', value: 3490 },
  { month: '4月', value: 2000 },
  { month: '5月', value: 2780 },
  { month: '6月', value: 1890 },
  { month: '7月', value: 4300 },
  { month: '8月', value: 3490 },
  { month: '9月', value: 5200 },
  { month: '10月', value: 4780 },
  { month: '11月', value: 6000 },
  { month: '12月', value: 5300 },
];

const recentSales = [
  { id: 's1', name: '张三', email: 'zhangsan@example.com', amount: '+¥1,999.00' },
  { id: 's2', name: '李四', email: 'lisi@example.com', amount: '+¥39.00' },
  { id: 's3', name: '王五', email: 'wangwu@example.com', amount: '+¥299.00' },
  { id: 's4', name: '赵六', email: 'zhaoliu@example.com', amount: '+¥99.00' },
  { id: 's5', name: '孙七', email: 'sunqi@example.com', amount: '+¥39.00' },
];

const channels = [
  { label: '自然搜索', value: 38, color: '#3b82f6' },
  { label: '社交媒体', value: 27, color: '#10b981' },
  { label: '直接访问', value: 18, color: '#f59e0b' },
  { label: '邮件', value: 11, color: '#ef4444' },
  { label: '其他', value: 6, color: '#64748b' },
];

function progressColor(pct: number) {
  if (pct >= 85) return 'bg-emerald-500';
  if (pct >= 70) return 'bg-blue-500';
  if (pct >= 55) return 'bg-amber-500';
  return 'bg-rose-500';
}

const topProducts = [
  { name: 'Pro 年度套餐', sold: 1284, total: 1500, revenue: '¥256,800' },
  { name: '团队版（10 席）', sold: 932, total: 1200, revenue: '¥186,400' },
  { name: '基础订阅', sold: 2176, total: 2500, revenue: '¥108,800' },
  { name: '企业版定制', sold: 48, total: 60, revenue: '¥480,000' },
  { name: '增值服务包', sold: 684, total: 1000, revenue: '¥68,400' },
];

function Sparkline({ data, trend }: { data: number[]; trend: Trend }) {
  const w = 120;
  const h = 36;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * (h - 4) - 2}`)
    .join(' ');
  const lastY = h - ((data[data.length - 1] - min) / range) * (h - 4) - 2;
  const color = trend === 'up' ? 'text-emerald-500' : 'text-rose-500';
  const areaId = `spark-area-${trend}-${data[0]}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className={color}>
      <defs>
        <linearGradient id={areaId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${points} ${w},${h}`} fill={`url(#${areaId})`} />
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={w} cy={lastY} r="2" fill="currentColor" />
    </svg>
  );
}

function BarChart({ data }: { data: typeof overviewData }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex h-[260px] w-full items-end gap-2 pt-4">
      {data.map((d) => {
        const h = (d.value / max) * 100;
        return (
          <div
            key={d.month}
            className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div
              className="w-full rounded-t-sm bg-blue-400 transition-all group-hover:bg-blue-500"
              style={{ height: `${h}%` }}
              title={`${d.month}: ¥${d.value}`}
            />
            <span className="text-xs text-muted-foreground">{d.month}</span>
          </div>
        );
      })}
    </div>
  );
}

function DonutChart({ data }: { data: typeof channels }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const size = 160;
  const r = 64;
  const cx = size / 2;
  const cy = size / 2;
  const C = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--muted)" strokeWidth="16" />
        {data.map((d) => {
          const len = (d.value / total) * C;
          const el = (
            <circle
              key={d.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth="16"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="rotate-90 fill-foreground text-xl font-semibold"
          style={{ transformOrigin: 'center' }}
        >
          {total}%
        </text>
      </svg>
      <div className="flex flex-1 flex-col gap-2">
        {data.map((d) => (
          <div key={d.label} className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full" style={{ background: d.color }} />
              <span className="text-muted-foreground">{d.label}</span>
            </div>
            <span className="font-medium">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">仪表盘</h2>
          <p className="text-sm text-muted-foreground">欢迎回来，这里是本月业务概览。</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            下载报表
          </Button>
          <Button size="sm">新建分析</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          const TrendIcon = item.trend === 'up' ? ArrowUpRightIcon : ArrowDownRightIcon;
          return (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="flex items-center gap-1">
                      <Badge
                        variant={item.trend === 'up' ? 'secondary' : 'destructive'}
                        className="gap-0.5"
                      >
                        <TrendIcon className="size-3" />
                        {item.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground">较上月</span>
                    </div>
                  </div>
                  <Sparkline data={item.spark} trend={item.trend} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>收入趋势</CardTitle>
            <CardDescription>过去 12 个月的月度收入（单位：元）</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={overviewData} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>最近成交</CardTitle>
            <CardDescription>本月新增了 265 笔订单</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {recentSales.map((s) => (
                <div key={s.id} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{s.name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.email}</span>
                  </div>
                  <span className="text-sm font-medium">{s.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>流量来源</CardTitle>
            <CardDescription>按渠道统计的访问占比</CardDescription>
          </CardHeader>
          <CardContent>
            <DonutChart data={channels} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <CardTitle className="flex items-center gap-2">
                <TrendingUpIcon className="size-4" />
                热销商品
              </CardTitle>
              <CardDescription>本月 Top 5 商品销售情况</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              查看全部
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>商品名称</TableHead>
                  <TableHead>销售进度</TableHead>
                  <TableHead className="text-right">营收</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((p) => {
                  const pct = Math.round((p.sold / p.total) * 100);
                  return (
                    <TableRow key={p.name}>
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-28 overflow-hidden rounded-full bg-muted">
                            <div
                              className={`h-full rounded-full ${progressColor(pct)}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {p.sold}/{p.total}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">{p.revenue}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>团队目标</CardTitle>
          <CardDescription>本季度关键指标进度</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: '新签客户', current: 128, target: 200, unit: '家' },
              { label: 'GMV', current: 90, target: 120, unit: '万' },
              { label: 'NPS 分数', current: 80, target: 80, unit: '' },
            ].map((g) => {
              const pct = Math.round((g.current / g.target) * 100);
              return (
                <div key={g.label} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{g.label}</span>
                    <span className="text-sm font-medium">{pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${progressColor(pct)}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {g.current}
                      {g.unit}
                    </span>
                    <Separator orientation="vertical" className="h-3" />
                    <span>
                      目标 {g.target}
                      {g.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
