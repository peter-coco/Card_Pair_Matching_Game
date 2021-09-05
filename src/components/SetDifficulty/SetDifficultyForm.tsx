import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SetDifficultyFormWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 100px 0;
  box-sizing: border-box;
`;

const SetDifficultyTitle = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #ffffff;
  font-size: 30px;
  background-color: #bcaf9b;
  margin-bottom: 100px;
`;
const SetDifficultyOptionWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 20px;
`;
const SetDifficultyOptionTitle = styled.div`
  width: 50%;
  height: 51px;
  line-height: 51px;
  color: #ffffff;
  font-size: 20px;
`;
const SetDifficultyOption = styled.div`
  width: 50%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;

const SetDifficultyBtn = styled.div`
  /* width: 45%;
  height: 100%;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #000000;
  font-weight: 600; */
`;
const SetDifficultyBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;

  justify-content: space-between;

  & div {
    width: 45%;
    height: 50px;
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    color: #ffffff;
    /* text-decoration: none; */
  }
`;

const SetDifficultyWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 200px;
`;
const SetDifficultySubTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;
const SetDifficultySubTitleBar = styled.div`
  width: 30%;
  height: 2px;
  background-color: #c4c4c4;
`;
const SetDifficultySubTitle = styled.div`
  width: 30%;
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SetDifficultySubOptionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
`;
const SetDifficultySubOption = styled.div`
  width: 30%;
  height: 100%;
  background-color: #c4c4c4;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetDifficultyForm = () => {
  return (
    <SetDifficultyFormWrap>
      <SetDifficultyTitle>LEVEL SECTION</SetDifficultyTitle>
      <SetDifficultyOptionWrap>
        <SetDifficultyOptionTitle>TIME LIMIT</SetDifficultyOptionTitle>
        <SetDifficultyOption></SetDifficultyOption>
      </SetDifficultyOptionWrap>
      <SetDifficultyOptionWrap>
        <SetDifficultyOptionTitle>CLICK COUNT LIMIT</SetDifficultyOptionTitle>
        <SetDifficultyOption></SetDifficultyOption>
      </SetDifficultyOptionWrap>
      <SetDifficultyWrap>
        <SetDifficultySubTitleWrap>
          <SetDifficultySubTitleBar />
          <SetDifficultySubTitle>LEVEL</SetDifficultySubTitle>
          <SetDifficultySubTitleBar />
        </SetDifficultySubTitleWrap>
        <SetDifficultySubOptionWrap>
          <SetDifficultySubOption style={{ color: "#308413" }}>
            쉬움
          </SetDifficultySubOption>
          <SetDifficultySubOption style={{ color: "#283390" }}>
            보통
          </SetDifficultySubOption>
          <SetDifficultySubOption style={{ color: "#9D1010" }}>
            어려움
          </SetDifficultySubOption>
        </SetDifficultySubOptionWrap>
        <SetDifficultyBtnsWrap>
          <SetDifficultyBtn>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                width: "100%",
                height: "100%",
                placeSelf: "center center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // textDecorationColor: "none",
                color: "black",
              }}
            >
              확인{" "}
            </Link>
          </SetDifficultyBtn>

          <SetDifficultyBtn>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                width: "100%",
                height: "100%",
                placeSelf: "center center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            >
              취소
            </Link>
          </SetDifficultyBtn>
        </SetDifficultyBtnsWrap>
      </SetDifficultyWrap>
    </SetDifficultyFormWrap>
  );
};
export default SetDifficultyForm;
