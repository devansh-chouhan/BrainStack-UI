import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text", label }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-semibold text-text-secondary ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          placeholder={placeholder}
          type={type}
          className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
        />
      </div>
    );
  }
);