import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <input
      className={`search-box ${props.classname}`}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
