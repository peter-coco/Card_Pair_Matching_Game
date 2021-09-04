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
const SetDifficultyIdWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 20px;
`;
const SetDifficultyIdTitle = styled.div`
  width: 20%;
  height: 51px;
  /* text-align: center; */
  line-height: 51px;
  color: #ffffff;
  font-size: 30px;
`;
const SetDifficultyIdInput = styled.div`
  width: 80%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const SetDifficultyPWWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
  margin-bottom: 40px;
`;
const SetDifficultyPWTitle = styled.div`
  width: 20%;
  height: 51px;
  /* text-align: center; */
  line-height: 51px;
  color: #ffffff;
  font-size: 30px;
`;
const SetDifficultyPWInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: #c4c4c4;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const SetDifficultyBtnsWrap = styled.div`
  display: flex;
  width: 80%;
  height: 51px;
`;
const SetDifficultyBtn = styled.div`
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
const SetDifficultyBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const SetDifficultyForm = () => {
  return (
    <SetDifficultyFormWrap>
      <SetDifficultyTitle>LEVEL SECTION</SetDifficultyTitle>
      <SetDifficultyIdWrap>
        <SetDifficultyIdTitle>TIME LIMIT</SetDifficultyIdTitle>
        <SetDifficultyIdInput></SetDifficultyIdInput>
      </SetDifficultyIdWrap>
      <SetDifficultyPWWrap>
        <SetDifficultyPWTitle>CLICK COUNT</SetDifficultyPWTitle>
        <SetDifficultyPWInput></SetDifficultyPWInput>
      </SetDifficultyPWWrap>
      <SetDifficultyPWWrap>
        <SetDifficultyPWTitle>REMAIN CARD</SetDifficultyPWTitle>
        <SetDifficultyPWInput></SetDifficultyPWInput>
      </SetDifficultyPWWrap>
      <SetDifficultyBtnsWrap>
        <SetDifficultyBtns>
          <SetDifficultyBtn>SetDifficulty</SetDifficultyBtn>
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
        </SetDifficultyBtns>
      </SetDifficultyBtnsWrap>
    </SetDifficultyFormWrap>
  );
};
export default SetDifficultyForm;
