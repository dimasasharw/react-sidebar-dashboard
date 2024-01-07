import React, { useEffect, useState } from 'react';
import "../styles/navbar.css";
import { GoBellFill } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const [activeTitle, setActiveTitle] = useState('Kandang');

  useEffect(() => {
    setActiveTitle(localStorage.getItem('activeTitle'))
  }, [])
  return (
    <nav className="navbar">
      <div className="nav-title">{activeTitle}</div>
      <div className="nav-text">
        <BsPersonCircle />Hi, <strong>Redis!</strong><GoBellFill />
      </div>
    </nav>
  );
};

export default Navbar;

