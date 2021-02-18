import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";
import "./InfoModal.scss";

const RenderInfo = (arg) => {
  return <div></div>;
};

const InfoModals = (props) => {
  console.log(props);
  return (
    <div className="_modal-container">
      <CloseIcon
        onClick={() => props.param.setModal()}
        className="__close-panel"
      />
      <div className="__modal-header">
        <img src="https://i.pravatar.cc/100" alt="Wierd Rick" />
        <span>
          <h3>Wierd Rick</h3>
          <div className="_eval">
            <FiberManualRecordIcon className="__dot" />
            <small>Alive - Cronenberg</small>
          </div>
        </span>
      </div>
      <div className="__header-body">
        <div className="__info">
          <strong>Gender</strong>
          <p>Male</p>
        </div>
        <div className="__info">
          <strong>Gender</strong>
          <p>Male</p>
        </div>
        <div className="__info">
          <strong>Gender</strong>
          <p>Male</p>
        </div>
        <div className="__info">
          <strong>Gender</strong>
          <p>Male</p>
        </div>
      </div>
    </div>
  );
};

export default InfoModals;
