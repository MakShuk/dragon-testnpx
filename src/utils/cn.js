import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Утилита для объединения классов CSS с поддержкой Tailwind CSS
 * Использует clsx для обработки условных классов и tailwind-merge для правильного объединения tailwind классов
 * @param  {...any} inputs - Классы для объединения
 * @returns {string} - Объединенная строка классов
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}