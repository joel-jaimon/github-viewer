import React from "react";
import { useState } from "react";

export const ModalContext = React.createContext({
  modals: null,
  setModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [modal, setModal] = useState();
  return (
    <ModalContext.Provider
      value={{
        modal: modal,
        setModal: setModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
