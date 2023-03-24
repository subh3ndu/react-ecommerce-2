import React, { useState, useEffect } from "react";
import { BsCartCheck, BsCartCheckFill } from "react-icons/bs";

const Card = ({ item, setFilter, setCartItems }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col items-center w-11/12 mx-auto px-6 py-10 rounded-md shadow-lg md:flex-row md:gap-x-4 md:py-8">
      <img
        src={item.image}
        alt="Product's image"
        className="w-40 mb-4 sm:mb-0 sm:p-4 select-none pointer-events-none"
      />
      <div>
        <h1 className="text-xl font-bold mb-2 sm:text-2xl text-center sm:text-left">
          {item.title}
        </h1>
        <p className="text-sm text-gray-700 mb-2 sm:text-md">
          {item.description}
        </p>
        <div className="flex self-start items-center mb-2 gap-x-2">
          <p
            className={
              item.rating.rate >= 4.0
                ? "text-green-500"
                : item.rating.rate >= 3.0
                ? "text-yellow-500"
                : "text-red-500"
            }
          >
            {item.rating.rate}
          </p>
          <p className="select-none text-2xl text-gray-700">•</p>
          <p className="text-gray-400">{item.rating.count}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="font-bold flex self-start mb-2 text-lg">
            ${item.price}
          </p>
          <div
            className="mb-2 hover:text-green-500"
            onClick={() => {
              setChecked((prevState) => !prevState);
              !checked
                ? setCartItems((prevItems) => [...prevItems, item])
                : setCartItems((prevItems) =>
                    prevItems.filter((prevItem) => prevItem.id !== item.id)
                  );
            }}
          >
            {!checked ? (
              <BsCartCheck size={20} />
            ) : (
              <BsCartCheckFill size={20} />
            )}
          </div>
        </div>
        <div
          className="inline bg-gray-500 px-2 py-1 rounded-lg text-xs text-white capitalize cursor-pointer select-none md:inline"
          onClick={() => setFilter(item.category)}
        >
          {item.category}
        </div>
      </div>
    </div>
  );
};

export default Card;
