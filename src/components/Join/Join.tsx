import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import JoinForm from "./JoinForm";
import CancleBtnCircle from "../CancleBtnCircle";

import JoinLogo from "../../images/JoinLogo.png";
import LogoSide from "../LogoSide";

const JoinWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
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
      <LogoSide
        currentPageLogo={JoinLogo}
        curLogoWidth={200}
        curLogoHeight={200}
      />
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
