import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  className,
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95",
    secondary:
      "bg-surface-container-high text-primary hover:bg-surface-container-highest active:scale-95",
    tertiary:
      "bg-tertiary-container text-on-tertiary-container hover:opacity-90 active:scale-95",
    ghost:
      "bg-transparent text-on-surface-variant hover:bg-surface-container-low active:scale-95",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
