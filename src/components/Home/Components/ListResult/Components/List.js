import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { ModalContext } from "../../../../../context/ModalContext";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./List.scss";

const List = () => {
  const modalContext = useContext(ModalContext);

  return (
    <div
      onClick={() =>
        modalContext.setModal({
          type: "InfoModal",
          data: {},
        })
      }
      className="__list"
    >
      <div className="__user_info">
        <Avatar sizes="smaller" />
        <p>Jessica</p>
      </div>
      <div className="_eval">
        <FiberManualRecordIcon className="__dot" />
        <small>Alive - Cronenberg</small>
      </div>
    </div>
  );
};

export default List;
