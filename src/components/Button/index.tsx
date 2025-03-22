"use client"; // Garantir que o componente seja tratado no lado do cliente
import { tv } from "tailwind-variants";
import { ReactNode, ButtonHTMLAttributes, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "dark";
}


const ButtonComponent = tv({
  base: "px-6 py-2 rounded-md transition-opacity duration-200 focus:outline-none cursor-pointer md:text-lg lg:text-2xl",
  variants: {
    variant: {
      default: "bg-primary text-white hover:text-tertiary",
      dark: "bg-secondary text-white",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

const Button = ({ children, variant = "default", disabled, onClick, ...props }: ButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      {...props} // Passa todas as props adicionais, incluindo onClick
      disabled={disabled}
      aria-disabled={disabled}
      className={`${ButtonComponent({ variant, disabled })} ${isFocused ? "opacity-80" : ""}`} // Aplica a opacidade ao focar
      onFocus={() => setIsFocused(true)} // Foco no botão
      onBlur={() => setIsFocused(false)} // Perde o foco
      onClick={onClick} // Lida com o evento de clique, passado como prop
    >
      {children}
    </button>
  );
};

export default Button;
