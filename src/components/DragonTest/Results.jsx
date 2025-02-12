import React from 'react';
import { motion } from 'framer-motion';
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
  const maxScore = TEST_CONSTANTS.MAX_QUESTIONS_PER_DRAGON;

  const getScorePercentage = (score) => (score / maxScore) * 100;

  const getScoreClass = (score) => {
    const percentage = getScorePercentage(score);

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

  const getGradientColors = (score) => {
    const percentage = getScorePercentage(score);
    if (percentage >= TEST_CONSTANTS.THRESHOLD.HIGH) {
      return 'from-green-400 to-green-500';
    }
    if (percentage >= TEST_CONSTANTS.THRESHOLD.MEDIUM) {
      return 'from-yellow-400 to-yellow-500';
    }
    if (percentage >= TEST_CONSTANTS.THRESHOLD.LOW) {
      return 'from-orange-400 to-orange-500';
    }
    return 'from-red-400 to-red-500';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Card title="Результаты теста">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg font-medium text-gray-700"
        >
          Результаты по драконам:
        </motion.p>

        {results.map(([dragon, count], index) => (
          <motion.div
            key={dragon}
            variants={itemVariants}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">
                {index + 1}. {dragon}
              </span>
              <span className={cn(
                'font-semibold',
                getScoreClass(count)
              )}>
                {count} {getDeclension(count, 'балл', 'балла', 'баллов')}
              </span>
            </div>

            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${getScorePercentage(count)}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                  'h-full rounded-full bg-gradient-to-r shadow-inner',
                  getGradientColors(count)
                )}
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={itemVariants}
          className="pt-4"
        >
          <Button
            variant="primary"
            fullWidth
            onClick={onReset}
            className="mt-4"
          >
            Пройти тест заново
          </Button>
        </motion.div>
      </motion.div>
    </Card>
  );
};

export default React.memo(Results);