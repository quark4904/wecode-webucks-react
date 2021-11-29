import React from "react";
import "./List.scss";

function TopNav() {
  return (
    <>
      <nav>
        <div id="logo">
          <a id="logoGoHome" href="login.html">
            WeBucks
          </a>
        </div>
        <div id="menu">
          <a className="menuClass" href="##">
            COFFEE
          </a>
          <a className="menuClass" href="##">
            MENU
          </a>
          <a className="menuClass" href="##">
            STORE
          </a>
          <a className="menuClass" href="##">
            WHAT'S NEW
          </a>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
