import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { SITE_APP_TITLE, SITE_LOGO_URL } from '@/constants';

export default function Page() {
  return (
    <div className="relative min-h-svh w-full bg-gradient-to-br from-primary/10 via-background to-background p-6 pt-20 md:p-10 md:pt-24">
      <div className="pointer-events-none absolute top-16 left-16 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
      <div className="pointer-events-none absolute right-16 bottom-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <img src={SITE_LOGO_URL} alt={SITE_APP_TITLE} className="h-12 w-12" />
          <h1 className="text-xl font-semibold tracking-tight">{SITE_APP_TITLE}</h1>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <button
                      type="button"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  <Input id="password" type="password" required />
                </Field>
                <Field>
                  <Button type="submit">Login</Button>
                  <Button variant="outline" type="button">
                    Login with Google
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
