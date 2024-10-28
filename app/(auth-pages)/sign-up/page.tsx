import { signUpAction } from "@/app/actions";
import type { Message } from "@/components/form-message";
import { AuthForm } from "@/components/layout/auth/auth-form";
import { AuthLayout } from "@/components/layout/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <AuthLayout>
      <AuthForm
        title="Crear cuenta"
        subtitle={
          <div className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link
              className="text-primary font-medium hover:underline"
              href="/sign-in"
            >
              Inicia sesión
            </Link>
          </div>
        }
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@ejemplo.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Crea una contraseña"
              minLength={6}
              required
            />
          </div>

          <Button className="w-full" formAction={signUpAction}>
            Crear cuenta
          </Button>
        </form>
      </AuthForm>
    </AuthLayout>
  );
}
