import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginFormWrap = styled.div`
  width: 530px;
  height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
  left: -60px;
  gap: 20px;
  justify-content: center;
  & div {
    font-size: 30px;
    color: #fff;
  }
`;
const LoginTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const LoginIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginIdTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const LoginIdInput = styled.div`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
`;
const LoginPWWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginPWTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const LoginPWInput = styled.div`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
`;
const LoginBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginBtn = styled.div``;
const Link2JoinBtn = styled.div``;
const LoginBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  & div {
    width: 45%;
    height: 100%;
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #000000;
    font-weight: 600;
  }
`;
const LoginEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const LoginForm = () => {
  return (
    <LoginFormWrap>
      <LoginTitleWrap>
        <LoginEmpty />
        <LoginTitle>로그인</LoginTitle>
      </LoginTitleWrap>
      <LoginIdWrap>
        <LoginIdTitle>아이디</LoginIdTitle>
        <LoginIdInput></LoginIdInput>
      </LoginIdWrap>
      <LoginPWWrap>
        <LoginPWTitle>비밀번호</LoginPWTitle>
        <LoginPWInput></LoginPWInput>
      </LoginPWWrap>
      <LoginBtnsWrap>
        <LoginEmpty />
        <LoginBtns>
          <LoginBtn>로그인</LoginBtn>
          <Link2JoinBtn>
            <Link to="/join">회원가입 </Link>
          </Link2JoinBtn>
        </LoginBtns>
      </LoginBtnsWrap>
    </LoginFormWrap>
  );
};
export default LoginForm;
