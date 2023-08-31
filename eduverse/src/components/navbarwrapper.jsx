import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './../pages/global/navbar';

const NavbarWrapper = () => {
  const location = useLocation();

  const pageNames = {
    "/": "Dashboard",
    "/about": "About",
    "/analytics": "Analytics",
    "/comment": "Comment",
    "/product": "Product",
    "/list": "Product List",
    "/settings" : "Settings", 
    "/assignment" : "Assignment"
    // Add more routes and names as needed
  };
  
  if (location.pathname === '/login') {
    return null; // Don't render Navbar on the login page
  }

  return <Navbar activePage={pageNames[location.pathname] || "404 Not Found"} />;
};

export default NavbarWrapper;
