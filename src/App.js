import React from "react";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import { ModalContextProvider } from "./context/ModalContext";
import "./index.scss";

function App(props) {
  return (
    <ModalContextProvider props={props}>
      <Layout>
        <Home />
      </Layout>
    </ModalContextProvider>
  );
}

export default App;
// d90b4b1946e2ea804bd0081e70ce9038928ed3a2
