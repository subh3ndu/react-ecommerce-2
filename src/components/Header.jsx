import React from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShopping } from "react-icons/ai";

const Header = ({
  search,
  setSearch,
  filter,
  setFilter,
  setToggleCart,
  length,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-400">
      <div className="flex justify-between items-center h-full px-6 md:w-2/3 md:mx-auto md:px-10">
        <input
          className="outline-none w-[250px] md:w-96 rounded-lg pl-3 py-1"
          name="searchInput"
          value={search}
          placeholder=" Search here..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {filter && (
          <div className="bg-gray-500 px-2 py-1 rounded-lg text-xs text-white capitalize cursor-pointer select-none flex items-center gap-x-1">
            <RxCross2
              className="hover:text-red-500"
              onClick={() => setFilter("")}
            />
            <p>{filter}</p>
          </div>
        )}

        <div
          className="relative w-10 h-10 hover:bg-gray-600 hover:bg-opacity-60 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setToggleCart((prevState) => !prevState)}
        >
          <AiOutlineShopping size={25} color="white" className="z-10" />
          <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-blue-500 text-white z-0 flex items-center justify-center">
            {length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
