import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";
import "./InfoModal.scss";

const RenderInfo = (arg) => {
  return <div></div>;
};

const InfoModals = (props) => {
  const { data } = props.param.modal;
  return (
    <div className="_modal-container">
      <CloseIcon
        onClick={() => props.param.setModal()}
        className="__close-panel"
      />
      <div className="__modal-header">
        <img src="https://i.pravatar.cc/100" alt="Wierd Rick" />
        <span>
          <h2>{data.name}</h2>
          <div className="_eval">
            <small>{data.description}</small>
          </div>
          <small className="created_by">
            <em> {`Created By: ${data.nameWithOwner.split("/")[0]}`}</em>
          </small>
        </span>
      </div>
      <div className="__header-body">
        <div className="__info">
          <strong>Stars</strong>
          <p>{data.stargazers.totalCount}</p>
        </div>
        <div className="__info">
          <strong>Forks</strong>
          <p>{data.forks.totalCount}</p>
        </div>
        <div className="__info">
          <strong>Primary Language</strong>
          <p>{data.primaryLanguage.name}</p>
        </div>
        <div className="__info">
          <strong>Last Modified</strong>
          <p>{new Date(data.updatedAt).toString().slice(0, 16)}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoModals;
