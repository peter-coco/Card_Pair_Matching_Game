import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JoinFormWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 50px 0;

  box-sizing: border-box;
`;

const JoinTitle = styled.div`
  width: 100%;
  height: 82px;
  text-align: center;
  line-height: 82px;
  color: #ffffff;
  font-size: 48px;
  background-color: #bcaf9b;
  margin-bottom: 100px;
`;
const JoinIdWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 20px;
`;
const JoinIdTitle = styled.div`
  width: 20%;
  height: 51px;
  /* text-align: center; */
  line-height: 51px;
  color: #ffffff;
  font-size: 30px;
`;
const JoinIdInput = styled.div`
  width: 80%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const JoinPWWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 40px;
`;
const JoinPWTitle = styled.div`
  width: 20%;
  height: 51px;
  /* text-align: center; */
  line-height: 51px;
  color: #ffffff;
  font-size: 30px;
`;
const JoinPWInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const JoinBtnsWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
`;
const JoinBtn = styled.div`
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
const JoinBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const JoinLogoWrap = styled.div`
  width: 382px;
  height: 184px;
`;
const JoinLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const JoinForm = () => {
  return (
    <JoinFormWrap>
      <JoinLogoWrap>
        <JoinLogoImg />
      </JoinLogoWrap>
      <JoinTitle>Sign In</JoinTitle>
      <JoinIdWrap>
        <JoinIdTitle>ID</JoinIdTitle>
        <JoinIdInput></JoinIdInput>
      </JoinIdWrap>
      <JoinPWWrap>
        <JoinPWTitle>PW</JoinPWTitle>
        <JoinPWInput></JoinPWInput>
      </JoinPWWrap>
      <JoinBtnsWrap>
        <JoinBtns>
          <Link
            to="/join"
            style={{
              textDecoration: "none",
              width: "100%",
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
            <Link2JoinBtn>Sign in</Link2JoinBtn>
          </Link>
        </JoinBtns>
      </JoinBtnsWrap>
    </JoinFormWrap>
  );
};
export default JoinForm;
