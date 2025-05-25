import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animateHover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = true,
  animateHover = true
}) => {
  const baseClasses = 'bg-white rounded-2xl shadow-md overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl' : '';
  
  if (animateHover) {
    return (
      <motion.div 
        className={`${baseClasses} ${className}`}
        whileHover={hover ? { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className} transition-all duration-300`}>
      {children}
    </div>
  );
};

export default Card;