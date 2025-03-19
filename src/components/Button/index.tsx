

import { tv } from 'tailwind-variants';
import { ReactNode } from 'react';
import React from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
}

const ButtonComponent = tv({
  base: 'px-6 py-2 bg-redwood text-white rounded-md',
  variants: {
    variant: {
      default: 'bg-redwood text-white',
      dark: 'bg-whine text-white',
    },
  },
});

const Button = ({ children, className, variant = 'default' }: ButtonProps) => {
  return <button className={ButtonComponent({ variant, className })}>{children}</button>;
};

export default Button;
