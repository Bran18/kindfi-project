// app/(auth)/sign-up/page.tsx
'use client'

import { signUpAction } from "@/app/actions"
import { FormMessage, type Message } from "@/components/form-message"
import { AuthForm } from "@/components/layout/auth/auth-form"
import { AuthLayout } from "@/components/layout/auth/auth-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Link from "next/link"

// Define the action response type
interface SignUpResponse {
  error?: string;
  success?: string;
}

export default function Signup({ 
  searchParams 
}: { 
  searchParams: Message 
}) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignUp(formData: FormData) {
    try {
      setIsLoading(true)
      const result = await signUpAction(formData) as SignUpResponse
      
      if (result?.error) {
        console.error(result.error)
      }
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

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
        <form action={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@ejemplo.com"
              required
              disabled={isLoading}
              className="bg-background"
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
              disabled={isLoading}
              className="bg-background"
            />
          </div>

          <Button 
            className="w-full" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creando cuenta..." : "Crear cuenta"}
          </Button>
        </form>
      </AuthForm>
    
    </AuthLayout>
  )
}