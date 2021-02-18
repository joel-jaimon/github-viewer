import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.scss";

const Search = () => {
  return (
    <div className="__input-container">
      <SearchIcon />
      <input type="text" placeholder="Search for a contact" />
    </div>
  );
};

export default Search;
