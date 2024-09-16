import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 12px 20px;
  background: black;
  border-radius: 8px;
  min-width: 240px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 16px;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
