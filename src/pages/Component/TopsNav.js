import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <div className="nav">
        <h3>WeBucks</h3>
        <ul>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
          <li>
            <Link to="/List">MENU</Link>
          </li>
          <li>STORE</li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
