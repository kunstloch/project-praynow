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

const Submit = styled.button`
  margin: 20px;
  padding: 10px;
  width: 30%;
  text-align: center;
  background-color: #ebebeb;
  font-size: (1em + 1vw);
`;

const Login = () => (
  <>
    <MainBox>
      <MainH>Login</MainH>
    </MainBox>
    <br />
    <h2>Enter your Login Data</h2>

    <Container>
      <Input type="text" placeholder="name" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Submit>Submit</Submit>
    </Container>
  </>
);

export default Login;
