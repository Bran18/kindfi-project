"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navigation } from "./navigation";
import { Button } from "@/components/ui/button";
import { Menu, User as UserIcon, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/lib/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signOutAction } from "@/app/actions";
import type { User } from "@supabase/supabase-js";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoading } = useAuth();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Kindfi</span>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {user ? <UserMenu user={user} /> : <AuthButtons />}

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  <MobileNavigation />
                  {user ? (
                    <MobileUserMenu user={user} />
                  ) : (
                    <MobileAuthButtons />
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const UserMenu = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-8 w-8 rounded-full"
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback suppressHydrationWarning>
              {user.email?.[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.email}</p>
            <p className="text-xs text-muted-foreground">Cuenta personal</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/protected" className="cursor-pointer">
            <UserIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Configuración
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form action={signOutAction} className="w-full">
            <button type="submit" className="flex w-full items-center">
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/sign-in" passHref>
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
          Iniciar Sesión
        </Button>
      </Link>
      <Link href="/sign-up" passHref>
        <Button variant="default" size="sm" className="hidden sm:inline-flex">
          Registrarse
        </Button>
      </Link>
    </div>
  );
};

const MobileNavigation = () => {
  return (
    <nav className="flex flex-col space-y-4">
      <Link
        href="/projects"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Proyectos
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Sobre Nosotros
      </Link>
      {/* Add other navigation items */}
    </nav>
  );
};

const MobileUserMenu = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Avatar className="h-8 w-8">
          <AvatarFallback suppressHydrationWarning>
            {user.email?.[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm font-medium">{user.email}</p>
          <p className="text-xs text-muted-foreground">Cuenta personal</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Link href="/protected">
          <Button variant="ghost" className="w-full justify-start">
            <UserIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Configuración
          </Button>
        </Link>
        <form action={signOutAction}>
          <Button
            variant="ghost"
            className="w-full justify-start"
            type="submit"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

const MobileAuthButtons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/sign-in">
        <Button variant="ghost" className="w-full justify-start">
          Iniciar Sesión
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button variant="default" className="w-full justify-start">
          Registrarse
        </Button>
      </Link>
    </div>
  );
};
