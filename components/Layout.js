import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 640px;
    margin: auto;
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      background-color: #CDCDCD;
  }
  p {
    margin-top: 0;
    font-size: (1em + 1vw); 
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    font-size: (1em + 1vw); 
    }

  h1 {
    color: #FF0000;
    margin: 15px;
    text-align: center;
    font-size: 2em; 
    }

  h2 {
    color: black;
    margin: 15px;
    text-align: center;
    font-size: 1.5em;
    }
`;

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>PrayNow</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap"
          rel="stylesheet"
        ></link>

        <link href="AugsburgerSchriftCAT.ttf" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <Header user={user} loading={loading} />

      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
