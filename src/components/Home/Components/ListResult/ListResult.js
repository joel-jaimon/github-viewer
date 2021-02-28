import { LinearProgress } from "@material-ui/core";
import React from "react";
import List from "./Components/List";
import "./ListResult.scss";

const ListResult = ({ result, load }) => {
  return (
    <div className="__listResult">
      {load === "no-results" ? (
        <div className="__list no-results">No Results Found.</div>
      ) : load === "loading" ? (
        <LinearProgress />
      ) : (
        result.map((q) => {
          return <List data={q} />;
        })
      )}
    </div>
  );
};

export default ListResult;
