import React from "react";
import { FaSearch } from "react-icons/fa";
import {AiOutlineSetting} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Navbar = ({ activePage }) => {
  return (
    <div className="navbar">
      <h1>{activePage}</h1>
      <div className="advance">
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </div>
        <NavLink to={'settings'}>
        <AiOutlineSetting className="setting"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
