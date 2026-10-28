import { Avatar, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';

export function BasicExample() {
  return (
    <div id="example-avatar" className="space-y-4">
      <AvatarGroup aria-label="项目成员：张三、李四、王五">
        {['张', '李', '王'].map((name) => (
          <Avatar key={name}>
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>
    </div>
  );
}
