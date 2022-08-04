import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./navbar.sass";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">{/* <Logo /> */}I am Chef</div>
      <nav>
        <ul className="nav-link-list">
          <li>
            <Link className="link--item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link--item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link--item" to="/signup">
              <VscAccount />
            </Link>
          </li>
          <li>
            <Link to="/recipe">
              <Button
                buttonStyle="btn--secondary--solid"
                buttonSize="btn--large"
              >
                + Submit Recipe
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
