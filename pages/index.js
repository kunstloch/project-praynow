import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const WhiteBorder = styled.p`
  border-radius: 15px 15px;
  background-color: white;
  padding: 10px;
  margin: 40px;
  text-align: center;
`;

const LinkLogin = styled.a`
  text-decoration: none;
`;

const MainBox = styled.div`
  margin-top: 150px;
  height: 150px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainH = styled.h1`
  letter-spacing: -0.03em;
  text-transform: uppercase;
  /* margin-top: 150px; */
  background-color: white;
  margin-left: 0;
  margin-right: 0;
`;

const Home = () => {
  return (
    <>
      <MainBox>
        <MainH>
          Pray with Others
          <br /> - <br />
          Set Pray Requests
        </MainH>
      </MainBox>
      <br />
      <h2>Login / Sign-Up</h2>

      <div>
        <WhiteBorder>
          <Link href="/login">
            <LinkLogin>Login</LinkLogin>
          </Link>
        </WhiteBorder>
        <WhiteBorder>
          <Link href="/signup">
            <LinkLogin>Sign-Up</LinkLogin>
          </Link>
        </WhiteBorder>
      </div>
    </>
  );
};

export default Home;
