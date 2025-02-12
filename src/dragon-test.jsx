import React from 'react';
import Question from './components/DragonTest/Question';
import Results from './components/DragonTest/Results';
import { useTestLogic } from './hooks/useTestLogic';

/**
 * Основной компонент теста драконов
 */
const DragonTest = () => {
  const {
    currentDragon,
    currentQuestion,
    testCompleted,
    currentDragonData,
    totalDragons,
    handleAnswer,
    getResults,
    resetTest,
  } = useTestLogic();

  if (testCompleted) {
    return (
      <Results
        results={getResults()}
        onReset={resetTest}
      />
    );
  }

  return (
    <Question
      question={currentDragonData.questions[currentQuestion]}
      currentQuestion={currentQuestion}
      totalQuestions={currentDragonData.questions.length}
      currentDragon={currentDragon}
      totalDragons={totalDragons}
      onAnswer={handleAnswer}
    />
  );
};

export default DragonTest;