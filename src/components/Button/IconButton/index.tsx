"use client";
import { tv } from "tailwind-variants";
import { ReactNode, AnchorHTMLAttributes, useState } from "react";

interface IconButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string
  title?: string;
  variant?: "default" | "dark";
}
 
const IconButtonComponent = tv({
  base: "rounded-full flex items-center justify-center transition-opacity duration-200 focus:outline-none cursor-pointer w-12 h-12 text-2xl lg:w-24 lg:h-24 lg:text-4xl",
  variants: {
    variant: {
      default: "text-primary",
      dark: "text-tertiary",
    },
  },
});

const IconButton = ({
  children,
  title,
  variant = "default",
  href,
  ...props
}: IconButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      {...props}
      href={href} // Utiliza o href para o link
      title={title}
      className={
        IconButtonComponent({ variant }) +
        (isFocused ? " opacity-80" : "")
      }
      target="_blank" // Abre o link em uma nova guia
      rel="noopener noreferrer" // Recomendado por questões de segurança
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {children}
    </a>
  );
};

export default IconButton;
