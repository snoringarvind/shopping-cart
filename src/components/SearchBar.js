import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const SearchBar = () => {
  const { filterTextValue } = useContext(CartContext);
  const [filterText, setFilterText] = filterTextValue;

  const textChangeHanlder = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        onChange={textChangeHanlder}
        value={filterText}
        placeholder="...search"
      />
    </div>
  );
};

export default SearchBar;
