import type { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
    return (
        <input className={`w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 hover:-translate-y-1 focus:-translate-y-1 hover:scale-105 focus:scale-105 hover:shadow-2xl focus:shadow-2xl hover:border-indigo-500 transition-all duration-300 ${className}`} {...props} />
    )
}

export default Input