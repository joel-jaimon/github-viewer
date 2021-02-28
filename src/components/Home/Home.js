import React, { Component, useState } from "react";
import ListResult from "./Components/ListResult/ListResult";
import Search from "./Components/Search/Search";
import "./Home.scss";

const Home = (props) => {
  const [result, setResult] = useState([]);
  const [load, setLoad] = useState(false);
  return (
    <div id="__home-container">
      <h1>Search For Repositories</h1>
      <div className="__interact-container">
        <Search setLoad={setLoad} setResult={setResult} />
        <ListResult load={load} result={result} />
      </div>
    </div>
  );
};

export default Home;
