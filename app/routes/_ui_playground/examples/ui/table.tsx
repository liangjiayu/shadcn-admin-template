import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function BasicExample() {
  return (
    <div id="example-table" className="space-y-4">
      <Table>
        <TableCaption>共 3 个示例项目</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>项目</TableHead>
            <TableHead>状态</TableHead>
            <TableHead className="text-right">成员数</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: '管理后台', status: '进行中', members: 8 },
            { name: '移动应用', status: '计划中', members: 4 },
            { name: '帮助中心', status: '已完成', members: 3 },
          ].map((project) => (
            <TableRow key={project.name}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell className="text-right">{project.members}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
