import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';
import React, { useState } from 'react';
import Link from 'next/link';

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
  cursor: pointer;
`;

const Central = styled.div`
  text-align: center;
  margin: 30px 20px 20px 20px;
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

// export const prayRequestsQueryVars = {
//   skip: 0,
//   first: 2
// };

export default function OneUserDetail({ userScreenName }) {
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
      <Central>
        <div>{userAccount.userScreenName}</div>
        <div>User since: {date}</div>
        <ImgRound src={userAccount.userProfileImageUrl} />
        <br />
        <br />
      </Central>
      {/*

      <GridContainer>
        <GridItemDate></GridItemDate>
        <GridItemCat>
          {/* {userAccount.prayRequestCategories[0].categoryName} 
        </GridItemCat>
        <GridItemTitle>
          {userAccount.prayRequest.prayRequestTitel}
        </GridItemTitle>
        <GridItemImg>
          <Img
            src={userAccount.prayRequest.prayRequestImageUrl}
            // width="170px"
            // height="100px"
          />
        </GridItemImg>

        <GridItemText>{userAccount.prayRequest.prayRequestText}</GridItemText>
        <GridItemAuthor>
          {/* <Link href={'/users/' + userAccount.prays.userScreenName}>
            <NoDeco>PR: {userAccount.prays.userScreenName}</NoDeco>
          </Link> 
        </GridItemAuthor>

        <GridItemPrayButton>
          <img src="/BlackHandyPrayBG.png" alt="PrayNow Logo" height="22px" />
          <GridItemButton>Pray</GridItemButton>
        </GridItemPrayButton>

        <GridItemPrays>
          {/* Prays: {userAccount.prays.length + ' '}
          <button
            className={hiddenOn === userAccount.id ? 'hidden' : ''}
            onClick={() => setHiddenOn(userAccount.id)}
          >
            ▼
          </button>
          <button
            className={hiddenOn === userAccount.id ? '' : 'hidden'}
            onClick={() => setHiddenOn(false)}
          >
            ▲
          </button>
          <div className={hiddenOn === userAccount.id ? '' : 'hidden'}>
            {userAccount.prays.map((pray, index) => (
              <div key={index}>
                <Link href={'/users/' + pray.userAccount.userScreenName}>
                  <NoDeco>{pray.userAccount.userScreenName}</NoDeco>
                </Link>
              </div>
            ))}
          </div> 
        </GridItemPrays>
      </GridContainer>*/}
    </section>
  );
}
