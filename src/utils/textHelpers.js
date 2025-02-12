/**
 * Возвращает правильное склонение слова в зависимости от числа
 * @param {number} count - Число
 * @param {string} one - Форма слова для одного (балл)
 * @param {string} two - Форма слова для двух-четырех (балла)
 * @param {string} five - Форма слова для пяти и более (баллов)
 * @returns {string} Правильная форма слова
 */
export function getDeclension(count, one, two, five) {
  if (count % 100 > 10 && count % 100 < 20) {
    return five;
  }
  if (count % 10 === 1) {
    return one;
  }
  if (count % 10 >= 2 && count % 10 <= 4) {
    return two;
  }
  return five;
}