/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Overview from 'items/Overview';

const ITEMLIST = [
  {
    name: 'item1',
    description: 'This is item1'
  },
  {
    name: 'item2',
    description: 'This is item2'
  },
  {
    name: 'item3',
    description: 'This is item3'
  }
];

describe('Items overview', () => {
  it('renders the h1 title', () => {
    const overview = shallow(<Overview itemList={[]} />);
    expect(overview.find('h1').text()).toEqual('Items Overview');
  });

  it('renders empty item list when no items are provided', () => {
    const overview = shallow(<Overview itemList={[]} />);
    expect(
      overview
        .find('.Item__List')
        .children()
        .find('p')
        .text()
    ).toEqual('No items');
  });

  it('renders item list with 3 items when 3 items are provided', () => {
    const overview = shallow(<Overview itemList={ITEMLIST} />);
    expect(
      overview
        .find('.Item__List')
        .children()
        .find('ul')
        .children()
    ).toHaveLength(3);
  });

  it('renders item list with the expected item on third place', () => {
    const overview = shallow(<Overview itemList={ITEMLIST} />);
    expect(
      overview
        .find('.Item__List')
        .children()
        .find('ul')
        .childAt(2)
        .text()
    ).toEqual('item3: This is item3');
  });
});
