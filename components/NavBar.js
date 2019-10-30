import React from 'react';
import Link from 'next/link';

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
