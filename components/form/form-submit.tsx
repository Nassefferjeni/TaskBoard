"use client";

import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
}

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant = "primary",
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="sm"
      disabled={pending || disabled}
      className={cn(className)}
      variant={variant}
    >
      {children}
    </Button>
  );
};
