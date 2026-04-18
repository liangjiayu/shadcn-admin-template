import {
  ActivityIcon,
  CreditCardIcon,
  DollarSignIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: '总收入',
    value: '¥45,231.89',
    change: '+20.1% 较上月',
    icon: DollarSignIcon,
  },
  {
    title: '订阅数',
    value: '+2,350',
    change: '+180.1% 较上月',
    icon: UsersIcon,
  },
  {
    title: '销量',
    value: '+12,234',
    change: '+19% 较上月',
    icon: CreditCardIcon,
  },
  {
    title: '活跃用户',
    value: '+573',
    change: '+201 较上小时',
    icon: ActivityIcon,
  },
];

const recentActivities = [
  { id: 'a1', user: '张三', action: '创建了订单 #10284', time: '2 分钟前', amount: '¥1,299' },
  { id: 'a2', user: '李四', action: '完成了支付', time: '15 分钟前', amount: '¥499' },
  { id: 'a3', user: '王五', action: '取消了订阅', time: '1 小时前', amount: '-' },
  { id: 'a4', user: '赵六', action: '升级到 Pro 套餐', time: '3 小时前', amount: '¥199/月' },
  { id: 'a5', user: '孙七', action: '提交了退款申请', time: '昨天', amount: '¥899' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUpIcon className="size-4" />
            近期活动
          </CardTitle>
          <CardDescription>最近 5 条用户操作记录</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col divide-y">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 text-sm">
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-muted-foreground">{activity.action}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="font-medium">{activity.amount}</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
