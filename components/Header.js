import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <div>
        <Link href="/login" prefetch>
          <a>Login</a>
        </Link>
        <Link href="/register" prefetch>
          <a>Register</a>
        </Link>
      </div>
    );
  }
}

export default Header;
