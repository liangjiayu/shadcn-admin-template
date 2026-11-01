import { MoreHorizontalIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ExampleCard } from '../../components/example-card';

const invoicesDemo = [
  {
    invoice: 'INV001',
    paymentStatus: '已付款',
    totalAmount: '$250.00',
    paymentMethod: '信用卡',
  },
  {
    invoice: 'INV002',
    paymentStatus: '待付款',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: '未付款',
    totalAmount: '$350.00',
    paymentMethod: '银行转账',
  },
  {
    invoice: 'INV004',
    paymentStatus: '已付款',
    totalAmount: '$450.00',
    paymentMethod: '信用卡',
  },
  {
    invoice: 'INV005',
    paymentStatus: '已付款',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: '待付款',
    totalAmount: '$200.00',
    paymentMethod: '银行转账',
  },
  {
    invoice: 'INV007',
    paymentStatus: '未付款',
    totalAmount: '$300.00',
    paymentMethod: '信用卡',
  },
];
function TableDemoExample() {
  return (
    <Table>
      <TableCaption>最近的发票列表。</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">发票</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>付款方式</TableHead>
          <TableHead className="text-right">金额</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoicesDemo.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>合计</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

const invoicesFooter = [
  {
    invoice: 'INV001',
    paymentStatus: '已付款',
    totalAmount: '$250.00',
    paymentMethod: '信用卡',
  },
  {
    invoice: 'INV002',
    paymentStatus: '待付款',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: '未付款',
    totalAmount: '$350.00',
    paymentMethod: '银行转账',
  },
  {
    invoice: 'INV004',
    paymentStatus: '已付款',
    totalAmount: '$450.00',
    paymentMethod: '信用卡',
  },
  {
    invoice: 'INV005',
    paymentStatus: '已付款',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: '待付款',
    totalAmount: '$200.00',
    paymentMethod: '银行转账',
  },
  {
    invoice: 'INV007',
    paymentStatus: '未付款',
    totalAmount: '$300.00',
    paymentMethod: '信用卡',
  },
];
function TableFooterExample() {
  return (
    <Table>
      <TableCaption>最近的发票列表。</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">发票</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>付款方式</TableHead>
          <TableHead className="text-right">金额</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoicesFooter.slice(0, 3).map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>合计</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

function TableActionsExample() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>商品</TableHead>
          <TableHead>价格</TableHead>
          <TableHead className="text-right">操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">无线鼠标</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon" className="size-8" />}
              >
                <MoreHorizontalIcon />
                <span className="sr-only">打开菜单</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>编辑</DropdownMenuItem>
                <DropdownMenuItem>创建副本</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">删除</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">机械键盘</TableCell>
          <TableCell>$129.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon" className="size-8" />}
              >
                <MoreHorizontalIcon />
                <span className="sr-only">打开菜单</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>编辑</DropdownMenuItem>
                <DropdownMenuItem>创建副本</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">删除</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">USB-C 扩展坞</TableCell>
          <TableCell>$49.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="icon" className="size-8" />}
              >
                <MoreHorizontalIcon />
                <span className="sr-only">打开菜单</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>编辑</DropdownMenuItem>
                <DropdownMenuItem>创建副本</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">删除</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default function TableExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <TableDemoExample />
      </ExampleCard>
      <ExampleCard id="footer" title="汇总行">
        <TableFooterExample />
      </ExampleCard>
      <ExampleCard id="actions" title="操作">
        <TableActionsExample />
      </ExampleCard>
    </div>
  );
}
