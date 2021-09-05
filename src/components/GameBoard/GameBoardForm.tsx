import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CancleBtnCircle from "../CancleBtnCircle";
import GameBoardCards from "./GameBoardCards";
import GameBoardState from "./GameBoardState";

const GameBoardFormWrap = styled.div`
  width: 80%;
  height: 80%;
  background-color: #68645e;
  position: relative;
  padding: 20px 40px 20px 20px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;

const GameBoardForm = () => {
  return (
    <GameBoardFormWrap>
      <Link
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          zIndex: 1,
        }}
        to="/"
      >
        <CancleBtnCircle />
      </Link>
      <GameBoardCards />
      <GameBoardState />
    </GameBoardFormWrap>
  );
};
export default GameBoardForm;
