import React, { useEffect } from "react";
import styled from "styled-components";

const GameBoardCardWrap = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const Card = styled.img`
  width: 100%;
  height: 100%;
`;

const GameBoardCard = ({ ImgUrl }: { ImgUrl: string }) => {
  return (
    <GameBoardCardWrap>
      <Card src={ImgUrl} />
    </GameBoardCardWrap>
  );
};
export default GameBoardCard;
