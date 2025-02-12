import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Анимированные круги на фоне */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-purple-300 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-300 opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Основной контент */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ height: "clamp(150px, 30vh, 500px)" }}
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Тест на определение ваших драконов
        </motion.h1>

        <AnimatePresence mode="wait">
          {testCompleted ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Results
                results={getResults()}
                onReset={resetTest}
              />
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Question
                question={currentDragonData.questions[currentQuestion]}
                currentQuestion={currentQuestion}
                totalQuestions={currentDragonData.questions.length}
                currentDragon={currentDragon}
                totalDragons={totalDragons}
                onAnswer={handleAnswer}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DragonTest;