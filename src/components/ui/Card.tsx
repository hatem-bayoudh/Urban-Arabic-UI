import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'low' | 'lowest' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'lowest',
  padding = 'md',
}) => {
  const variants = {
    default: "bg-surface-container",
    low: "bg-surface-container-low",
    lowest: "bg-surface-container-lowest",
    glass: "glass-effect",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-10 md:p-12",
  };

  return (
    <div className={cn(
      "rounded-[1.5rem] card-shadow overflow-hidden transition-all",
      variants[variant],
      paddings[padding],
      className
    )}>
      {children}
    </div>
  );
};

export default Card;
