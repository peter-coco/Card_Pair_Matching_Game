import React, { useEffect } from "react";
import styled from "styled-components";

import { Route } from "react-router-dom";

import GameBoard from "./GameBoard";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import RuleOfGame from "./RuleOfGame";
import SetDifficulty from "./SetDifficulty";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf2f7;
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
