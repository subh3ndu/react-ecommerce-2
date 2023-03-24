import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function CartItem({ cartItem, setCartItems }) {
  const [item, setItem] = useState(cartItem);

  return (
    <div className="w-5/6 mx-auto flex items-center gap-x-4 my-8">
      <img className="w-32" src={item.image} alt="Product's Image" />
      <div>
        <h1 className="text-lg font-bold">{item.title}</h1>
        <div className="flex gap-x-4 mt-4">
          <button
            className="w-6 h-6 flex justify-center items-center text-black rounded-full hover:bg-red-500 hover:bg-opacity-50"
            onClick={() => {
              setItem((prevItem) => ({
                ...prevItem,
                count: prevItem.count - 1,
              }));
              setCartItems((prevCartItems) =>
                prevCartItems.map((prevCartItem) =>
                  prevCartItem.id === item.id
                    ? {
                        ...prevCartItem,
                        count: item.count - 1,
                      }
                    : prevCartItem
                )
              );
            }}
          >
            <AiOutlineMinus />
          </button>
          <button className="text-lg font-bold">{item.count}</button>
          <button
            className="w-6 h-6 flex justify-center items-center text-black rounded-full hover:bg-green-500 hover:bg-opacity-50"
            onClick={() => {
              setItem((prevItem) => ({
                ...prevItem,
                count: prevItem.count + 1,
              }));
              setCartItems((prevCartItems) =>
                prevCartItems.map((prevCartItem) =>
                  prevCartItem.id === item.id
                    ? {
                        ...prevCartItem,
                        count: item.count + 1,
                      }
                    : prevCartItem
                )
              );
            }}
          >
            <AiOutlinePlus />
          </button>
          <p className="font-bold text-lg">
            $ {Math.round(item.price * item.count * 100) / 100}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
