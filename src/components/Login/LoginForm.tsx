import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginSubLogo from "../../images/subLogo.png";

const LoginFormWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 50px 0;

  box-sizing: border-box;
`;

const LoginTitle = styled.div`
  width: 100%;
  height: 82px;
  text-align: center;
  line-height: 82px;
  color: #ffffff;
  font-size: 48px;
  background-color: #bcaf9b;
  margin-bottom: 100px;
`;
const LoginIdWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 20px;
`;
const LoginIdTitle = styled.div`
  width: 20%;
  height: 51px;
  /* text-align: center; */
  line-height: 51px;
  color: #ffffff;
  font-size: 30px;
`;
const LoginIdInput = styled.div`
  width: 80%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const LoginPWWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 40px;
`;
const LoginPWTitle = styled.div`
  width: 20%;
  height: 51px;
  /* text-align: center; */
  line-height: 51px;
  color: #ffffff;
  font-size: 30px;
`;
const LoginPWInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const LoginBtnsWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
`;
const LoginBtn = styled.div`
  width: 45%;
  height: 100%;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #000000;
  font-weight: 600;
`;
const Link2JoinBtn = styled.div``;
const LoginBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LoginLogoWrap = styled.div`
  width: 382px;
  height: 184px;
`;
const LoginLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginForm = () => {
  return (
    <LoginFormWrap>
      <LoginLogoWrap>
        <LoginLogoImg src={LoginSubLogo} />
      </LoginLogoWrap>
      <LoginTitle>Login</LoginTitle>
      <LoginIdWrap>
        <LoginIdTitle>ID</LoginIdTitle>
        <LoginIdInput></LoginIdInput>
      </LoginIdWrap>
      <LoginPWWrap>
        <LoginPWTitle>PW</LoginPWTitle>
        <LoginPWInput></LoginPWInput>
      </LoginPWWrap>
      <LoginBtnsWrap>
        <LoginBtns>
          <LoginBtn>Login</LoginBtn>
          <Link
            to="/join"
            style={{
              textDecoration: "none",
              width: "45%",
              height: "100%",
              backgroundColor: "#c4c4c4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            <Link2JoinBtn>Join</Link2JoinBtn>
          </Link>
        </LoginBtns>
      </LoginBtnsWrap>
    </LoginFormWrap>
  );
};
export default LoginForm;
