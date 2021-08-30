import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JoinFormWrap = styled.div`
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
const JoinTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const JoinTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const JoinIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const JoinIdTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const JoinIdInput = styled.div`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
`;
const JoinPWWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const JoinPWTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const JoinPWInput = styled.div`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
`;
const JoinBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const JoinBtn = styled.div``;
const JoinBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  & div {
    width: 100%;
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
const JoinEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const JoinForm = () => {
  return (
    <JoinFormWrap>
      <JoinTitleWrap>
        <JoinEmpty />
        <JoinTitle>회원가입</JoinTitle>
      </JoinTitleWrap>
      <JoinIdWrap>
        <JoinIdTitle>아이디</JoinIdTitle>
        <JoinIdInput></JoinIdInput>
      </JoinIdWrap>
      <JoinPWWrap>
        <JoinPWTitle>비밀번호</JoinPWTitle>
        <JoinPWInput></JoinPWInput>
      </JoinPWWrap>
      <JoinBtnsWrap>
        <JoinEmpty />
        <JoinBtns>
          <JoinBtn>가입하기</JoinBtn>
        </JoinBtns>
      </JoinBtnsWrap>
    </JoinFormWrap>
  );
};
export default JoinForm;
