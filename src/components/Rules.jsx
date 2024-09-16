import styled from "styled-components";
import React from "react";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>Select any number.</p>
        <p>Click on the dice image.</p>
        <p>
          After clicking the dice, if your selected number matches the dice
          number, you'll earn the same points as the dice number.
        </p>
        <p>If your guess is wrong, 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 25px;
  margin-top: 50px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .text {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
    margin-top: 20px;

    p {
      margin-bottom: 15px;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
`;
