import React, { useEffect } from "react";
import styled from "styled-components";
import GameBoardForm from "./GameBoardForm";

const GameBoardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameBoard = () => {
  return (
    <GameBoardWrap>
      <GameBoardForm />
    </GameBoardWrap>
  );
};
export default GameBoard;
