import React from 'react';

import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

// const H2 = styled.h2`
//   margin-top: 50px;
//   background-color: white;
//   margin-left: 0;
//   margin-right: 0;
//   padding: 10px;
// `;

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  width: 50%;
  text-align: center;
  background-color: white;
  border-radius: 10px 10px;
  font-size: (1em + 1vw);
  ::placeholder {
    font-size: (1em + 1vw);
    text-align: left;
    padding-left: 20px;
  }
`;

const Div = styled.div`
  margin: 15px;
  padding: 15px;
  text-align: center;
  background-color: white;
  font-size: (1em + 1vw);
  border-radius: 15px;
`;

const Smaller = styled.p`
  font-size: 14px;
  margin: 10px;
  text-align: left;
`;

const Imprint = () => (
  <>
    <MainBox>
      <MainH>Impressum – Legal Notice</MainH>
    </MainBox>
    <br />
    <h2>PrayMe Project</h2>

    <Container>
      <Div>
        <Smaller>
          Next.js, set up Database with GraphCMS, connecting Cloudinary for
          hosting images, authorization and authentication implementing Auth0
        </Smaller>
        <br />
        Impressum:
        <br />
        <br /> Alexander Scherer-Sokolowski
        <br />
        Tel: +43 664 7501 8228
        <br />
        Schulstrasse 1<br />
        7304 Grosswarasdorf - Österreich
        <p>
          <a href="https://alexscherer.dev/">www.alexscherer.dev</a>
        </p>
      </Div>
    </Container>
  </>
);

export default Imprint;
