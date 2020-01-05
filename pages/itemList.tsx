import * as React from 'react';

import ItemsOverview from 'items/Overview';
import Layout from 'Layout';

const ITEMLIST = [
  {
    name: 'Next JS',
    description: 'The React framework'
  },
  {
    name: 'React JS',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    name: 'Typescript',
    description: 'JavaScript that scales'
  }
];

const itemList: React.SFC = () => (
  <Layout>
    <ItemsOverview itemList={ITEMLIST} />;
  </Layout>
);

export default itemList;
