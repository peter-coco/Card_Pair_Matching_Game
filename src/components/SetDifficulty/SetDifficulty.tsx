import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import SetDifficultyForm from "./SetDifficultyForm";
import CancleBtnCircle from "../CancleBtnCircle";

import LevelLogo from "../../images/LevelSectionLogo.png";
import LogoSide from "../LogoSide";

const SetDifficultyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
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
      <LogoSide
        currentPageLogo={LevelLogo}
        curLogoWidth={200}
        curLogoHeight={200}
      />
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
