"use client";


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTAButtonsProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryClassName?: string;
  secondaryClassName?: string;
  className?: string;
}

export const CTAButtons = ({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  primaryClassName = "",
  secondaryClassName = "",
  className = "",
}: CTAButtonsProps) => {
  return (
    <motion.div 
      className={`flex flex-col sm:flex-row justify-center gap-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button 
        size="lg"
        onClick={onPrimaryClick}
        className={`bg-teal-600 hover:bg-teal-700 text-white px-8 shadow-sm transition-all duration-300 ${primaryClassName}`}
      >
        {primaryText}
      </Button>
      <Button 
        size="lg"
        variant="outline"
        onClick={onSecondaryClick}
        className={`border-teal-600 text-teal-600 hover:bg-teal-50 px-8 transition-all duration-300 ${secondaryClassName}`}
      >
        {secondaryText}
      </Button>
    </motion.div>
  );
};