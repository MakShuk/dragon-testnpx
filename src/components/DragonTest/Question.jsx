import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  currentDragon,
  totalDragons,
  onAnswer,
}) => {
  const questionProgress = ((currentQuestion + 1) / totalQuestions) * 100;
  const dragonProgress = ((currentDragon + 1) / totalDragons) * 100;

  return (
    <Card>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg font-medium text-gray-800">{question}</p>
        </motion.div>

        <div className="flex space-x-4">
          <Button
            variant="success"
            fullWidth
            onClick={() => onAnswer(true)}
            className="transition-transform hover:scale-105"
          >
            Да
          </Button>
          <Button
            variant="danger"
            fullWidth
            onClick={() => onAnswer(false)}
            className="transition-transform hover:scale-105"
          >
            Нет
          </Button>
        </div>

        <div className="space-y-4">
          {/* Прогресс вопросов */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">
                Вопрос {currentQuestion + 1} из {totalQuestions}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(questionProgress)}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${questionProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Прогресс драконов */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">
                Дракон {currentDragon + 1} из {totalDragons}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(dragonProgress)}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${dragonProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(Question);