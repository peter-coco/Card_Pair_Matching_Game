import styled from "styled-components";

const CancleBtnCircleWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > div {
    position: absolute;
    width: 30px;
    height: 5px;
    background-color: #6f6a62;
    border-radius: 20px;
  }
`;
const CancleBtnBarLeft = styled.div`
  transform: rotate(45deg);
`;

const CancleBtnBarRight = styled.div`
  transform: rotate(-45deg);
`;

const CancleBtnCircle = () => {
  return (
    <CancleBtnCircleWrap>
      <CancleBtnBarLeft />
      <CancleBtnBarRight />
    </CancleBtnCircleWrap>
  );
};

export default CancleBtnCircle;
