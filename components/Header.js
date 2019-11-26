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
  width: 45px;
  left: 5px;
  top: 45px;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  border: 2px solid black;
  &:hover,
  &:focus {
    top: 42px;
    width: 50px;
    left: 2px;
    border: 3px solid black;
  }
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
  cursor: pointer;

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
  border-bottom: 5px solid black;
  border-bottom-left-radius: 25px;

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

const NavLeft = styled.nav`
  position: fixed;
  top: 110px;
  left: 0;
  height: 50%;
  width: 30%;

  bottom: 0;
  background: rgb(255, 225, 0, 0.97);
  border-right: 5px solid black;
  border-bottom: 5px solid black;

  border-bottom-right-radius: 25px;
  &.hidden {
    display: none;
  }

  ul {
    padding-left: 20px;
  }

  li {
    text-decoration: none;
    list-style-type: none;
    margin: 30px 0px 5px 5px;
    font-size: (20px);
    font-weight: bold;
  }
`;

const NavLeftLogin = styled.nav`
  position: fixed;
  top: 110px;
  left: 0;
  height: 15%;
  width: 30%;
  text-align: left;

  bottom: 0;
  background: rgb(255, 225, 0, 0.97);
  border-right: 5px solid black;
  border-bottom: 5px solid black;
  border-bottom-right-radius: 25px;
  &.hidden {
    display: none;
  }

  ul {
    padding-left: 20px;
  }

  li {
    text-decoration: none;
    list-style-type: none;
    margin: 30px 0px 5px 5px;
    font-size: (20px);
    font-weight: bold;
  }
`;

const NoDeco = styled.a`
  text-decoration: none;
  padding: 10px 10px 15px 10px;
  margin-bottom: 8px;
  font-size: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    font-size: 24px;
  }
`;

const NoDecoLeft = styled.a`
  text-decoration: none;
  padding: 10px 10px 15px 0px;
  margin-bottom: 8px;
  font-size: 20px;
  cursor: pointer;
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

const HrLeft = styled.hr`
  border: none;
  color: black;
  height: 2px;
  width: 80%;
  margin: 20px 0px 10px 0px;
  background: black;
  left: 0px;
`;

export default function Header({ user, loading }) {
  const [menuOn, setMenuOn] = useState(true);
  const [menuLeftOn, setMenuLeftOn] = useState(true);

  return (
    <HeaderStyled>
      <div></div>
      {/* show dummy if user is not logged in */}
      {!loading &&
        (user ? (
          <LoginImg
            src={user.picture}
            alt="user picture"
            onClick={() => setMenuLeftOn(!menuLeftOn)}
          />
        ) : (
          <LoginImg
            src="/LoginFace.png"
            alt="user symbol"
            onClick={() => setMenuLeftOn(!menuLeftOn)}
          />
        ))}
      <Link href="/">
        <LogoImg src="/BlackHandyPrayBG.png" alt="PrayNow Logo" />
      </Link>
      <p></p>
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
              <NoDeco title="Home" onClick={() => setMenuOn(!menuOn)} s>
                Home
              </NoDeco>
            </Link>
          </li>
          <li>
            {!loading &&
              (user ? (
                <Link href="../api/logout">
                  <NoDeco title="Logout" onClick={() => setMenuOn(!menuOn)}>
                    Logout
                  </NoDeco>
                </Link>
              ) : (
                <Link href="../api/login">
                  <NoDeco title="Login" onClick={() => setMenuOn(!menuOn)}>
                    Login
                  </NoDeco>
                </Link>
              ))}
          </li>
          <Hr />
          <li>
            <Link href="/pray">
              <NoDeco title="Pray-Requests" onClick={() => setMenuOn(!menuOn)}>
                Pray Requests
              </NoDeco>
            </Link>
          </li>
          <li>
            <Link href="/">
              <NoDeco title="You Prayed for" onClick={() => setMenuOn(!menuOn)}>
                You Prayed for
              </NoDeco>
            </Link>
          </li>
          <Hr />
          <li>
            <Link href="/">
              <NoDeco title="Options" onClick={() => setMenuOn(!menuOn)}>
                Options
              </NoDeco>
            </Link>
          </li>
          <li>
            <Link href="/Imprint">
              <NoDeco title="Imprint" onClick={() => setMenuOn(!menuOn)}>
                Legal Notice
              </NoDeco>
            </Link>
          </li>
        </ul>
      </Nav>

      {!loading &&
        (user ? (
          <NavLeft className={menuLeftOn ? 'hidden' : ''}>
            <ul>
              <li>
                <Link href="../api/logout">
                  <NoDecoLeft
                    title="Logout"
                    onClick={() => setMenuLeftOn(!menuLeftOn)}
                  >
                    Logout
                  </NoDecoLeft>
                </Link>
              </li>
              <HrLeft />

              <li>
                <Link href="/prayrequest">
                  <NoDecoLeft
                    title="Create Pray Request"
                    onClick={() => setMenuLeftOn(!menuLeftOn)}
                  >
                    Create Pray Request
                  </NoDecoLeft>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <NoDecoLeft
                    title="See Prayed for You"
                    onClick={() => setMenuLeftOn(!menuLeftOn)}
                  >
                    See who Prayed for You
                  </NoDecoLeft>
                </Link>
              </li>
            </ul>
          </NavLeft>
        ) : (
          <NavLeftLogin className={menuLeftOn ? 'hidden' : ''}>
            <ul>
              <li>
                <Link href="../api/login">
                  <NoDecoLeft
                    title="Login"
                    onClick={() => setMenuLeftOn(!menuLeftOn)}
                  >
                    Login
                  </NoDecoLeft>
                </Link>
              </li>
            </ul>
          </NavLeftLogin>
        ))}

      {/* <button>
        <HamburgerImg src="/Hamburger.png" alt="Hamburger Menu Logo" />
      </button> */}
    </HeaderStyled>
  );
}
