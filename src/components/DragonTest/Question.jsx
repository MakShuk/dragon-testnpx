import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  const questionProgress = (currentQuestion / totalQuestions) * 100;
  const dragonProgress = (currentDragon / totalDragons) * 100;
  const prefersReducedMotion = useReducedMotion();

  // Базовые настройки анимации с учетом предпочтений пользователя
  const animationConfig = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: "easeOut" };

  const progressBarConfig = {
    initial: { width: 0 },
    animate: { width: "var(--progress)" },
    transition: { ...animationConfig, duration: 0.5 }
  };

  return (
    <Card>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationConfig}
          style={{ 
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p className="text-lg font-medium text-gray-800">{question}</p>
        </motion.div>

        <div className="flex space-x-4">
          <Button
            variant="success"
            fullWidth
            onClick={() => onAnswer(true)}
            className="transition-all hover:scale-105"
          >
            Да
          </Button>
          <Button
            variant="danger"
            fullWidth
            onClick={() => onAnswer(false)}
            className="transition-all hover:scale-105"
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
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                {...progressBarConfig}
                style={{ "--progress": `${questionProgress}%` }}
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
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"
                {...progressBarConfig}
                style={{ "--progress": `${dragonProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(Question);