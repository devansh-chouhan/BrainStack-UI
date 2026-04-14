import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger" | "success";
  text: string;
  startIcon?: ReactElement;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const baseStyles =
  "rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-soft hover:shadow-premium ring-primary/20 focus:ring-4",

  secondary:
    "bg-white border border-border text-text-secondary hover:bg-secondary-light hover:text-text-primary hover:border-slate-300 shadow-sm",

  ghost:
    "bg-transparent text-text-secondary hover:bg-secondary-light hover:text-text-primary",

  danger:
    "bg-error text-white hover:bg-red-600 shadow-soft ring-error/20 focus:ring-4",

  success:
    "bg-success text-white hover:bg-emerald-600 shadow-soft ring-success/20 focus:ring-4",
};

export const Button = ({
  text,
  variant,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) => {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} 
    ${fullWidth ? "w-full justify-center" : ""}
    `}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        startIcon && <span className="flex items-center">{startIcon}</span>
      )}
      {text}
    </button>
  );
};