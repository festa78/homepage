import * as React from 'react';

import Header from 'Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout: React.SFC = props => {
  const { children } = props;
  return (
    <div style={layoutStyle}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
