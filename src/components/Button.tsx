import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  fullWidth? : boolean;
  loading?: boolean;
  onClick?: () => void 
}

const baseStyles =
  "rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-50 active:scale-95";

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primaryHover focus:ring-2 focus:ring-primary/40 shadow-sm hover:shadow-md",

  secondary:
    "bg-surface border border-border text-textPrimary hover:bg-highlight focus:ring-2 focus:ring-primary/30",
};

export const Button = ({ text, variant, startIcon , onClick , fullWidth , loading}: ButtonProps) => {
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} 
    ${fullWidth ? " w-full  flex justify-center items-center" : ""}
    ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={onClick} disabled={loading}>
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {text}
    </button>
  );
};