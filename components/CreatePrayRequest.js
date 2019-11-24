import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const Input = styled.input`
  background-color: white;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const CREATE_PRAYREQUEST = gql`
  mutation createPrayRequest(
    $prayRequestTitel: String!
    $prayRequestText: String!
    $userScreenName: String!
    $id: ID!
    $prayRequestImageUrl: String
  ) {
    createPrayRequest(
      data: {
        prayRequestTitel: $prayRequestTitel
        prayRequestText: $prayRequestText
        prayRequestImageUrl: $prayRequestImageUrl
        status: PUBLISHED
        userAccount: { connect: { userScreenName: $userScreenName } }
        prayRequestCategories: { connect: { id: $id } }
      }
    ) {
      id
      createdAt
      updatedAt
    }
  }
`;

//  After creating PrayRequest -> show PrayRequest list

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

export default function CreatePrayRequest(user = { user }) {
  const [prayRequestTitel, setPrayRequestTitel] = useState('');
  const [prayRequestText, setPrayRequestText] = useState('');
  const userScreenName = user.user.given_name + user.user.family_name;
  console.log('DAS IST ER DOCH', userScreenName);
  const [id, setId] = useState('ck2ersd0hg3qi0b71cd4khxof');
  const [prayRequestImageUrl, setPrayRequestImageUrl] = useState('');

  const [createPrayRequest, { error, data }] = useMutation(CREATE_PRAYREQUEST);

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

  function handleSubmit(e) {
    e.preventDefault();
    if (prayRequestTitel === '' || prayRequestText === '' || id === '') {
      window.alert('All fields are required.');
      return false;
    }

    createPrayRequest({
      variables: {
        prayRequestTitel: prayRequestTitel,
        prayRequestText: prayRequestText,
        userScreenName: userScreenName,
        id,
        prayRequestImageUrl
      }
    });

    // reset form
    e.target.elements.prayRequestTitel.value = '';
    e.target.elements.prayRequestText.value = '';
    // e.target.elements.userScreenName.value = '';
    e.target.elements.id.value = 'ck2ersd0hg3qi0b71cd4khxof';
    e.target.elements.prayRequestImageUrl.value = '';

    alert('Thank you for the Pray Request! We pray for you. ');

    function afterPrayRequest() {
      return (
        <>
          <div>
            Thank you for the Pray Request! We pray for you.
            <p>
              Find your Pray Request here:
              <Link href="/pray">
                <a>Pray Request List</a>
              </Link>
            </p>
          </div>
        </>
      );
    }
  }

  // prepend http if missing from prayRequestText
  // const pattern = /^((http|https):\/\/)/;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="prayRequestTitel"
        name="prayRequestTitel"
        onChange={e => setPrayRequestTitel(e.target.value)}
      />

      {/* <Input
        placeholder="userScreenName"
        name="userScreenName"
        onChange={e => setUserScreenName(e.target.value)}
      /> */}
      <select name="id" onChange={e => setId(e.target.value)}>
        <option value="ck2ersd0hg3qi0b71cd4khxof">Animals</option>
        <option value="ck2ert0bllfvv0b49gi2yc1vd">Public</option>
        <option value="ck2ertcrilfze0b49gcjg848t">Personal</option>
        <option value="ck2ertirclg190b49qcbsf287">Family</option>
        <option value="ck2erunl5lgie0b49ojco5oxv">Relationship</option>
        <option value="ck2ervimfg4x10b71tuzjmylc">Job</option>
        <option value="ck2erw06tlgyc0b4910jbbhlg">Peace</option>
        <option value="ck2erwq1jg5fv0b71xp1956a8">Evil-Stuff</option>
        <option value="ck2esaijwlm030b49jxnmvft5">Natur</option>
        <option value="ck2hbg3hc81ko0b49t25if5fa">School</option>
        <option value="ck2hbgqlf5lrm0b71js98w60t">Exams</option>
      </select>
      <Input
        placeholder="prayRequestImageUrl"
        name="prayRequestImageUrl"
        onChange={e => setPrayRequestImageUrl(e.target.value)}
      />
      <textarea
        placeholder="prayRequestText"
        name="prayRequestText"
        rows="10"
        cols="20"
        onChange={e => setPrayRequestText(e.target.value)}
      />
      <button type="submit">Submit</button>
      <div>{console.log('User: ', user)}</div>
    </Form>
  );
}
