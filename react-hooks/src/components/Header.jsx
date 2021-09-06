import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const HandleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button onClick={HandleClick} type="button">
        {darkMode? "DarkMode": "LightMode"}
      </button>
      <button onClick={() => setDarkMode(!darkMode)} type="button">
        {darkMode? "DarkMode": "LightMode"}
      </button>
    </div>
  );
};

export default Header;
