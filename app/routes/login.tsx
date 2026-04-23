import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { SITE_APP_TITLE, SITE_LOGO_URL } from '@/constants';

export const handle = { name: '登录' };

export default function Page() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSubmit = username.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || loading) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    toast.success('登录成功！');
    const redirect = new URL(window.location.href).searchParams.get('redirect');
    navigate(redirect || '/', { replace: true });
  };

  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background p-6 pt-20 md:pt-24">
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <img src={SITE_LOGO_URL} alt={SITE_APP_TITLE} className="h-12 w-12" />
          <h1 className="text-xl font-semibold tracking-tight">{SITE_APP_TITLE}</h1>
          <p className="text-sm text-muted-foreground">欢迎回来，请登录您的账户</p>
        </div>

        <Card className="border-border/60 shadow-xl">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">用户名</FieldLabel>
                  <div className="relative">
                    <UserIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="请输入用户名"
                      autoComplete="username"
                      className="pl-9"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">密码</FieldLabel>
                    <button
                      type="button"
                      className="ml-auto text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      忘记密码？
                    </button>
                  </div>
                  <div className="relative">
                    <LockIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="请输入密码"
                      autoComplete="current-password"
                      className="px-9"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? '隐藏密码' : '显示密码'}
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </Field>
                <Field>
                  <Button type="submit" disabled={!canSubmit || loading}>
                    {loading ? '登录中…' : '登录'}
                  </Button>
                </Field>
              </FieldGroup>
            </form>

            <Button variant="outline" type="button" className="mt-3 w-full">
              <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              使用 Google 登录
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
