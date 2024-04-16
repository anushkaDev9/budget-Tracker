import React from "react";

import "./SideDrawer.css";
import NavLinks from "../components/NavLinks";
const SideDrawer = (props) => {


  return (
    <div className={`sideDrawer ${props.class}`}>
      <button onClick={props.onClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
     <NavLinks/>
    </div>
  );
};

export default SideDrawer;
