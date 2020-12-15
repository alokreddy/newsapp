import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { getData } from "../actions/index";
import Post from "./Posts";

const SearchParams = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-params">
      {/* <pre>{JSON.stringify(props)}</pre> */}
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
        <Button type="submit">Submit</Button>
      </form>
      <Post data={props.articles} />
    </div>
  );
};

function mapStateToProps(state) {
  return { articles: state.articles, loading: false };
}

export default connect(mapStateToProps, { getData })(SearchParams);
