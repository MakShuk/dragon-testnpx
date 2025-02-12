import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg',
        'border border-gray-100',
        'backdrop-blur-sm',
        'hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {title && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default React.memo(Card);