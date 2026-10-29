import { ProTable, type ColumnDef } from '@/components/pro-ui';

type Member = { id: number; name: string; email: string; status: string };

const columns: ColumnDef<Member, unknown>[] = [
  { accessorKey: 'name', header: '姓名' },
  { accessorKey: 'email', header: '邮箱' },
  { accessorKey: 'status', header: '状态' },
];

const members: Member[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', status: '正常' },
  { id: 2, name: '李四', email: 'lisi@example.com', status: '正常' },
  { id: 3, name: '王五', email: 'wangwu@example.com', status: '停用' },
];

export function BasicExample() {
  return <ProTable columns={columns} data={members} />;
}
