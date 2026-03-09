

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
}

export function Badge({ children, className = '', variant = 'secondary' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-4 py-2 font-bold text-sm tracking-wide shadow-sm';
  
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-primary',
    white: 'bg-white text-primary',
    outline: 'border border-gray-300 text-gray-600 bg-white'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
