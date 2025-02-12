import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

/**
 * Компонент для отображения вопроса теста
 * @param {Object} props
 * @param {string} props.question - Текст вопроса
 * @param {number} props.currentQuestion - Номер текущего вопроса
 * @param {number} props.totalQuestions - Общее количество вопросов
 * @param {number} props.currentDragon - Номер текущего дракона
 * @param {number} props.totalDragons - Общее количество драконов
 * @param {Function} props.onAnswer - Функция обработки ответа (true/false)
 */
const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  currentDragon,
  totalDragons,
  onAnswer,
}) => {
  return (
    <Card>
      <div>
        <p className="mb-4">{question}</p>
        <div className="flex space-x-4">
          <Button
            variant="success"
            fullWidth
            onClick={() => onAnswer(true)}
          >
            Да
          </Button>
          <Button
            variant="danger"
            fullWidth
            onClick={() => onAnswer(false)}
          >
            Нет
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Вопрос {currentQuestion + 1} из {totalQuestions} 
          (Дракон {currentDragon + 1} из {totalDragons})
        </p>
      </div>
    </Card>
  );
};

export default React.memo(Question);