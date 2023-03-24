import React from "react";

import Card from "./Card";
import { ItemsContextConsumer } from "../contexts/itemsContext";

function ShowFilterResults({ filter }) {
  return (
    <ItemsContextConsumer>
      {({ items }) => {
        const filterItems = items.filter((item) => item.category === filter);
        return filterItems.map((item) => <Card key={item.id} item={item} />);
      }}
    </ItemsContextConsumer>
  );
}

export default ShowFilterResults;
