import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  primaryText: string;
  secondaryText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export const CTAButtons = ({
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  className = ''
}: CTAButtonsProps) => {
  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      <Button 
        onClick={onPrimaryClick}
        className="bg-blue-900 hover:bg-blue-800"
      >
        {primaryText}
      </Button>
      <Button 
        variant="outline"
        onClick={onSecondaryClick}
      >
        {secondaryText}
      </Button>
    </div>
  );
};
