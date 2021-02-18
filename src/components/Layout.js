import React from "react";
import Modals from "./Modals/Modals";

const Layout = (props) => {
  return (
    <div className="">
      <Modals />
      {props.children}
    </div>
  );
};

export default Layout;
