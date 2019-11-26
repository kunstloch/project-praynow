import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';
import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';

export const UPSERT_USERACCOUNT_QUERY = gql`
  mutation upsertUserAccount(
    $userName: String!
    $userScreenName: String!
    $userProfileImageUrl: String!
    $auth0Sub: String!
  ) {
    upsertUserAccount(
      where: { auth0Sub: $auth0Sub }
      create: {
        userName: $userName
        userScreenName: $userScreenName
        userProfileImageUrl: $userProfileImageUrl
        auth0Sub: $auth0Sub
        status: PUBLISHED
      }
      update: { userProfileImageUrl: $userProfileImageUrl }
    ) {
      id
      createdAt
      updatedAt
    }
  }
`;

export default function CreateUser(props) {
  const [hiddenOn, setHiddenOn] = useState(null);
  console.log('props are here: ', props.user.name);
  const [upsertUserAccount, { error, data, user, loading }] = useMutation(
    UPSERT_USERACCOUNT_QUERY,
    {
      variables: {
        userName: props.user.name,
        userScreenName: props.user.given_name + props.user.family_name,
        userProfileImageUrl: props.user.picture,
        auth0Sub: props.user.sub
      }
    }
  );

  if (error) return;
  <>
    <ErrorMessage message="Error loading" />
  </>;

  if (loading) return <div>Loading</div>;

  // const { userAccount: userAccount } = data;
  // const areMorePrayRequests =
  //   prayRequests.length < prayRequestsConnection.aggregate.count;

  upsertUserAccount({
    variables: {
      userName: props.user.name,
      userScreenName: props.user.given_name + props.user.family_name,
      userProfileImageUrl: props.user.picture,
      auth0Sub: props.user.sub
    }
  });

  return (
    <>
      <div>User Created! </div>

      <section>
        <br />
      </section>
      {Router.push('/')}
    </>
  );
}
