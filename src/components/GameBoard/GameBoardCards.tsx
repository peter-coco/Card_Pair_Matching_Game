import React, { useEffect } from "react";
import styled from "styled-components";
import GameBoardCard from "./GameBoardCard";

import Imagedata from "./CardImgs";

const GameBoardCardsWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fffaec;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`;

const GameBoardCards = () => {
  return (
    <GameBoardCardsWrap>
      {Imagedata.map((e) => (
        <GameBoardCard key={e} ImgUrl={e} />
      ))}
    </GameBoardCardsWrap>
  );
};
export default GameBoardCards;
