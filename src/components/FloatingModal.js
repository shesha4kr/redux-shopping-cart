import React from "react";
import "./FloatingModal.css";

export const FloatingModal = ({ text }) => {
  //This will hide the modal after 2 seconds
  React.useEffect(() => {
    setTimeout(() => {
      //dispatch HIDE_MODAL action
    }, 2000);
  });

  return (
    <div className="float-modal">
      <p>{text}</p>
    </div>
  );
};
