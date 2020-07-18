import React from "react";
import "./TopButton.css"

const TopButton = (props) => {
  return (
    <button className="TopButton">{props.title}</button>
  )
}

export default TopButton;