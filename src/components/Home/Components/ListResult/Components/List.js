import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { ModalContext } from "../../../../../context/ModalContext";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./List.scss";
import StarIcon from "@material-ui/icons/Star";

const List = ({ data }) => {
  const modalContext = useContext(ModalContext);

  return (
    <div
      onClick={() =>
        modalContext.setModal({
          type: "InfoModal",
          data: data.node,
        })
      }
      className="__list"
    >
      <div className="__user_info">
        <Avatar sizes="smaller" src={data.node.openGraphImageUrl} />
        <p>{data.node.name}</p>
      </div>
      <div className="_eval">
        <StarIcon className="_stars" />
        <small>{data.node.stargazers.totalCount}</small>
      </div>
    </div>
  );
};

export default List;
