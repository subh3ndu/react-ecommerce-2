import React from "react";

import Card from "./Card";
import { ItemsContextConsumer } from "../contexts/itemsContext";

function ShowSearchResults({ search }) {
  return (
    <ItemsContextConsumer>
      {({ items }) => {
        const filterItems = items.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        return (
          <div>
            {filterItems.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        );
      }}
    </ItemsContextConsumer>
  );
}

export default ShowSearchResults;
