import type { ReactElement } from "react";


export interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon? : ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-accent-500 text-textPrimary",
    "secondary": "bg-accent-600 text-textSecondary",
}


const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-3 px-6",
}

const defaultStyles = "rounded-lg flex items-center justify-center gap-1"

export const Button = (props : ButtonProps) => {
    return <button className=
    {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
    onClick={props.onClick}>
        {props.startIcon && <span className="inline-flex items-center">{props.startIcon}</span>}
        <span className="inline-flex items-center leading-none">{props.text}</span>
        {props.endIcon && <span className="inline-flex items-center">{props.endIcon}</span>}
    </button>
}
