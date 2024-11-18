import React, { useState } from "react";

const dragons = [
  {
    name: "Дракон высокомерия",
    questions: [
      "Часто ли вам кажется, что вы знаете больше или лучше других?",
      "Бывают ли моменты, когда вы считаете, что вам не о чем учиться у окружающих?",
      "Сложно ли вам признавать свои ошибки?",
      "Бывает ли, что вы не готовы слушать чужие мнения, считая их менее значимыми?",
      "Легко ли вам кажется, что вы превосходите других в своих навыках или знаниях?",
      "Бывают ли случаи, когда вы сознательно избегаете людей, считая их недостаточно компетентными?",
      "Часто ли вы стараетесь показать свое превосходство на фоне недостатков других?",
      "Возникает ли у вас ощущение, что другие просто не понимают вашу глубину или уровень мышления?",
      "Бывают ли ситуации, когда вы не хотите тратить время на объяснения, потому что считаете, что другие все равно не поймут?",
    ],
  },
  {
    name: "Дракон самоуничижения",
    questions: [
      "Часто ли вы чувствуете себя хуже других?",
      "Ощущаете ли вы, что ваши успехи незначительны или не заслуживают внимания?",
      "Считаете ли вы, что ваши ошибки и неудачи показывают, что вы неполноценны?",
      "Извиняетесь ли вы часто, даже если в этом нет необходимости?",
      "Сложно ли вам принимать похвалу и признание?",
      "Бывает ли, что вы заранее избегаете вызовов, считая, что вам их не преодолеть?",
      "Чувствуете ли вы страх перед критикой и стараетесь избегать ситуаций, где вас могут судить?",
      "Испытываете ли вы ощущение, что ваши идеи или предложения не заслуживают внимания?",
      "Бывает ли, что вы откладываете дела, боясь неудачи?",
    ],
  },
  {
    name: "Дракон нетерпеливости",
    questions: [
      "Часто ли вы испытываете раздражение, если люди или события развиваются медленно?",
      "Бывает ли так, что вам трудно дождаться результата, и вы начинаете торопить события?",
      "Вы легко расстраиваетесь, если кто-то замедляет вашу работу или планы?",
      "Предпочитаете ли вы делать что-то быстрее, даже если это может повлиять на качество?",
      "Ощущаете ли вы внутреннее напряжение, если что-то занимает больше времени, чем ожидалось?",
      "Чувствуете ли вы разочарование, если другие не работают в том же темпе, что и вы?",
      "Часто ли вам сложно наслаждаться процессом, потому что вы слишком сосредоточены на конечном результате?",
      "Бывает ли, что вы предпочитаете взяться за дело сами, лишь бы ускорить его выполнение?",
      "Часто ли вы чувствуете тревогу, когда нет четкого и быстрого прогресса?",
    ],
  },
  {
    name: "Дракон мученичества",
    questions: [
      "Ощущаете ли вы, что часто жертвуете своими интересами ради других?",
      "Бывает ли, что вам кажется, что окружающие не ценят ваши усилия?",
      "Считаете ли вы себя человеком, который постоянно помогает другим, забывая о себе?",
      "Ощущаете ли вы обиду, если ваши жертвы не замечают?",
      "Часто ли вы чувствуете, что страдаете ради благополучия других?",
      "Бывают ли случаи, когда вы чувствуете необходимость заслужить любовь и уважение через самопожертвование?",
      "Чувствуете ли вы, что часто оказываетесь в положении «вечно пострадавшего»?",
      "Вам трудно сказать «нет», даже если это вредит вам?",
      "Бывает ли, что вы сознательно подчеркиваете свои жертвы, чтобы окружающие их заметили?",
    ],
  },
  {
    name: "Дракон жадности",
    questions: [
      "Чувствуете ли вы сильное желание иметь больше вещей или ресурсов?",
      "Вам трудно делиться своими вещами с другими?",
      "Часто ли вы чувствуете, что вам чего-то не хватает, даже если у вас есть всё необходимое?",
      "Легко ли вам тратить деньги на других людей?",
      "Чувствуете ли вы беспокойство, если у вас нет контроля над вещами, которые вам нужны?",
      "Бывает ли, что вы испытываете зависть к тем, кто обладает тем, чего у вас нет?",
      "Чувствуете ли вы, что никогда не достаточно богаты или успешны, чтобы почувствовать удовлетворение?",
      "Часто ли вы хотите иметь больше, даже если это не приносит вам истинного счастья?",
      "Трудно ли вам отказаться от вещей, даже если они вам больше не нужны?",
    ],
  },
  {
    name: "Дракон саморазрушения",
    questions: [
      "Бывают ли моменты, когда вы чувствуете себя недостойным хорошего отношения или успеха?",
      "Вы часто поступаете так, что это причиняет вам вред, даже если знаете о последствиях?",
      "Часто ли вы избегаете заботы о себе и своём здоровье?",
      "Склонны ли вы к негативным мыслям о себе, которые мешают вашему счастью?",
      "Бывает ли, что вы отказываетесь от хороших возможностей, считая, что не заслуживаете их?",
      "Бывает ли, что вы намеренно избегаете успеха, опасаясь его последствий?",
      "Чувствуете ли вы, что ваши ошибки невозможно исправить, и это ведет к саморазрушению?",
      "Часто ли вы откладываете заботу о своём здоровье, несмотря на последствия?",
      "Бывает ли, что вы считаете, что ваше счастье неважно по сравнению с другими людьми?",
    ],
  },
  {
    name: "Дракон упрямства",
    questions: [
      "Сложно ли вам принимать чужие предложения или изменять свои привычки?",
      "Ощущаете ли вы сопротивление, когда сталкиваетесь с необходимостью перемен?",
      "Часто ли вы отказываетесь от помощи, предпочитая делать всё самостоятельно?",
      "Бывает ли, что вы настаиваете на своём, даже если это не рационально?",
      "Ощущаете ли вы страх перед неизвестностью, который мешает вам делать изменения в жизни?",
      "Трудно ли вам адаптироваться к неожиданным изменениям, даже если они могут быть полезными?",
      "Бывает ли, что вы отвергаете новые идеи только потому, что они нарушают привычный уклад?",
      "Чувствуете ли вы потребность защищаться, когда вам предлагают что-то новое?",
      "Бывает ли, что ваша первая реакция на перемены — это их отрицание?",
    ],
  },
];

const DragonTest = () => {
  const [currentDragon, setCurrentDragon] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);

  const handleAnswer = (answer) => {
    const dragonName = dragons[currentDragon].name;
    setAnswers((prev) => ({
      ...prev,
      [dragonName]: (prev[dragonName] || 0) + (answer ? 1 : 0),
    }));

    if (currentQuestion < dragons[currentDragon].questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentDragon < dragons.length - 1) {
      setCurrentDragon((prev) => prev + 1);
      setCurrentQuestion(0);
    } else {
      setTestCompleted(true);
    }
  };

  const findPrimaryDragons = () => {
    return Object.entries(answers)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .filter(([_, count]) => count > 0);
  };

  const resetTest = () => {
    setCurrentDragon(0);
    setCurrentQuestion(0);
    setAnswers({});
    setTestCompleted(false);
  };

  if (testCompleted) {
    const primaryDragons = findPrimaryDragons();
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Результат теста</h2>
        <div>
          <p className="mb-4">Ваши основные драконы:</p>
          {primaryDragons.map(([dragon, count], index) => (
            <p key={dragon} className={`font-semibold ${index === 0 ? 'text-xl' : 'text-lg'} mb-2`}>
              {index + 1}. {dragon} ({count} баллов)
            </p>
          ))}
          <p className="mt-4">Количество ответов по всем драконам:</p>
          <ul>
            {Object.entries(answers).map(([dragon, count]) => (
              <li key={dragon} className="mt-2">
                {dragon}: {count}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={resetTest}
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Пройти тест заново
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
     {/*  <h2 className="text-2xl font-bold mb-4">{dragons[currentDragon].name}</h2> */}
      <div>
        <p className="mb-4">
          {dragons[currentDragon].questions[currentQuestion]}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => handleAnswer(true)}
            className="w-1/2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Да
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="w-1/2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Нет
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Вопрос {currentQuestion + 1} из{" "}
          {dragons[currentDragon].questions.length} (Дракон {currentDragon + 1}{" "}
          из {dragons.length})
        </p>
      </div>
    </div>
  );
};

export default DragonTest;