import styled from "styled-components";
import GameTitleLogo from "../images/GameLogoTitle.png";

const LogoSideWrap = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LogoSideCurrent = styled.div``;

const LogoSideImg = styled.img`
  width: 100%;
  height: 100%;
`;
const LogoSideSubLogo = styled.div`
  width: 300px;
  height: 100px;
`;
const LogoSide = ({
  currentPageLogo,
  curLogoWidth,
  curLogoHeight,
}: {
  currentPageLogo: string;
  curLogoHeight: number;
  curLogoWidth: number;
}) => {
  return (
    <LogoSideWrap>
      <LogoSideCurrent
        style={{ width: `${curLogoWidth}px`, height: `${curLogoHeight}px` }}
      >
        <LogoSideImg src={currentPageLogo} />
      </LogoSideCurrent>
      <LogoSideSubLogo>
        <LogoSideImg src={GameTitleLogo} />
      </LogoSideSubLogo>
    </LogoSideWrap>
  );
};

export default LogoSide;
