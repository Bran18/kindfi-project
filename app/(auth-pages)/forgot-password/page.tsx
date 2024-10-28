import { forgotPasswordAction } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FormMessage, type Message } from "@/components/form-message";
import { AuthLayout } from "@/components/layout/auth/auth-layout";
import { AuthForm } from "@/components/layout/auth/auth-form";
import { Button } from "@/components/ui/button";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <AuthLayout>
      <AuthForm
        title="¿Olvidaste tu contraseña?"
        subtitle="Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla."
        footerContent={
          <div>
            ¿Recordaste tu contraseña?{" "}
            <Link
              href="/sign-in"
              className="text-primary font-medium hover:underline"
            >
              Volver a inicio de sesión
            </Link>
          </div>
        }
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="tu@ejemplo.com"
              required
            />
          </div>

          <Button className="w-full" formAction={forgotPasswordAction}>
            Enviar enlace de recuperación
          </Button>

          {searchParams && <FormMessage message={searchParams} />}
        </form>
      </AuthForm>
    </AuthLayout>
  );
}

// Optional: Add success state component
interface SuccessMessageProps {
  email: string;
}

const SuccessMessage = ({ email }: SuccessMessageProps) => (
  <div className="space-y-4">
    <div className="flex flex-col items-center justify-center space-y-2">
      <CheckCircle className="w-12 h-12 text-green-500" />
      <h2 className="text-2xl font-semibold">¡Revisa tu correo!</h2>
    </div>
    <p className="text-center text-muted-foreground">
      Hemos enviado un enlace de recuperación a <strong>{email}</strong>. El
      enlace expirará en 24 horas.
    </p>
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        ¿No recibiste el correo?{" "}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => window.location.reload()}
          className="text-primary hover:underline"
        >
          Intentar nuevamente
        </button>
      </p>
    </div>
  </div>
);
