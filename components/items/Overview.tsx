import * as React from 'react';

import * as T from 'items/types';

export interface ItemsOverviewProps {
  itemList?: T.ItemList;
}

export default class Overview extends React.Component<ItemsOverviewProps> {
  renderItemList = (itemList?: T.ItemList): JSX.Element => {
    if (!itemList || itemList.length === 0) {
      return <p>No items</p>;
    }

    return (
      <ul>
        {itemList.map(
          (item: T.Item): JSX.Element => (
            <li key={item.name}>
              {item.name}: {item.description}
            </li>
          )
        )}
      </ul>
    );
  };

  render(): JSX.Element {
    const { itemList } = this.props;
    return (
      <div>
        <h1>Items Overview</h1>
        <div className="Item__List">{this.renderItemList(itemList)}</div>
      </div>
    );
  }
}
