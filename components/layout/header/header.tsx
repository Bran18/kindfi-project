'use client'

import React from 'react';
import Link from 'next/link';
import { Navigation } from './navigation';
import { Button } from "@/components/ui/button";
import { Menu, Wallet } from 'lucide-react';
import {ThemeSwitcher} from '@/components/theme-switcher';

export const Header = () => {
  function setMobileMenuOpen(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Kindfi</span>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Iniciar Sesión
            </Button>
            <Button 
              size="sm"
              className="bg-blue-900 hover:bg-blue-800"
            >
              <Wallet className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Conectar Wallet</span>
            </Button>
        
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
