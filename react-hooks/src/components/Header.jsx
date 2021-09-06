import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContex";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const color = useContext(ThemeContext);

  const HandleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1 style={{ color: color }}>React Hooks</h1>
      <button onClick={HandleClick} type="button">
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
      <button onClick={() => setDarkMode(!darkMode)} type="button">
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
};

export default Header;
