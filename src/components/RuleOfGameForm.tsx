import styled from "styled-components";

const RuleOfGameFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const RuleOfGameFormTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;

  background-color: #fff8ee;
`;
const RuleOfGameFormTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #bcaf9b;
  border: 5px solid #ffffff;
`;
const RuleOfGameFormTitle = styled.div`
  font-size: 40px;
  color: #ffffff;
  position: relative;
  left: -60px;
`;
const RuleOfGameFormLogoWrap = styled.div`
  width: 140px;
  height: 200px;
  position: relative;
  left: -60px;
`;
const RuleOfGameFormLogo = styled.img`
  width: 100%;
  height: 100%;
`;
const RuleOfGameFormBottom = styled.div`
  width: 100%;
  height: 70%;
  background-color: #68645e;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RuleOfGameFormExplan = styled.div`
  width: 90%;
  height: 80%;
  background-color: #ffffff;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
`;

const RuleOfGameForm = () => {
  return (
    <RuleOfGameFormWrap>
      <RuleOfGameFormTop>
        <RuleOfGameFormTitleWrap>
          <RuleOfGameFormLogoWrap>
            <RuleOfGameFormLogo />
          </RuleOfGameFormLogoWrap>
          <RuleOfGameFormTitle>HOW TO PLAY</RuleOfGameFormTitle>
        </RuleOfGameFormTitleWrap>
      </RuleOfGameFormTop>
      <RuleOfGameFormBottom>
        <RuleOfGameFormExplan>
          1. 로그인을 합니다. 아이디가 없는경우 회원가입을 합니다. (랭킹 정보)
          <br></br>
          <br></br>
          2. 난이도를 설정합니다. 난이도에 따라 제한 시간, 클릭 가능횟수가
          달라집니다.
          <br></br>
          <br></br>
          3. 게임을 시작합니다.
          <br></br>
          &nbsp;&nbsp;&nbsp; a. 같은 모양의 카드를 쌍으로 클릭해야 남은 카드
          갯수가 줄어듭니다. <br></br>
          &nbsp;&nbsp;&nbsp; b. 정해진 제한 시간이 0초 혹은 클릭 가능횟수가 0이
          되면 게임이 종료됩니다. ( Lose ! )<br></br>
          &nbsp;&nbsp;&nbsp; c. 상단에 남은 카드 갯수가 0 이면 게임이
          종료됩니다. ( Win ! )
        </RuleOfGameFormExplan>
      </RuleOfGameFormBottom>
    </RuleOfGameFormWrap>
  );
};

export default RuleOfGameForm;
