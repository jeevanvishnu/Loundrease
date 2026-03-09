

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Card({ children, className = '', noPadding = false }: CardProps) {
  return (
    <div className={`bg-white rounded-3xl ${noPadding ? '' : 'p-8 sm:p-10'} border border-border-light shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}
