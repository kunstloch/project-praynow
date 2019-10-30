import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  margin-top: 50px;
  background-color: white;
  margin-left: 0;
  margin-right: 0;
  padding: 10px;
`;

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  width: 50%;
  text-align: center;
  background-color: white;
  border-radius: 10px 10px;
`;

const Submit = styled.input`
  margin: 20px;
  padding: 10px;
  width: 30%;
  text-align: center;
  background-color: #ebebeb;
`;

const Login = () => (
  <div>
    <Head>
      <title>Login</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout />
    <H2>LOGIN</H2>

    <Container>
      <Input type="text" placeholder="name" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <Submit type="submit" value="Submit" />
    </Container>
  </div>
);

export default Login;
