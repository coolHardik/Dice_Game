import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGameplay} />}
    </div>
  );
}

export default App;
