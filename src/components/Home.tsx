import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrap = styled.div`
  width: 577px;
  height: 736px;

  padding: 30px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  background: #ffffff;
  /* justify-content: center; */
  align-items: center;
`;

const HomeIconWrap = styled.div`
  width: 50%;
  height: 50%;
`;

const HomeIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuButtons = styled.div`
  display: grid;
  width: 100%;
  height: 50%;
  grid-template-columns: 1fr 1fr;

  & > div {
    width: 230px;
    height: 68px;
    background-color: #6f6a62;
    display: flex;
    place-self: center center;
    justify-content: center;
    align-items: center;
  }
`;
const MenuLogin = styled.div``;
const MenuStartGame = styled.div``;
const MenuRoluOfGame = styled.div``;
const MenuSetDifficulty = styled.div``;

const Home = () => {
  return (
    <HomeWrap>
      <HomeIconWrap>
        <HomeIcon />
      </HomeIconWrap>
      <MenuButtons>
        <MenuLogin>
          <Link to="/login">로그인</Link>
        </MenuLogin>
        <MenuStartGame>
          <Link to="/gameBoard">게임 시작</Link>
        </MenuStartGame>
        <MenuRoluOfGame>
          <Link to="/ruldOfGame">게임 방법</Link>
        </MenuRoluOfGame>
        <MenuSetDifficulty>
          <Link to="/setDifficulty">난이도 선택</Link>
        </MenuSetDifficulty>
      </MenuButtons>
    </HomeWrap>
  );
};
export default Home;
