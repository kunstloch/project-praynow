import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
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

function Home({ user, loading }) {
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
            <h2>Hi {user.given_name}! </h2>

            <div>
              <WhiteBorder>
                <Link href="pray">
                  <LinkLogin>Pray Request List</LinkLogin>
                </Link>
              </WhiteBorder>
              <WhiteBorder>
                <Link href="/prayrequest">
                  <LinkLogin>Create Pray Request</LinkLogin>
                </Link>
              </WhiteBorder>
              <WhiteBorder>
                <Link href="pray">
                  <LinkLogin>Your Prayed For</LinkLogin>
                </Link>
              </WhiteBorder>
            </div>
          </>
        ) : (
          <>
            <h2>Login / Sign-Up</h2>

            <div>
              <WhiteBorder>
                <Link href="api/login">
                  <LinkLogin>Login / Sign Up</LinkLogin>
                </Link>
              </WhiteBorder>
              {/* <WhiteBorder>
                <Link href="api/signup">
                  <LinkLogin>Sign-Up</LinkLogin>
                </Link>
              </WhiteBorder> */}
            </div>
          </>
        ))}
    </>
  );
}

// TEST TEST TEST
// Home.getInitialProps = async ({ req, res }) => {
//   // On the server-side you can check authentication status directly
//   // However in general you might want to call API Routes to fetch data
//   // An example of directly checking authentication:
//   if (typeof window === 'undefined') {
//     const { user } = await auth0.getSession(req);
//     if (!user) {
//       res.writeHead(302, {
//         Location: 'api/login'
//       });
//       res.end();
//       return;
//     }
//     return { user };
//   }

//   // To do fetches to API routes you can pass the cookie coming from the incoming request on to the fetch
//   // so that a request to the API is done on behalf of the user
//   // keep in mind that server-side fetches need a full URL, meaning that the full url has to be provided to the application
//   const cookie = req && req.headers.cookie;
//   const user = await fetchUser(cookie);

//   // A redirect is needed to authenticate to Auth0
//   if (!user) {
//     if (typeof window === 'undefined') {
//       res.writeHead(302, {
//         Location: 'api/login'
//       });
//       return res.end();
//     }

//     window.location.href = 'api/login';
//   }

//   return { user };
// };
// TEST TEST TEST

export default Home;
