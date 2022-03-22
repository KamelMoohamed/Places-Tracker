import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";
import Backdrop from "../UIElements/Backdrop";
const MainNavigation = (props) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerHandler = () => {
    setDrawerOpen(true);
  };

  const closeHandler = () => {
    setDrawerOpen(false);
  };
  return (
    <React.Fragment>
      {isDrawerOpen && <Backdrop onClick={closeHandler} />}
      {isDrawerOpen && (
        <SideDrawer show={isDrawerOpen} onClick={closeHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={drawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
