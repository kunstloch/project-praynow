import React, { useState } from 'react';
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
  left: 5px;
  top: 45px;
  position: absolute;
`;

const LogoImg = styled.img`
  height: 80px;
  left: 38%;
  top: 10px;
  position: absolute;
`;

// const HamburgerImg = styled.img`
//   height: 45px;
//   right: 5px;
//   top: 55px;
//   position: absolute;
//   transform-origin: 1px;
// `;

// const HamburgerDiv = styled.div`
//   width: 35px;
//   height: 5px;
//   background-color: black;
//   margin: 6px 0;
// `;

const HamburgerButton = styled.button`
  height: 40px;
  right: 5px;
  top: 48px;
  position: absolute;
  background-color: #ffe100;
  margin: 6px;
  border: none;
`;

const HamburgerContent = styled.div`
  background-color: #ffe100;
  font-size: 38px;
  font-weight: bold;

  &:hover,
  &:focus {
    div {
      padding: 1px;
      margin-top: 1.5px;
    }
  }

  &.hidden {
    display: none;
  }

  div {
    width: 35px;
    height: 6px;
    background-color: black;
    margin: 6px 0;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 110px;
  right: 0;

  width: 50%;

  bottom: 0;
  background: rgb(255, 225, 0, 0.97);
  border-left: 5px solid black;

  &.hidden {
    display: none;
  }

  li {
    text-decoration: none;
    list-style-type: none;
    margin: 30px 0px 10px 5px;
    font-size: (20px);
    font-weight: bold;
  }
`;

const NoDeco = styled.a`
  text-decoration: none;
  padding: 10px 10px 15px 10px;
  margin-bottom: 8px;
  font-size: 20px;

  &:hover,
  &:focus {
    font-size: 24px;
  }
`;

const Hr = styled.hr`
  border: none;
  color: black;
  height: 2px;
  width: 100%;
  margin: 50px;
  background: black;
  right: 20px;
`;

export default function Header() {
  const [menuOn, setMenuOn] = useState(true);

  return (
    <HeaderStyled>
      <div></div>
      <LoginImg src="/LoginFace.png" alt="Login Symbol" />
      <Link href="/">
        <LogoImg src="/BlackHandyPrayBG.png" alt="PrayNow Logo" />
      </Link>
      <p>{console.log(menuOn)}</p>
      <HamburgerButton onClick={() => setMenuOn(!menuOn)}>
        <HamburgerContent className={menuOn ? '' : 'hidden'}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerContent>

        <HamburgerContent className={menuOn ? 'hidden' : ''}>
          X
        </HamburgerContent>
      </HamburgerButton>

      <Nav className={menuOn ? 'hidden' : ''}>
        <ul>
          <li>
            <Link href="/">
              <NoDeco title="Home">Home</NoDeco>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <NoDeco title="Login">Login</NoDeco>
            </Link>
          </li>
          <li>
            <Link href="/pray">
              <NoDeco title="Pray-Requests">PrayRequests</NoDeco>
            </Link>
          </li>
          <li>
            <Link href="/">
              <NoDeco title="You Prayed">You Prayed</NoDeco>
            </Link>
          </li>
          <Hr />
          <li>
            <Link href="/">
              <NoDeco title="Options">Options</NoDeco>
            </Link>
          </li>
          <li>
            <Link href="/">
              <NoDeco title="Other">Other</NoDeco>
            </Link>
          </li>
        </ul>
      </Nav>

      {/* <button>
        <HamburgerImg src="/Hamburger.png" alt="Hamburger Menu Logo" />
      </button> */}
    </HeaderStyled>
  );
}
