// components/layout/footer.tsx
'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Send } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const mainLinks = [
    {
      title: "Proyectos",
      links: [
        { label: "Explorar Proyectos", href: "/projects" },
        { label: "Crear Proyecto", href: "/create" },
        { label: "Proyectos Destacados", href: "/featured" },
        { label: "Impacto Social", href: "/impact" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Guía Web3", href: "/guide" },
        { label: "Documentación", href: "/docs" },
        { label: "Tutorial", href: "/tutorial" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Términos de Uso", href: "/terms" },
        { label: "Política de Privacidad", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
        { label: "Licencias", href: "/licenses" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <TwitterLogoIcon className="h-5 w-5" />,
      href: "https://twitter.com/kindfi",
      label: "Twitter",
    },
    {
      icon: <DiscordLogoIcon className="h-5 w-5" />,
      href: "https://discord.gg/kindfi",
      label: "Discord",
    },
    {
      icon: <GitHubLogoIcon className="h-5 w-5" />,
      href: "https://github.com/kindfi",
      label: "GitHub",
    },
    {
      icon: <LinkedInLogoIcon className="h-5 w-5" />,
      href: "https://linkedin.com/company/kindfi",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Kindfi</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Plataforma Web3 para financiamiento de proyectos sociales y ambientales a través de smart contracts y blockchain.
            </p>
            {/* Newsletter Subscription */}
            <div className="mt-4">
              <h3 className="mb-2 text-sm font-semibold">Mantente Informado</h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="max-w-[200px]"
                />
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {mainLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kindfi. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Documentación
              </Button>
              <Button variant="outline" size="sm">
                Contacto
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t pt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Smart Contracts
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Regristro Blockchain
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Impacto Social Verificable
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;