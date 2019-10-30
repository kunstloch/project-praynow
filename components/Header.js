import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: fixed;
  background-color: #ffe100;
  width: 100%;
  height: 100px;
  margin: 0px;
  padding: 0px;
  top: 0px;
  left: 0px;
  border-bottom: 5px solid black;
  border-top: 5px solid black;
  /* z-index: -2; */
  margin-bottom: 100px;
`;

const LoginImg = styled.img`
  height: 50px;
  right: 10px;
  top: 42px;
  position: absolute;
`;

const LogoImg = styled.img`
  height: 80px;
  left: 20px;
  top: 10px;
  position: absolute;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div></div>
      <Link href="/">
        <LogoImg src="BlackHandyPrayBG.png" alt="PrayNow Logo" />
      </Link>

      <LoginImg src="/LoginFace.png" alt="Login Symbol" />
    </HeaderStyled>
  );
}
