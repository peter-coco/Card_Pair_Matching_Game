import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import CancleBtnCircle from "./CancleBtnCircle";

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const LoginLeftWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginLogoWrap = styled.div`
  width: 200px;
  height: 200px;
`;
const LoginLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginTitleWrap = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginTitle = styled.div``;
const LoginTitleUnderBar = styled.div`
  width: 50%;
  height: 2px;
  background-color: #000000;
`;

const LoginRightWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: #68645e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginWrap>
      <LoginLeftWrap>
        <LoginLogoWrap>
          <LoginLogoImg />
        </LoginLogoWrap>
        <LoginTitleWrap>
          <LoginTitle>COCO MEOW</LoginTitle>
          <LoginTitleUnderBar />
        </LoginTitleWrap>
      </LoginLeftWrap>
      <LoginRightWrap>
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
        <LoginForm />
      </LoginRightWrap>
    </LoginWrap>
  );
};
export default Login;
