import React, { useState } from 'react';
import OneUserDetail from '../../components/OneUserDetail';
import Link from 'next/link';
import styled from 'styled-components';
import { withApollo } from '../../lib/apollo';

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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 1fr;
  grid-template-rows: 40px 100px 100px 30px;
  grid-gap: 5px;
  border: 3px solid black;
  margin-bottom: 10px;
  background: white;
`;

const GridItem1 = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: red;
  grid-area: 1 / 1 / 1 / 1;
`;

const GridItem2 = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: tomato;
  grid-area: 2 / 2 / 2 / 2;
`;

const GridItem3 = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: orange;
  grid-area: 3 / 3 / 3 / 3;
`;

const GridItem4 = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: #ffe100;
  grid-area: 4 / 1 / 4 / 4;
`;

const OneUser = userScreenName => {
  return (
    <>
      <MainBox>
        <MainH>User Data</MainH>
      </MainBox>
      <br />
      {/* {console.log('Props: ', props)} */}
      {console.log('Query: ', userScreenName)}
      <h2>
        Details about <br /> {userScreenName.userScreenName}{' '}
      </h2>
      <br />
      <OneUserDetail userScreenName={userScreenName.userScreenName} />
    </>
  );
};

export default withApollo(OneUser);

OneUser.getInitialProps = async ({ query: { userScreenName } }) => {
  return { userScreenName };
};
