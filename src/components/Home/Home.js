import React, { Component, useState } from "react";
import ListResult from "./Components/ListResult/ListResult";
import Search from "./Components/Search/Search";
import "./Home.scss";

const Home = (props) => {
  return (
    <div id="__home-container">
      <h1>Rick and Morty Search</h1>
      <div className="__interact-container">
        <Search />
        <ListResult />
      </div>
    </div>
  );
};

export default Home;
