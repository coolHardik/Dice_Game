import React from "react";
import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arraynumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arraynumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    gap: 16px;
  }

  p {
    margin-top: 12px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: #f1f1f1;
  }
`;
