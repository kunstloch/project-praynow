import React, { useState } from 'react';
import CreatePrayRequest from '../components/CreatePrayRequest';
import Link from 'next/link';
import { withApollo } from '../lib/apollo';
import styled from 'styled-components';

// TEST TEST TEST
// import auth0 from '../lib/auth0';
// import { fetchUser } from '../lib/user';
// import { useFetchUser } from '../lib/user';

const WhiteBorder = styled.p`
  border-radius: 15px 15px;
  background-color: white;
  padding: 10px;
  margin: 40px;
  text-align: center;
`;

const LinkLogin = styled.a`
  text-decoration: none;
  cursor: pointer;
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

function PrayRequest({ user, loading }) {
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

      {!loading &&
        (user ? (
          <>
            <h2>Create Pray Request</h2>

            <div>
              <CreatePrayRequest user={user} />
            </div>
            <div>{console.log('User Here: ', user)}</div>
          </>
        ) : (
          <>
            <h2>Login / Sign-Up</h2>

            <div>
              <WhiteBorder>
                <Link href="api/login">
                  <LinkLogin>Login</LinkLogin>
                </Link>
              </WhiteBorder>
              <WhiteBorder>
                <Link href="api/signup">
                  <LinkLogin>Sign-Up</LinkLogin>
                </Link>
              </WhiteBorder>
            </div>
          </>
        ))}
    </>
  );
}

export default withApollo(PrayRequest);
