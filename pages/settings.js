import React from 'react';

import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 240px;
  cursor: pointer;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.38);
  margin-bottom: 15px;
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

const Submit = styled.button`
  margin: 20px;
  padding: 10px;
  width: 30%;
  text-align: center;
  background-color: #ebebeb;
  font-size: (1em + 1vw);
`;

const Settings = () => (
  <>
    <MainBox>
      <MainH>Settings</MainH>
    </MainBox>
    <br />
    <h2>Change your Color Theme</h2>

    <Container>
      <div>
        <h3>Catholic</h3>
        <Img src="/colors/vatican.png" alt="color scheme" />
      </div>

      <div>
        <h3>Muslim</h3>
        <Img src="/colors/muslim.png" alt="color scheme" />
      </div>
      <div>
        <h3>Jewish</h3>
        <Img src="/colors/jewish.png" alt="color scheme" />
      </div>
      <div>
        <h3>Atheist</h3>
        <Img src="/colors/atheist.png" alt="color scheme" />
      </div>

      <div>
        <h3>Hindu</h3>
        <Img src="/colors/hindu.png" alt="color scheme" />
      </div>
      <div>
        <h3>Protestant</h3>
        <Img src="/colors/protestant.png" alt="color scheme" />
      </div>
      <div>
        <h3>Buddhist</h3>
        <Img src="/colors/buddhist.png" alt="color scheme" />
      </div>
      <br />
      <br />
      <br />

      <div></div>
      <div></div>
    </Container>
  </>
);

export default Settings;
