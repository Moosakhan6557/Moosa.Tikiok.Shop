import React from 'react';
import { Gem } from 'lucide-react';

interface LogoProps {
  size?: number;
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ size = 40, variant = 'dark' }) => {
  return (
    <div className="flex items-center" style={{ height: `${size}px` }}>
      <Gem 
        size={size} 
        className={variant === 'dark' ? 'text-gray-800' : 'text-white'}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default Logo;