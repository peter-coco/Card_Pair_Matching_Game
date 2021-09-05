import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import SetDifficultyForm from "./SetDifficultyForm";
import CancleBtnCircle from "./CancleBtnCircle";

const SetDifficultyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const SetDifficultyLeftWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SetDifficultyLogoWrap = styled.div`
  width: 200px;
  height: 200px;
`;
const SetDifficultyLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SetDifficultyTitleWrap = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SetDifficultyTitle = styled.div``;
const SetDifficultyTitleUnderBar = styled.div`
  width: 50%;
  height: 2px;
  background-color: #000000;
`;

const SetDifficultyRightWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: #68645e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetDifficulty = () => {
  return (
    <SetDifficultyWrap>
      <SetDifficultyLeftWrap>
        <SetDifficultyLogoWrap>
          <SetDifficultyLogoImg />
        </SetDifficultyLogoWrap>
        <SetDifficultyTitleWrap>
          <SetDifficultyTitle>COCO MEOW</SetDifficultyTitle>
          <SetDifficultyTitleUnderBar />
        </SetDifficultyTitleWrap>
      </SetDifficultyLeftWrap>
      <SetDifficultyRightWrap>
        <Link
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            zIndex: 1,
          }}
          to="/"
          // onClick={() => console.log("HIHI")}
        >
          <CancleBtnCircle />
        </Link>
        <SetDifficultyForm />
      </SetDifficultyRightWrap>
    </SetDifficultyWrap>
  );
};
export default SetDifficulty;
