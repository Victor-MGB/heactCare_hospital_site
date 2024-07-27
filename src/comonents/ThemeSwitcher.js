import React, { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
// import '../styles/style.css';

function ThemeSwitcher() {
  // Set initial state based on localStorage
  const initialTheme = localStorage.getItem('theme') === 'dark';
  const [dark, setDark] = useState(initialTheme);

  // Apply the theme class to the body on mount
  useEffect(() => {
    const bodyClass = dark ? 'dark-mode' : 'light-mode';
    document.body.classList.add(bodyClass);
  }, [dark]);

  // Toggle theme and save preference to localStorage
  const darkModeHandler = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      const bodyClass = newDark ? 'dark-mode' : 'light-mode';
      document.body.classList.remove(newDark ? 'light-mode' : 'dark-mode');
      document.body.classList.add(bodyClass);
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
      return newDark;
    });
  };

  return (
    <div>
      <button onClick={darkModeHandler} className="p-2">
        {dark ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
