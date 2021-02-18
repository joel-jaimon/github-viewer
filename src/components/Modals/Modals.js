import React, { useContext } from "react";
import "./Modals.scss";
import { ModalContext } from "../../context/ModalContext";
import InfoModals from "./Components/InfoModal";

const Modals = () => {
  const modalContext = useContext(ModalContext);
  const modalParams = {
    modal: modalContext.modal,
    setModal: modalContext.setModal,
  };
  const ModalComponent = {
    InfoModal: <InfoModals param={modalParams} />,
  };
  return modalContext.modal?.type ? (
    <div className="__modal">{ModalComponent[modalContext.modal.type]}</div>
  ) : null;
};

export default Modals;
