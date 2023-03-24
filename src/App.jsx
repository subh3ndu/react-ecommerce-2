import { useState, useEffect } from "react";

import { ItemsContextConsumer } from "./contexts/itemsContext";
import Card from "./components/Card";
import Header from "./components/Header";
import ShowSearchResults from "./components/ShowSearchResults";
import ShowFilterResults from "./components/ShowFilterResults";
import CartItem from "./components/CartItem";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="md:w-2/3 md:mx-auto">
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        setToggleCart={setToggleCart}
        length={cartItems.length}
      />
      <div className="mt-16 mb-16">
        {search ? (
          <ShowSearchResults search={search} />
        ) : filter ? (
          <ShowFilterResults filter={filter} />
        ) : (
          <ItemsContextConsumer>
            {({ items }) =>
              items.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  setFilter={setFilter}
                  setCartItems={setCartItems}
                />
              ))
            }
          </ItemsContextConsumer>
        )}
      </div>
      {cartItems.length > 0 && toggleCart && (
        <div className="fixed top-16 w-full max-h-[70vh] overflow-scroll bg-white bg-opacity-90 shadow-xl rounded-md md:w-1/2 md:right-10">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              setCartItems={setCartItems}
            />
          ))}

          <div className="flex justify-between mx-16 my-5">
            <p className="font-bold text-xl">
              Total : ${" "}
              {cartItems.reduce((acc, cur) => {
                return (
                  Math.round(
                    (+acc + Math.round(cur.price * cur.count * 100) / 100) * 100
                  ) / 100
                );
              }, 0)}
            </p>
            <button className="bg-blue-500 hover:bg-blue-900 px-2 py-1 rounded-md shadow-md text-white flex justify-center items-center gap-x-2 mb-5">
              <p>Check Out</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
