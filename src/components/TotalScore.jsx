import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;

  h1 {
    font-size: 90px;
    margin-bottom: 0;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 70px;
    }
  }
`;
