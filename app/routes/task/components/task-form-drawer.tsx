import { zodResolver } from '@hookform/resolvers/zod';
import { type ReactNode, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { ModalActionType } from '@/constants';
import { FastApiServices } from '@/services';

import { PRIORITY_OPTIONS, STATUS_OPTIONS, type TaskPriority, type TaskStatus } from '../constants';

const schema = z.object({
  name: z.string().min(1, '请输入任务名称'),
  status: z.enum(['todo', 'progress', 'done']),
  priority: z.enum(['low', 'medium', 'high']),
  assignee: z.string().min(1, '请输入负责人'),
  description: z.string(),
  deadline: z.string().min(1, '请选择截止时间'),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  name: '',
  status: 'todo',
  priority: 'medium',
  assignee: '',
  description: '',
  deadline: '',
};

export type TaskFormDrawerProps = {
  title?: string;
  open: boolean;
  modalActionType: ModalActionType;
  initialValues?: FastAPI.Task;
  onClose: () => void;
  onFinish?: () => void;
};

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function TaskFormDrawer({
  title,
  open,
  modalActionType,
  initialValues,
  onClose,
  onFinish,
}: TaskFormDrawerProps) {
  const isEdit = modalActionType === ModalActionType.EDIT;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (!open) return;
    if (isEdit && initialValues) {
      reset(initialValues);
    } else {
      reset(defaultValues);
    }
  }, [open, isEdit, initialValues, reset]);

  const onSubmit = handleSubmit(async (values) => {
    if (isEdit && initialValues) {
      await FastApiServices.Task.updateTask({ id: initialValues.id }, values);
    } else {
      await FastApiServices.Task.createTask(values);
    }
    toast.success(isEdit ? '更新成功' : '创建成功');
    onClose();
    onFinish?.();
  });

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{title ?? (isEdit ? '编辑任务' : '新建任务')}</SheetTitle>
        </SheetHeader>
        <form onSubmit={onSubmit} className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-4">
            <Field label="名称" htmlFor="task-name" error={errors.name?.message}>
              <Input id="task-name" {...register('name')} />
            </Field>

            <Field label="状态">
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => field.onChange(v as TaskStatus)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field label="优先级">
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => field.onChange(v as TaskPriority)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITY_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field label="负责人" htmlFor="task-assignee" error={errors.assignee?.message}>
              <Input id="task-assignee" {...register('assignee')} />
            </Field>

            <Field label="截止时间" htmlFor="task-deadline" error={errors.deadline?.message}>
              <Input id="task-deadline" type="date" {...register('deadline')} />
            </Field>

            <Field label="描述" htmlFor="task-description">
              <Textarea id="task-description" rows={4} {...register('description')} />
            </Field>
          </div>
        </form>
        <SheetFooter className="flex-row justify-end gap-2 border-t">
          <Button variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button onClick={onSubmit} disabled={isSubmitting}>
            {isSubmitting ? '提交中...' : '确定'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function useTaskFormDrawer(params?: {
  handleOnClose?: () => void;
  handleOnFinish?: () => void;
}) {
  const [modalParams, setModalParams] = useState<Omit<TaskFormDrawerProps, 'onClose' | 'onFinish'>>(
    {
      open: false,
      modalActionType: ModalActionType.CREATE,
    },
  );

  const element = (
    <TaskFormDrawer
      {...modalParams}
      onClose={() => {
        setModalParams((prev) => ({ ...prev, open: false }));
        params?.handleOnClose?.();
      }}
      onFinish={() => {
        setModalParams((prev) => ({ ...prev, open: false }));
        params?.handleOnFinish?.();
      }}
    />
  );

  return {
    element,
    setModalParams,
  };
}
