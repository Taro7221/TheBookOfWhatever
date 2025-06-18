import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'ghost' | 'default';
  size?: 'icon' | 'default';
};

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) => {
  let base =
    'inline-flex items-center justify-center rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantClass =
    variant === 'ghost'
      ? 'bg-transparent hover:bg-gray-100'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  let sizeClass =
    size === 'icon'
      ? 'w-10 h-10 p-0'
      : 'px-4 py-2 min-w-[64px]';

  return (
    <button
      className={`${base} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;