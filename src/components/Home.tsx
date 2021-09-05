import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import mainLogo from "../images/GameLogo.png";

const HomeWrap = styled.div`
  width: 705px;
  height: 100%;

  padding: 0 15px;
  box-sizing: border-box;
  border-left: 2px solid #000000;
  border-right: 2px solid #000000;

  display: flex;
  flex-direction: column;
  background: #fff8ee;
  justify-content: center;
  align-items: center;
`;

const HomeContents = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px 125px;
  box-sizing: border-box;
  border: 2px solid #ffffff;

  display: flex;
  flex-direction: column;
  background: #fff0d8;
  justify-content: center;
  align-items: center;
`;

const HomeIconWrap = styled.div`
  width: 100%;
  height: 60%;
  background-color: #ffffff;
  padding: 25px;
  box-sizing: border-box;
`;

const HomeIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuButtons = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  justify-content: space-between;
  & div {
    width: 200px;
    height: 50px;
    background-color: #6f6a62;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    color: #ffffff;
    /* text-decoration: none; */
  }
`;
const MenuLogin = styled.div``;
const MenuStartGame = styled.div``;
const MenuRoluOfGame = styled.div``;
const MenuSetDifficulty = styled.div``;
const MenuTitleWrap = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MenuTitle = styled.div``;
const MenuTitleUnderBar = styled.div`
  width: 50%;
  height: 2px;
  background-color: #000000;
`;

const Home = () => {
  return (
    <HomeWrap>
      <HomeContents>
        <HomeIconWrap>
          <HomeIcon src={mainLogo} />
        </HomeIconWrap>
        <MenuTitleWrap>
          <MenuTitle>COCO MEOW</MenuTitle>
          <MenuTitleUnderBar />
        </MenuTitleWrap>
        <MenuButtons>
          <Link
            style={{ placeSelf: "center center", textDecoration: "none" }}
            to="/login"
          >
            <MenuLogin>Login</MenuLogin>
          </Link>
          <Link
            style={{ placeSelf: "center center", textDecoration: "none" }}
            to="/gameBoard"
          >
            <MenuStartGame>Game Start</MenuStartGame>
          </Link>
        </MenuButtons>
        <MenuButtons>
          <Link
            style={{ placeSelf: "center center", textDecoration: "none" }}
            to="/ruldOfGame"
          >
            <MenuRoluOfGame>How to play</MenuRoluOfGame>
          </Link>
          <Link
            style={{ placeSelf: "center center", textDecoration: "none" }}
            to="/setDifficulty"
          >
            <MenuSetDifficulty>Set Game Level</MenuSetDifficulty>
          </Link>
        </MenuButtons>
      </HomeContents>
    </HomeWrap>
  );
};
export default Home;
