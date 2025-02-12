import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { getDeclension } from '../../utils/textHelpers';
import { TEST_CONSTANTS } from '../../constants/test';
import { cn } from '../../utils/cn';

/**
 * Компонент для отображения результатов теста
 * @param {Object} props
 * @param {Array<[string, number]>} props.results - Массив пар [имя дракона, количество баллов]
 * @param {Function} props.onReset - Функция для перезапуска теста
 */
const Results = ({ results, onReset }) => {
  const getScoreClass = (score) => {
    const maxScore = TEST_CONSTANTS.MAX_QUESTIONS_PER_DRAGON;
    const percentage = (score / maxScore) * 100;

    if (percentage >= TEST_CONSTANTS.THRESHOLD.HIGH) {
      return TEST_CONSTANTS.RESULT_CLASSES.HIGH;
    }
    if (percentage >= TEST_CONSTANTS.THRESHOLD.MEDIUM) {
      return TEST_CONSTANTS.RESULT_CLASSES.MEDIUM;
    }
    if (percentage >= TEST_CONSTANTS.THRESHOLD.LOW) {
      return TEST_CONSTANTS.RESULT_CLASSES.LOW;
    }
    return '';
  };

  return (
    <Card title="Результат теста">
      <div>
        <p className="mb-3">Количество баллов по драконам:</p>
        {results.map(([dragon, count], index) => (
          <p 
            key={dragon} 
            className={cn(
              'mb-2',
              getScoreClass(count)
            )}
          >
            {index + 1}. {dragon} ({count}{' '}
            {getDeclension(count, 'балл', 'балла', 'баллов')})
          </p>
        ))}
      </div>
      <Button
        variant="primary"
        fullWidth
        className="mt-4"
        onClick={onReset}
      >
        Пройти тест заново
      </Button>
    </Card>
  );
};

export default React.memo(Results);