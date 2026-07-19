import { zodResolver } from '@hookform/resolvers/zod';
import { format, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ModalActionType } from '@/constants';
import { FastApiServices } from '@/services';

import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '../constants';

const schema = z.object({
  name: z.string().min(1, '请输入任务名称').max(100, '任务名称不能超过 100 个字符'),
  status: z.enum(['todo', 'progress', 'done'], { error: '请选择任务状态' }),
  priority: z.enum(['low', 'medium', 'high'], { error: '请选择优先级' }),
  assignee: z.string().min(1, '请输入负责人').max(50, '负责人不能超过 50 个字符'),
  deadline: z.string().min(1, '请选择截止时间'),
  description: z.string().max(500, '描述不能超过 500 个字符'),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  name: '',
  status: 'todo',
  priority: 'medium',
  assignee: '',
  deadline: '',
  description: '',
};

const formId = 'task-form';

export type TaskFormDialogProps = {
  title?: string;
  open: boolean;
  modalActionType: ModalActionType;
  initialValues?: FastAPI.Task;
  onClose: () => void;
  onFinish?: () => void;
};

function getFormValues(task: FastAPI.Task): FormValues {
  return {
    name: task.name,
    status: task.status,
    priority: task.priority,
    assignee: task.assignee,
    deadline: task.deadline.slice(0, 10),
    description: task.description,
  };
}

function TaskFormDialog({
  title,
  open,
  modalActionType,
  initialValues,
  onClose,
  onFinish,
}: TaskFormDialogProps) {
  const isEdit = modalActionType === ModalActionType.EDIT;
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (!open) return;
    form.reset(isEdit && initialValues ? getFormValues(initialValues) : defaultValues);
  }, [form, initialValues, isEdit, open]);

  async function onSubmit(values: FormValues) {
    if (isEdit && initialValues) {
      await FastApiServices.Task.updateTask({ id: initialValues.id }, values);
    } else {
      await FastApiServices.Task.createTask(values);
    }

    toast.success(isEdit ? '更新成功' : '创建成功');
    onClose();
    onFinish?.();
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title ?? (isEdit ? '编辑任务' : '新建任务')}</DialogTitle>
          <DialogDescription className="sr-only">
            填写任务信息，带有错误的信息会在对应字段下方提示。
          </DialogDescription>
        </DialogHeader>

        <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="task-name">名称</FieldLabel>
                  <Input
                    {...field}
                    id="task-name"
                    placeholder="请输入任务名称"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="task-status">状态</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    items={STATUS_OPTIONS}
                  >
                    <SelectTrigger
                      id="task-status"
                      className="w-full"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="请选择任务状态" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {STATUS_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="priority"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="task-priority">优先级</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    items={PRIORITY_OPTIONS}
                  >
                    <SelectTrigger
                      id="task-priority"
                      className="w-full"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="请选择优先级" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {PRIORITY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="assignee"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="task-assignee">负责人</FieldLabel>
                  <Input
                    {...field}
                    id="task-assignee"
                    placeholder="请输入负责人姓名"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="deadline"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="task-deadline">截止时间</FieldLabel>
                  <Popover>
                    <PopoverTrigger
                      render={
                        <Button
                          id="task-deadline"
                          type="button"
                          variant="outline"
                          data-empty={!field.value}
                          className="w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                          aria-invalid={fieldState.invalid}
                        />
                      }
                    >
                      <CalendarIcon />
                      {field.value ? (
                        format(parseISO(field.value), 'PPP', { locale: zhCN })
                      ) : (
                        <span>请选择截止时间</span>
                      )}
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0">
                      <Calendar
                        mode="single"
                        locale={zhCN}
                        selected={field.value ? parseISO(field.value) : undefined}
                        onSelect={(date) => field.onChange(date ? format(date, 'yyyy-MM-dd') : '')}
                      />
                    </PopoverContent>
                  </Popover>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="task-description">描述</FieldLabel>
                  <Textarea
                    {...field}
                    id="task-description"
                    placeholder="请输入任务描述（可选）"
                    rows={4}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={form.formState.isSubmitting}
          >
            取消
          </Button>
          <Button type="submit" form={formId} disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? '提交中...' : '确定'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function useTaskFormDialog(params?: {
  handleOnClose?: () => void;
  handleOnFinish?: () => void;
}) {
  const [modalParams, setModalParams] = useState<Omit<TaskFormDialogProps, 'onClose' | 'onFinish'>>(
    {
      open: false,
      modalActionType: ModalActionType.CREATE,
    },
  );

  const element = (
    <TaskFormDialog
      {...modalParams}
      onClose={() => {
        setModalParams((previous) => ({ ...previous, open: false }));
        params?.handleOnClose?.();
      }}
      onFinish={() => {
        setModalParams((previous) => ({ ...previous, open: false }));
        params?.handleOnFinish?.();
      }}
    />
  );

  return { element, setModalParams };
}
