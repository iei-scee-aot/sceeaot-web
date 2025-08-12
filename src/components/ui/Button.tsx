"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-primary text-black hover:bg-primary/90 active:bg-primary/80 focus:bg-primary/90",
    secondary:
      "border border-primary text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20 focus:bg-primary/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs lg:text-sm",
    md: "px-6 py-3 text-sm lg:text-base",
    lg: "px-8 py-4 text-base lg:text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "w-full sm:w-auto";

  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
          Loading...
        </>
      );
    }

    if (icon && iconPosition === "left") {
      return (
        <>
          {icon}
          {children}
        </>
      );
    }

    if (icon && iconPosition === "right") {
      return (
        <>
          {children}
          {icon}
        </>
      );
    }

    return children;
  };

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
