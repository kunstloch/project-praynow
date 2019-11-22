import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';
import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import CreateUser from './CreateUser';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 40px 40px auto 100px auto;
  grid-gap: 5px;
  border: 3px solid black;
  margin-bottom: 30px;

  background: white;
`;

const GridItemDate = styled.div`
  justify-self: center;
  align-self: center;
  background: white;
  grid-area: 1 / 1 / 2 / 2;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  padding: 0 10px 5px 5px;
  border-radius: 0px 0px 5px 0px;
`;

const GridItemCat = styled.div`
  justify-self: center;
  align-self: center;
  background: white;
  width: 100%;
  text-align: center;
  grid-area: 1 / 3 / 2 / 4;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  border-right: 3px solid black;
  padding: 0 0 5px 0px;
  border-radius: 0px 0px 0px 5px;
`;

const GridItemTitle = styled.div`
  justify-self: stretch;
  align-self: stretch;
  text-align: center;
  padding-top: 10px;
  background: #ffe100;
  font-weight: bold;
  grid-area: 2 / 1 / 3 / 4;
`;

const GridItemImg = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: white;
  padding-top: 10px;

  grid-area: 3 / 3 / 4 / 4;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 200px;
`;

const GridItemText = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: white;
  padding-top: 10px;
  grid-area: 3 / 2 / 5 / 3;
`;

const GridItemAuthor = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: white;
  grid-area: 5 / 3 / 6 / 4;
  border-top: 3px solid black;
  border-left: 3px solid black;
  padding: 5px 10px 5px 5px;
  text-align: center;
  border-radius: 5px 0px 0px 0px;
  background: #ffe100;
`;

const GridItemPrayButton = styled.div`
  justify-self: center;
  align-self: center;
  background: white;
  grid-area: 5 / 2 / 6 / 3;
  text-align: center;
  display: flex;
  margin-right: 10px;
`;

const GridItemButton = styled.button`
  padding: 7px 15px 5px 17px;
  margin-left: 5px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  background: #fff6a5;

  :hover {
    background: #ffe100;
    transition: all 0.4s ease 0s;
  }
`;

const GridItemPrays = styled.div`
  justify-self: stretch;
  padding-left: 3px;
  align-self: center;
  background: white;
  border: none;
  grid-area: 5 / 1 / 6 / 2;

  .hidden {
    display: none;
  }
`;

const NoDeco = styled.a`
  text-decoration: none;
`;

const ImgRound = styled.img`
  border-radius: 50%;
  height: 100px;
  border: 3px solid black;
`;

export const CHECK_SUB_QUERY = gql`
  query CheckSub($auth0Sub: String!) {
    userAccount(where: { auth0Sub: $auth0Sub }) {
      userScreenName
      createdAt
      userProfileImageUrl
      id
    }
  }
`;

export default function CheckUser({ auth0Sub, user }) {
  const [hiddenOn, setHiddenOn] = useState(null);
  const { loading, error, data } = useQuery(CHECK_SUB_QUERY, {
    variables: { auth0Sub: auth0Sub }
  });

  if (error) return;
  <>
    <ErrorMessage message="Error loading posts." />
  </>;

  if (loading) return <div>Loading</div>;

  const { userAccount: userAccount } = data;
  // const areMorePrayRequests =
  //   prayRequests.length < prayRequestsConnection.aggregate.count;

  return (
    <>
      {!userAccount ? (
        <>
          <div>THIS SHOULD START A USER MANIPULATION QUERY!</div>
          <div>STILL WORK ON THIS</div>
          {console.log('This is User from CheckUser', user)}
          <CreateUser user={user} />
        </>
      ) : (
        <>
          <div>JUUUUHHHUUU!</div>
          <div>USER IS HERE</div>
        </>
      )}

      <section>
        <div>{console.log('UserAccount', userAccount)}</div>

        <br />
        <GridContainer>TEST</GridContainer>
      </section>
    </>
  );
}
