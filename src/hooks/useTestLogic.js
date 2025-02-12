import { useState } from 'react';
import { dragons } from '../data/dragons';
import { TEST_CONSTANTS } from '../constants/test';

/**
 * Хук для управления логикой теста драконов
 * @returns {Object} Объект с состоянием и методами управления тестом
 */
export const useTestLogic = () => {
  const [currentDragon, setCurrentDragon] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);

  /**
   * Обработка ответа на вопрос
   * @param {boolean} answer - Ответ на вопрос (да/нет)
   */
  const handleAnswer = (answer) => {
    const dragonName = dragons[currentDragon].name;
    
    // Обновляем счет для текущего дракона
    setAnswers(prev => ({
      ...prev,
      [dragonName]: (prev[dragonName] || 0) + (answer ? 1 : 0),
    }));

    // Переходим к следующему вопросу или дракону
    if (currentQuestion < dragons[currentDragon].questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentDragon < dragons.length - 1) {
      setCurrentDragon(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      setTestCompleted(true);
    }
  };

  /**
   * Получение отсортированных результатов теста
   * @returns {Array<[string, number]>} Массив пар [имя дракона, количество баллов]
   */
  const getResults = () => {
    return Object.entries(answers)
      .sort((a, b) => b[1] - a[1])
      .slice(0, TEST_CONSTANTS.DISPLAYED_DRAGONS_COUNT)
      .filter(([_, count]) => count > 0);
  };

  /**
   * Сброс теста к начальному состоянию
   */
  const resetTest = () => {
    setCurrentDragon(0);
    setCurrentQuestion(0);
    setAnswers({});
    setTestCompleted(false);
  };

  return {
    // Состояние
    currentDragon,
    currentQuestion,
    testCompleted,
    
    // Данные
    currentDragonData: dragons[currentDragon],
    totalDragons: dragons.length,
    
    // Методы
    handleAnswer,
    getResults,
    resetTest,
  };
};