import React, { useEffect } from "react";
import styled from "styled-components";

import { Route } from "react-router-dom";

import GameBoard from "./GameBoard/GameBoard";
import Home from "./Home";
import Join from "./Join/Join";
import Login from "./Login/Login";
import RuleOfGame from "./RuleOfGame/RuleOfGame";
import SetDifficulty from "./SetDifficulty/SetDifficulty";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff8ee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = () => {
  return (
    <BackgroundWrap>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/gameBoard" component={GameBoard} />
      <Route path="/setDifficulty" component={SetDifficulty} />
      <Route path="/ruldOfGame" component={RuleOfGame} />
    </BackgroundWrap>
  );
};
export default Background;
