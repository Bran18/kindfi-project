import { AuthLayout } from "@/components/layout/auth/auth-layout";
import { AuthForm } from "@/components/layout/auth/auth-form";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/app/actions";
import type { Message } from "@/components/form-message";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <AuthLayout>
      <AuthForm
        title="Bienvenido de vuelta"
        subtitle={
          <div className="text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link
              className="text-primary font-medium hover:underline"
              href="/sign-up"
            >
              Regístrate
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
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Contraseña</Label>
              <Link
                className="text-sm text-primary hover:underline"
                href="/forgot-password"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Tu contraseña"
              required
            />
          </div>

          <Button className="w-full" formAction={signInAction}>
            Iniciar sesión
          </Button>
        </form>
      </AuthForm>
    </AuthLayout>
  );
}
