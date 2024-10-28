'use client'

import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Navigation = () => {
  const projects = [
    {
      title: "Explorar Proyectos",
      href: "/projects",
      description: "Descubre iniciativas sociales verificadas en blockchain"
    },
    {
      title: "Crear Proyecto",
      href: "/create",
      description: "Inicia tu campaña de impacto social con Web3"
    },
    {
      title: "Proyectos Destacados",
      href: "/featured",
      description: "Las iniciativas más exitosas de nuestra comunidad"
    }
  ];

  const resources = [
    {
      title: "Aprende Web3",
      href: "/learn",
      description: "Guías y recursos para entender blockchain y crypto"
    },
    {
      title: "Comunidad DAO",
      href: "/community",
      description: "Únete a nuestra comunidad descentralizada"
    },
    {
      title: "Impacto Social",
      href: "/impact",
      description: "Métricas y resultados de proyectos sociales"
    }
  ];

  return (
    <NavigationMenu className="relative z-50"> {/* Added z-index */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className="origin-top-center absolute top-full left-0 mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
      </NavigationMenu>
  );
};