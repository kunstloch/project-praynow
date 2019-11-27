import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

const Input = styled.input`
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid black;

  ::placeholder {
    color: #ff0000;
    font-weight: bold;
    padding-left: 3px;
  }
`;

const Textarea = styled.textarea`
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid black;

  ::placeholder {
    color: #ff0000;
    font-weight: bold;
    padding-left: 3px;
    font-size: 14px;
  }
`;

const Select = styled.select`
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid black;
  color: red;
  font-weight: bold;

  option {
    color: black;
  }
`;

const Option = styled.option`
  color: red;
  font-weight: bold;
`;

const Submit = styled.button`
  background-color: #000;
  border: 4px solid #f90;
  color: #f90;
  line-height: 48px;
  margin: 5px;
  padding: 0 30px;
  cursor: pointer;
  position: relative;
  outline: 0 none;
  text-align: center;
  vertical-align: top;
  text-decoration: none;
  font-weight: 700;
  border-radius: 7px;
  font-size: 18px;
`;

const Form = styled.form`
  /* background-color: white; */
  /* display: flex;
  flex-direction: column; */
  /* margin: 10px; */
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 40px 40px 120px 120px auto;
  grid-gap: 5px;
  border: 3px solid black;
  margin-bottom: 30px;

  background: white;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 40px 40px 120px 120px auto;
  grid-gap: 5px;
  border: 3px solid black;
  margin-bottom: 30px;

  background: white;
`;

const ButtonShowMore = styled.button`
  padding: 20px;
  border: 3px solid black;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
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
  padding-bottom: 15px;
  margin: 5px;
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
  cursor: pointer;
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
  cursor: pointer;

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

  button {
    cursor: pointer;
  }
`;

const NoDeco = styled.a`
  text-decoration: none;
  cursor: pointer;
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
    e.target.elements.id.value = '';
    e.target.elements.prayRequestImageUrl.value = '';

    alert('Thank you for the Pray Request! We pray for you. ');
    Router.push('/pray');
  }

  // prepend http if missing from prayRequestText
  // const pattern = /^((http|https):\/\/)/;

  // // *******  cloudinary **********

  // uploadFile = async e => {
  //   console.log('Uploading....');
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append('file', files[0]);
  //   data.append('upload_preset', 'praynow');

  //   const res = await fetch(
  //     'https://res.cloudinary.com/kunstloch/image/upload',
  //     {
  //       method: 'POST',
  //       body: data
  //     }
  //   );

  //   const file = await res.json();
  //   setState({ image: file.secure_url });
  // };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <GridItemDate>Today</GridItemDate>
        <GridItemTitle>
          {' '}
          <Input
            placeholder="Add your Pray Title"
            name="prayRequestTitel"
            onChange={e => setPrayRequestTitel(e.target.value)}
            size="35"
          />
        </GridItemTitle>

        {/* <Input
        placeholder="userScreenName"
        name="userScreenName"
        onChange={e => setUserScreenName(e.target.value)}
      /> */}
        <GridItemCat>
          {' '}
          <Select
            placeholder="Category"
            name="id"
            onChange={e => setId(e.target.value)}
          >
            <Option value="" disabled selected>
              Select Category...
            </Option>
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
          </Select>
        </GridItemCat>
        <GridItemImg>
          <Input
            placeholder="Add URL of Pray Image (optional)"
            name="prayRequestImageUrl"
            onChange={e => setPrayRequestImageUrl(e.target.value)}
          />
        </GridItemImg>
        <GridItemText>
          {' '}
          <Textarea
            placeholder="Add Pray Text"
            name="prayRequestText"
            rows="13"
            cols="23"
            onChange={e => setPrayRequestText(e.target.value)}
          />
        </GridItemText>
        <GridItemPrayButton>
          <Submit type="submit">Submit</Submit>
        </GridItemPrayButton>
        <div>{console.log('User: ', user)}</div>
      </Form>

      <br />

      {/* ------ TEST ------- */}

      {/* <label htmlFor="file">
        Image
        <input
          type="file"
          id="file"
          name="file"
          placeholder="Upload Image"
          required
          onChange={uploadFile}
        />
        {state.image && (
          <img width="200" src={state.image} alt="Upload Preview" />
        )}
      </label> */}

      <br />
    </>
  );
}
