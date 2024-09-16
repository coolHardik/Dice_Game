import React from "react";
import styled from "styled-components";
import dice1 from '../assets/dice/dice_1.png';
import dice2 from '../assets/dice/dice_2.png';
import dice3 from '../assets/dice/dice_3.png';
import dice4 from '../assets/dice/dice_4.png';
import dice5 from '../assets/dice/dice_5.png';
import dice6 from '../assets/dice/dice_6.png';

// Map currentDice value to its corresponding image
const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6
};

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={() => roleDice()}>
        <img src={diceImages[currentDice]} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 20px;
    margin-top: 12px;
  }
`;
