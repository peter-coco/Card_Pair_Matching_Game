import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

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

const CancleBtnCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > div {
    position: absolute;
    width: 30px;
    height: 5px;
    background-color: #6f6a62;
    border-radius: 20px;
  }
`;
const CancleBtnBarLeft = styled.div`
  transform: rotate(45deg);
`;

const CancleBtnBarRight = styled.div`
  transform: rotate(-45deg);
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
          <CancleBtnCircle>
            <CancleBtnBarLeft />
            <CancleBtnBarRight />
          </CancleBtnCircle>
        </Link>
        <LoginForm />
      </LoginRightWrap>
    </LoginWrap>
  );
};
export default Login;
