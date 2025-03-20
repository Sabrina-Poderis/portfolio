"use client";
import { tv } from "tailwind-variants";
import { ReactNode, ButtonHTMLAttributes, useState } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dark";
}

const IconButtonComponent = tv({
  base: "rounded-full flex items-center justify-center transition-opacity duration-200 focus:outline-none cursor-pointer",
  variants: {
    size: {
      sm: "w-8 h-8 text-lg",
      md: "w-10 h-10 text-xl",
      lg: "w-12 h-12 text-2xl",
    },
    variant: {
      default: "text-primary",
      dark: "text-gray-800",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

const IconButton = ({
  children,
  title,
  size = "md",
  variant = "default",
  disabled,
  onClick,
  ...props
}: IconButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      {...props}
      disabled={disabled}
      aria-disabled={disabled}
      title={title}
      className={
        IconButtonComponent({ size, variant, disabled }) +
        (isFocused ? " opacity-80" : "")
      }
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
