import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import { userInfo } from 'os';
import auth0 from '../lib/auth0';

const Input = styled.input`
  background-color: white;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const CREATE_PRAY = gql`
  mutation createPray($auth0Sub: String!, $id: ID!) {
    createPray(
      data: {
        status: PUBLISHED
        userAccount: { connect: { auth0Sub: $auth0Sub } }
        prayRequest: { connect: { id: $id } }
      }
    ) {
      id
      createdAt
      updatedAt
    }
  }
`;

//  After creating Pray -> show PrayRequest list

// const GET_POSTS = gql`
//   query allPosts($first: Int!, $skip: Int!) {
//     allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
//       id
//       prayRequestTitel
//       votes
//       prayRequestText
//       createdAt
//       prayRequestImageUrl
//     }
//   }
// `;

export default function CreatePray(id) {
  const [createPray, { error, data }] = useMutation(CREATE_PRAY);

  // update: (proxy, mutationResult) => {
  //   const { allPosts } = proxy.readQuery({
  //     query: GET_POSTS,
  //     variables: { first: 10, skip: 0 }
  //   });
  //   const newPost = mutationResult.data.createPrayRequest;
  //   proxy.writeQuery({
  //     query: GET_POSTS,
  //     variables: { first: 10, skip: 0 },
  //     data: {
  //       allPosts: [newPost, ...allPosts]
  //     }
  //   });
  // }

  createPray({
    variables: {
      auth0Sub: auth0,
      id: id
    }
  });
  // return alert('Thank you for praying!');
}
