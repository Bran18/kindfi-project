import type React from "react";
import { MainContent } from "./main-content";
import { Header } from "../header/header";
import Footer from "../footer/footer";

interface RootLayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const RootLayoutWrapper = ({
  children,
  className = "",
}: RootLayoutWrapperProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MainContent className={className}>{children}</MainContent>
      <Footer />
    </div>
  );
};
