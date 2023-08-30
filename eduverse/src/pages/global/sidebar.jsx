import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

//importing svg logo
import Logo from "./../../assets/logo";

//importing icons
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  const location = useLocation();

  //menu items
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/list",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      {location.pathname !== "/login" && ( // Check if the current path is not "/login"
        <div
          style={{ width: collapsed ? "200px" : "50px" }}
          className="sidebar"
        >
          {/* <div className={sidebarClassName}> */}
          <div className="top-section">
            <div
              className="logo"
              style={{ display: collapsed ? "block" : "none" }}
            >
              {/* <div className="logo"> */}
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="menu">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="link-icon">{item.icon}</div>
                <div
                  style={{ display: collapsed ? "block" : "none" }}
                  className="link-text"
                >
                  {item.name}
                </div>
                {/* <div className="link-text">{item.name}</div> */}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {location.pathname !== "/login" ? ( // Check if the current path is not "/login"
        <main style={{ marginLeft: collapsed ? "200px" : "50px" }}>
          {children}
        </main>
      ) : (
        <main>{children}</main> // No margin-left on login page
      )}
    </div>
  );
};
export default Sidebar;
