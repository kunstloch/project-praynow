import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';
import React, { useState } from 'react';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 40px 40px 100px 100px auto;
  grid-gap: 5px;
  border: 3px solid black;
  margin-bottom: 10px;
  background: white;
`;

const GridItemMeta = styled.div`
  justify-self: center;
  align-self: center;
  background: white;
  grid-area: 1 / 1 / 2 / 2;
  border-bottom: 3px solid black;
  padding: 0 5px 5px 5px;
  border-radius: 0px 0px 5px 0px;
`;

const GridItemCat = styled.div`
  justify-self: right;
  align-self: center;
  background: white;
  grid-area: 1 / 3 / 2 / 4;
  border-bottom: 3px solid black;
  padding: 0 15px 5px 25px;
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
`;

const GridItemPrays = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: white;
  grid-area: 5 / 1 / 6 / 3;

  .hidden {
    display: none;
  }
`;

const ImgRound = styled.img`
  border-radius: 50%;
  height: 100px;
  border: 3px solid black;
`;

export const ONE_USERACCOUNT_QUERY = gql`
  query User($userScreenName: String!) {
    userAccount(where: { userScreenName: $userScreenName }) {
      userScreenName
      createdAt
      userProfileImageUrl
      prayRequest {
        id
        prayRequestTitel
        createdAt
        prays {
          id
          userAccount {
            userScreenName
          }
        }
      }
    }
  }
`;

export const prayRequestsQueryVars = {
  skip: 0,
  first: 2
};

export default function OneUserDetail({ userScreenName }) {
  console.log(userScreenName);

  const [hiddenOn, setHiddenOn] = useState(null);
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ONE_USERACCOUNT_QUERY,
    {
      // ...prayRequestsQueryVars,
      variables: { userScreenName: userScreenName }

      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
    }
  );

  // const loadingMorePrayRequests = networkStatus === NetworkStatus.fetchMore;

  // const loadMorePrayRequests = () => {
  //   fetchMore({
  //     variables: {
  //       skip: userAccount.prayRequests.length
  //     },
  //     updateQuery: (previousResult, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) {
  //         return previousResult;
  //       }
  //       return Object.assign({}, previousResult, {
  //         // Append the new posts results to the old one
  //         prayRequests: [
  //           ...previousResult.prayRequests,
  //           ...fetchMoreResult.prayRequests
  //         ]
  //       });
  //     }
  //   });
  // };

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;

  const { userAccount: userAccount } = data;
  // const areMorePrayRequests =
  //   prayRequests.length < prayRequestsConnection.aggregate.count;

  const date = userAccount.createdAt.substring(
    0,
    userAccount.createdAt.indexOf('T')
  );

  return (
    <section>
      <div>{userAccount.userScreenName}</div>
      <div>User since: {date}</div>
      <ImgRound src={userAccount.userProfileImageUrl} />

      <br />
      {/* {areMorePrayRequests && (
        <button
          onClick={() => loadMorePrayRequests()}
          disabled={loadingMorePrayRequests}
        >
          {loadingMorePrayRequests ? 'Loading...' : 'Show More'}
        </button>
      )} */}
    </section>
  );
}
