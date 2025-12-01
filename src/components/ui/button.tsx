import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "uppercase tracking-widest text-xs transition-colors disabled:opacity-50";
  const variants = {
    primary: "bg-black text-white hover:bg-primary",
    secondary: "bg-white text-black hover:bg-primary hover:text-white",
    outline: "border border-white bg-transparent hover:bg-white hover:text-black text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

