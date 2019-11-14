import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// const HamburgerDiv = styled.div`
//   width: 35px;
//   height: 5px;
//   background-color: black;
//   margin: 6px 0;
// `;

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>Sign-Up</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
