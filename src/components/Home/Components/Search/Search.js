import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.scss";
const axios = require("axios");

const Search = ({ setResult, setLoad }) => {
  let timeout;
  const handleSearch = (e) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (e.length === 0) {
      setResult([]);
      setLoad(false);
    }
    if (e.length > 1) {
      setLoad("loading");
      timeout = setTimeout(() => {
        axios({
          url: "https://api.github.com/graphql",
          method: "post",
          data: {
            query: `
          query{
            search(query:"${e}", type:REPOSITORY,first:10){
          edges {
                node {
                  ... on Repository {
                    name
                    openGraphImageUrl
                    description
                    primaryLanguage{
                      name
                    }
                      nameWithOwner
                    stargazers {
                      totalCount
                    }
                    forks {
                      totalCount
                    }
                    updatedAt
                  }
                }
              }
            }
          }
          `,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + "_______ADD YOUR TOKEN HERE",
          },
        }).then((result) => {
          if (result.data.data) {
            setLoad(false);
            console.log(result.data.data.search.edges);
            setResult(result.data.data.search.edges);
          } else {
            setLoad("no-results");
          }
        });
      }, 1000);
    }
  };
  return (
    <div className="__input-container">
      <SearchIcon />
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search for a contact"
      />
    </div>
  );
};

export default Search;
