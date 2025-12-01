import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`border border-gray-300 p-3 text-sm focus:border-primary focus:outline-none bg-white placeholder-gray-400 rounded-sm ${className}`}
      {...props}
    />
  );
}

