interface AuthFormProps {
    children: React.ReactNode;
    title: string;
    subtitle?: React.ReactNode;
    footerContent?: React.ReactNode;
  }
  
  export const AuthForm = ({ 
    children, 
    title, 
    subtitle, 
    footerContent 
  }: AuthFormProps) => {
    return (
      <div className="w-full space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <div className="text-sm text-muted-foreground">
              {subtitle}
            </div>
          )}
        </div>
        {children}
        {footerContent && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            {footerContent}
          </div>
        )}
      </div>
    );
  };