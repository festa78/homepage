import Link from 'next/link';
import * as React from 'react';

const linkStyle = {
  marginRight: 15
};

const Header: React.SFC = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/itemList">
        <a style={linkStyle}>Item List</a>
      </Link>
    </div>
  );
};

export default Header;
