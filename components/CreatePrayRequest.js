import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CREATE_PRAYREQUEST = gql`
  mutation createPrayRequest(
    $prayRequestTitel: String!
    $prayRequestText: String!
    $userScreenName: String!
    $id: ID!
    $prayRequestImageUrl: String!
  ) {
    createPrayRequest(
      data: {
        prayRequestTitel: $prayRequestTitel
        prayRequestText: $prayRequestText
        prayRequestImageUrl: $prayRequestImageUrl
        userAccount: { connect: { userScreenName: $userScreenName } }
        prayRequestCategories: { connect: { id: $id } }
      }
    ) {
      id
      createdAt
      status
      updatedAt
    }
  }
`;

const GET_POSTS = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      prayRequestTitel
      votes
      prayRequestText
      createdAt
      prayRequestImageUrl
    }
  }
`;

export default function Submit() {
  const [prayRequestTitel, setPrayRequestTitel] = useState('');
  const [prayRequestText, setPrayRequestText] = useState('');
  const [userScreenName, setUserScreenName] = useState('');
  const [id, setID] = useState('');
  const [prayRequestImageUrl, setPrayRequestImageUrl] = useState('');

  const [createPrayRequest, { error, data }] = useMutation(CREATE_PRAYREQUEST, {
    variables: {
      prayRequestTitel,
      prayRequestText: prayRequestText,
      userScreenName,
      id,
      prayRequestImageUrl
    },
    update: (proxy, mutationResult) => {
      const { allPosts } = proxy.readQuery({
        query: GET_POSTS,
        variables: { first: 10, skip: 0 }
      });
      const newPost = mutationResult.data.createPrayRequest;
      proxy.writeQuery({
        query: GET_POSTS,
        variables: { first: 10, skip: 0 },
        data: {
          allPosts: [newPost, ...allPosts]
        }
      });
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      prayRequestTitel === '' ||
      prayRequestText === '' ||
      userScreenName === '' ||
      id === '' ||
      prayRequestImageUrl === ''
    ) {
      window.alert('All fields are required.');
      return false;
    }

    createPrayRequest();

    // reset form
    e.target.elements.prayRequestTitel.value = '';
    e.target.elements.prayRequestText.value = '';
    e.target.elements.userScreenName.value = '';
    e.target.elements.id.value = '';
    e.target.elements.prayRequestImageUrl.value = '';
  }

  // prepend http if missing from prayRequestText
  const pattern = /^((http|https):\/\/)/;

  return (
    <Form onSubmit={handleSubmit}>
      <H1>Submit</H1>
      <Input
        placeholder="prayRequestTitel"
        name="prayRequestTitel"
        onChange={e => setPrayRequestTitel(e.target.value)}
      />

      <Input
        placeholder="userScreenName"
        name="userScreenName"
        onChange={e => setUserScreenName(e.target.value)}
      />

      <select name="id" onChange={e => setId(e.target.value)}>
        <option value="ck2ersd0hg3qi0b71cd4khxof">Animals</option>
        <option value="ck2ert0bllfvv0b49gi2yc1vd">Pubilc</option>
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

      <Input
        placeholder="prayRequestText"
        name="prayRequestText"
        onChange={e =>
          setprayRequestText(
            !pattern.test(e.target.value)
              ? `https://${e.target.value}`
              : e.target.value
          )
        }
      />

      <button type="submit">Submit</button>
    </Form>
  );
}
