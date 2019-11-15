import Layout from '../components/Layout';
import React from 'react';
import auth0 from '../lib/auth0';
import { fetchUser } from '../lib/user';
import { useFetchUser } from '../lib/user';

function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Component {...pageProps} user={user} loading={loading} />
    </Layout>
  );
}

// MyApp.getInitialProps = async ({ req, res }) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   if (typeof window === 'undefined') {
//     const { user } = await auth0.getSession(req);
//     if (!user) {
//       res.writeHead(302, {
//         Location: '/api/login'
//       });
//       res.end();
//       return;
//     }
//     return { user };
//   }

//   // To do fetches to API routes you can pass the cookie coming from the incoming request on to the fetch
//   // so that a request to the API is done on behalf of the user
//   // keep in mind that server-side fetches need a full URL, meaning that the full url has to be provided to the application
//   const cookie = req && req.headers.cookie;
//   const user = await fetchUser(cookie);

//   // A redirect is needed to authenticate to Auth0
//   if (!user) {
//     if (typeof window === 'undefined') {
//       res.writeHead(302, {
//         Location: '/api/login'
//       });
//       return res.end();
//     }

//     window.location.href = '/api/login';
//   }

//   return { user };
// };

export default MyApp;
