

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';
  
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 focus:ring-primary',
    secondary: 'bg-secondary text-primary hover:bg-opacity-90 focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary focus:ring-primary hover:text-white',
    ghost: 'text-primary hover:bg-gray-100 focus:ring-gray-100'
  };

  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg rounded-2xl'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}