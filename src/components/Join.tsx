import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import JoinForm from "./JoinForm";
import CancleBtnCircle from "./CancleBtnCircle";

import JoinLogo from "../images/JoinLogo.png";
import GameTitleLogo from "../images/GameLogoTitle.png";

const JoinWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const JoinLeftWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const JoinLogoWrap = styled.div`
  width: 200px;
  height: 200px;
`;
const JoinLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const JoinTitleWrap = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const JoinTitle = styled.div``;
const JoinTitleUnderBar = styled.div`
  width: 50%;
  height: 2px;
  background-color: #000000;
`;

const JoinRightWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: #68645e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Join = () => {
  return (
    <JoinWrap>
      <JoinLeftWrap>
        <JoinLogoWrap>
          <JoinLogoImg src={JoinLogo} />
        </JoinLogoWrap>
        <JoinTitleWrap>
          <SetDifficultyLogoImg src={GameTitleLogo} />
        </JoinTitleWrap>
      </JoinLeftWrap>
      <JoinRightWrap>
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
        <JoinForm />
      </JoinRightWrap>
    </JoinWrap>
  );
};
export default Join;
