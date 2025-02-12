import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Базовый компонент кнопки с поддержкой различных вариантов стилизации и анимаций
 * @param {Object} props
 * @param {'primary' | 'success' | 'danger' | 'default'} props.variant - Вариант стилизации кнопки
 * @param {string} props.className - Дополнительные CSS классы
 * @param {boolean} props.fullWidth - Растягивать ли кнопку на всю ширину
 * @param {React.ReactNode} props.children - Содержимое кнопки
 * @param {Function} props.onClick - Обработчик клика
 */
const Button = ({ 
  variant = 'default',
  className = '',
  fullWidth = false,
  children,
  onClick,
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-2';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-400',
    success: 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 focus:ring-green-400',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-400',
    default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 focus:ring-gray-400',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        baseStyles,
        widthStyles,
        variantStyles[variant],
        'shadow-sm hover:shadow-md',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transform-gpu',
        className
      )}
      onClick={onClick}
      {...props}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default React.memo(Button);