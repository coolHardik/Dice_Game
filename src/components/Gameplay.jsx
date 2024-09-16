import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import toast from "react-hot-toast";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      toast.error("You have not selected any number", {
        duration: 2000,
      });
      return;
    }
    const randomNumber = generateNumber(1, 7);
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div>
        <div className="btns">
          <OutlineButton onClick={() => resetScore()}>Reset</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
        </div>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding: 70px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 900px;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
    }
    .btns {
      flex-direction: column;
    }
  }
`;
