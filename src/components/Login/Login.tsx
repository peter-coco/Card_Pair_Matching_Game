import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import CancleBtnCircle from "../CancleBtnCircle";
import LoginLogo from "../../images/LoginLogo.png";
import LogoSide from "../LogoSide";

const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const LoginRightWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: #68645e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginWrap>
      <LogoSide
        currentPageLogo={LoginLogo}
        curLogoWidth={200}
        curLogoHeight={200}
      />
      <LoginRightWrap>
        <Link
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            zIndex: 1,
          }}
          to="/"
          // onClick={() => console.log("HIHI")}
        >
          <CancleBtnCircle />
        </Link>
        <LoginForm />
      </LoginRightWrap>
    </LoginWrap>
  );
};
export default Login;
