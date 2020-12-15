import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import Post from "./Posts";

const SearchParams = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-params">
      <h2>Search results for {searchText}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.getData(searchText);
        }}
      >
        <label htmlFor="search-box">
          Search NewsAPI
          <input
            id="search-box"
            value={searchText}
            placeholder="Search NewsAPI"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Post data={props.articles} />
    </div>
  );
};

function mapStateToProps(state) {
  return { articles: state.articles, loading: false };
}

export default connect(mapStateToProps, { getData })(SearchParams);
