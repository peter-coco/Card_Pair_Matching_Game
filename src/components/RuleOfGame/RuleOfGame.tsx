import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CancleBtnCircle from "../CancleBtnCircle";
import RuleOfGameForm from "./RuleOfGameForm";

const RuleOfGameWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const RuleOfGame = () => {
  return (
    <RuleOfGameWrap>
      <Link
        style={{
          position: "absolute",
          right: "20px",
          top: "15px",
          zIndex: 1,
        }}
        to="/"
        // onClick={() => console.log("HIHI")}
      >
        <CancleBtnCircle />
      </Link>
      <RuleOfGameForm />
    </RuleOfGameWrap>
  );
};
export default RuleOfGame;
