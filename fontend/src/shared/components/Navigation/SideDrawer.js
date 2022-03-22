import React from "react";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  return (
    <CSSTransition
      classNames="slide-in-left"
      timeout={200}
      in={props.show}
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
