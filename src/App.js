import React, { useEffect, useState } from "react";
import "./App.css";
import DragonTest from "./dragon-test";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Добавляем небольшую задержку, чтобы DOM успел отрисоваться
    const timer = setTimeout(() => {
      document.documentElement.setAttribute('data-render-ready', '1');
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${!isReady ? 'no-animation' : ''}`}>
      <DragonTest />
    </div>
  );
}

export default App;
