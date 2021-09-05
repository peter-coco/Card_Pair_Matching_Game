import React, { useEffect } from "react";
import styled from "styled-components";

const GameBoardStateWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;

const GameBoardStateContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
`;
const GameBoardStateTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
`;
const GameBoardStateValue = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f0f0;
  border-radius: 10px;
`;

const GameBoardState = () => {
  return (
    <GameBoardStateWrap>
      <GameBoardStateContent>
        <GameBoardStateTitle>TIME LIMIT</GameBoardStateTitle>
        <GameBoardStateValue>1 : 30 : 00</GameBoardStateValue>
      </GameBoardStateContent>
      <GameBoardStateContent>
        <GameBoardStateTitle>CLICK LIMIT</GameBoardStateTitle>
        <GameBoardStateValue>30</GameBoardStateValue>
      </GameBoardStateContent>
      <GameBoardStateContent>
        <GameBoardStateTitle>REMAIN CARD</GameBoardStateTitle>
        <GameBoardStateValue>8</GameBoardStateValue>
      </GameBoardStateContent>
    </GameBoardStateWrap>
  );
};
export default GameBoardState;
