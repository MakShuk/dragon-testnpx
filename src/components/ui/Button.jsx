import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Базовый компонент кнопки с поддержкой различных вариантов стилизации
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
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  return (
    <button
      className={cn(
        baseStyles,
        widthStyles,
        variantStyles[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);