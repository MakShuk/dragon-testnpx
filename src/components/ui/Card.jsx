import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Компонент карточки для отображения контента в едином стиле
 * @param {Object} props
 * @param {React.ReactNode} props.children - Содержимое карточки
 * @param {string} props.className - Дополнительные CSS классы
 * @param {string} props.title - Заголовок карточки (опционально)
 */
const Card = ({ children, className = '', title }) => {
  return (
    <div className={cn(
      'max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md',
      className
    )}>
      {title && (
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default React.memo(Card);