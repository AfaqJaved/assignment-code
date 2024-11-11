import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = 'default', size = 'md', onClick, children }) => {
  let className = 'px-4 py-2 rounded';

  switch (variant) {
    case 'outline':
      className += ' border';
      break;
    case 'ghost':
      className += ' bg-transparent';
      break;
    default:
      className += ' bg-blue-500 text-white';
  }

  switch (size) {
    case 'sm':
      className += ' text-sm';
      break;
    case 'lg':
      className += ' text-lg';
      break;
    default:
      className += ' text-md';
  }

  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;