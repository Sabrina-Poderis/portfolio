import { tv } from 'tailwind-variants';
import { ReactNode } from 'react';
import React from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
}

const ContainerComponent = tv({
  base: 'py-6 bg-white',
  variants: {
    variant: {
      default: 'bg-white',
      dark: 'bg-gray-900 text-white',
    },
  },
});

const Container = ({ children, className, variant = 'default' }: ContainerProps) => {
  return <div className={ContainerComponent({ variant, className })}>{children}</div>;
};

export default Container;
