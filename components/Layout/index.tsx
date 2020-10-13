import * as React from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout: React.SFC = props => {
  const { children } = props;
  return <div style={layoutStyle}>{children}</div>;
};

export default Layout;
